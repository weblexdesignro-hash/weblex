import { Resend } from "resend";

// Toate emailurile trimise de site trec prin Resend (resend.com — are un plan gratuit
// generos, suficient pentru un site de agenție). Setează RESEND_API_KEY în .env ca să
// activezi trimiterea reală; până atunci, funcțiile de mai jos doar loghează în consolă
// și nu aruncă eroare, ca site-ul să funcționeze normal chiar fără email configurat.

const FROM = process.env.EMAIL_FROM || "Weblex Design <onboarding@resend.dev>";
const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://weblexdesign.ro";
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || "contact@weblexdesign.ro";

function getClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const SERVICE_TYPE_LABELS: Record<string, string> = {
  "site-web": "Site web de prezentare",
  "magazin-online": "Magazin online",
  redesign: "Redesign site web",
  crm: "CRM",
  "aplicatie-custom": "Aplicație web Custom",
  mentenanta: "Mentenanță",
  seo: "SEO on-page",
  altul: "Alt serviciu",
};

type ContactMessageDoc = {
  name: string;
  email: string;
  phone: string;
  cui?: string | null;
  company?: string | null;
  serviceType?: string | null;
  siteUrl?: string | null;
  message?: string | null;
  selectedPackage?: string | null;
};

export async function sendContactNotification(doc: ContactMessageDoc) {
  const client = getClient();
  const subject = `Mesaj nou de contact — ${doc.name}`;
  const serviceLabel = (doc.serviceType && SERVICE_TYPE_LABELS[doc.serviceType]) || doc.serviceType || "—";
  const html = `
    <h2>Mesaj nou primit prin formularul de contact</h2>
    <p><strong>Nume:</strong> ${doc.name}</p>
    <p><strong>CUI:</strong> ${doc.cui || "—"}</p>
    <p><strong>Companie:</strong> ${doc.company || "—"}</p>
    <p><strong>Email:</strong> ${doc.email}</p>
    <p><strong>Telefon:</strong> ${doc.phone}</p>
    <p><strong>Serviciu solicitat:</strong> ${serviceLabel}</p>
    <p><strong>Pachet ales:</strong> ${doc.selectedPackage || "—"}</p>
    <p><strong>Link site existent:</strong> ${doc.siteUrl || "—"}</p>
    <p><strong>Mesaj:</strong><br/>${doc.message || "—"}</p>
  `;

  if (!client) {
    console.log("[email dezactivat — lipsește RESEND_API_KEY]", subject, doc.email);
    return;
  }

  await client.emails.send({ from: FROM, to: ADMIN_EMAIL, subject, html });
}

type ContractDoc = {
  id: string;
  projectTitle: string;
  clientName: string;
  clientEmail: string;
  publicToken: string;
  signature?: { signedByName?: string | null; signedAt?: string | null } | null;
};

export async function sendContractLink(doc: ContractDoc) {
  const client = getClient();
  const link = `${SITE_URL}/contract/${doc.publicToken}`;
  const subject = `Contract pentru semnare — ${doc.projectTitle}`;
  const html = `
    <h2>Bună, ${doc.clientName},</h2>
    <p>Contractul pentru <strong>${doc.projectTitle}</strong> este gata de semnare.</p>
    <p>Deschide linkul de mai jos, citește textul contractului și semnează direct în pagină:</p>
    <p><a href="${link}" style="display:inline-block;padding:12px 24px;background:#141414;color:#fff;border-radius:999px;text-decoration:none;">Semnează contractul</a></p>
    <p style="color:#6B6B6B;font-size:13px;">Sau copiază acest link în browser: ${link}</p>
  `;

  if (!client) {
    console.log("[email dezactivat — lipsește RESEND_API_KEY] Link semnare:", link);
    return;
  }

  await client.emails.send({ from: FROM, to: doc.clientEmail, subject, html });
}

export async function sendSignedConfirmation(doc: ContractDoc) {
  const client = getClient();
  const subject = `Contract semnat — ${doc.projectTitle}`;
  const signedAt = doc.signature?.signedAt ? new Date(doc.signature.signedAt).toLocaleString("ro-RO") : "";
  const html = `
    <h2>Contract semnat cu succes</h2>
    <p><strong>${doc.projectTitle}</strong> a fost semnat de <strong>${doc.signature?.signedByName || doc.clientName}</strong> la ${signedAt}.</p>
    <p>Poți vedea contractul complet și semnătura în panoul de administrare, la secțiunea Contracts.</p>
  `;

  if (!client) {
    console.log("[email dezactivat — lipsește RESEND_API_KEY] Contract semnat:", doc.projectTitle);
    return;
  }

  // Confirmare atât către admin, cât și către client.
  await Promise.all([
    client.emails.send({ from: FROM, to: ADMIN_EMAIL, subject, html }),
    client.emails.send({ from: FROM, to: doc.clientEmail, subject, html }),
  ]);
}
