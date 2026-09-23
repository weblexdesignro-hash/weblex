import { getPayload } from "payload";
import config from "@payload-config";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { notFound } from "next/navigation";
import ContractSignForm from "@/components/ContractSignForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Semnare contract", robots: { index: false, follow: false } };

async function getContract(token: string) {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "contracts",
    where: { publicToken: { equals: token } },
    limit: 1,
    overrideAccess: true,
  });
  return result.docs[0] || null;
}

export default async function ContractPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const contract = await getContract(token);

  if (!contract || contract.status === "draft") {
    notFound();
  }

  const bodyHtml = contract.contractBody
    ? convertLexicalToHTML({ data: contract.contractBody as any })
    : "";
  const isSigned = contract.status === "signed";

  return (
    <section className="container-px mx-auto max-w-3xl py-32">
      <p className="text-sm font-medium text-brand">Contract</p>
      <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{contract.projectTitle}</h1>
      <p className="mt-2 text-sm text-mist">
        Pentru {contract.clientName} ({contract.clientEmail})
      </p>

      <div
        className="prose prose-neutral mt-10 max-w-none rounded-3xl border border-black/5 bg-white/70 p-8 text-sm leading-relaxed [&_h1]:font-display [&_h2]:font-display [&_h3]:font-display"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />

      <div className="mt-10 rounded-3xl border border-black/5 bg-white/70 p-8">
        {isSigned ? (
          <div className="text-center">
            <p className="font-display text-xl font-semibold text-brand">Contract semnat ✓</p>
            <p className="mt-2 text-sm text-mist">
              Semnat de {contract.signature?.signedByName} la{" "}
              {contract.signature?.signedAt ? new Date(contract.signature.signedAt).toLocaleString("ro-RO") : ""}.
            </p>
            {contract.signature?.dataUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={contract.signature.dataUrl} alt="Semnătură" className="mx-auto mt-4 h-24" />
            )}
          </div>
        ) : (
          <ContractSignForm token={token} clientName={contract.clientName} />
        )}
      </div>
    </section>
  );
}
