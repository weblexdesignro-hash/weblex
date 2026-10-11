"use client";

import { useState, type FormEvent } from "react";

type ServiceValue =
  | "site-web"
  | "magazin-online"
  | "redesign"
  | "crm"
  | "aplicatie-custom"
  | "mentenanta"
  | "seo"
  | "altul";

const serviceOptions: { value: ServiceValue; label: string }[] = [
  { value: "site-web", label: "Site web de prezentare" },
  { value: "magazin-online", label: "Magazin online" },
  { value: "redesign", label: "Redesign site web" },
  { value: "crm", label: "CRM" },
  { value: "aplicatie-custom", label: "Aplicație web Custom" },
  { value: "mentenanta", label: "Mentenanță" },
  { value: "seo", label: "SEO on-page" },
  { value: "altul", label: "Alt serviciu" },
];

// Pachetele pentru site web de prezentare si magazin online — ultima optiune
// din fiecare ("Custom") deschide campul liber "Detaliaza proiectul".
const sitePackages = [
  { value: "Business Basic — site web one page", label: "Business Basic", desc: "Site web one page" },
  { value: "Business Standard — 1-20 pagini", label: "Business Standard", desc: "1-20 pagini" },
  { value: "Business Pro — 1-50 pagini", label: "Business Pro", desc: "1-50 pagini" },
  { value: "Custom", label: "Custom", desc: "Detaliezi tu mai jos ce ai nevoie" },
];

const shopPackages = [
  { value: "Shop Basic — 1-50 produse", label: "Shop Basic", desc: "1-50 produse" },
  { value: "Shop Standard — 1-500 produse", label: "Shop Standard", desc: "1-500 produse" },
  { value: "Shop Pro — 1-2000 produse", label: "Shop Pro", desc: "1-2000 produse" },
  { value: "Shop Custom", label: "Shop Custom", desc: "Detaliezi tu mai jos ce ai nevoie" },
];

// Servicii pentru care apare campul "Link site existent" (redesign, mentenanta, SEO —
// toate presupun un site deja existent, de refacut/intretinut/auditat).
const SERVICES_WITH_SITE_URL: ServiceValue[] = ["redesign", "mentenanta", "seo"];
// Servicii pentru care campul "Detaliaza proiectul" e mereu vizibil si obligatoriu
// (nu depind de alegerea unui pachet).
const SERVICES_WITH_ALWAYS_DETAILS: ServiceValue[] = ["redesign", "crm", "aplicatie-custom", "mentenanta", "seo", "altul"];

type AnafStatus = "idle" | "loading" | "success" | "error";
type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serviceType, setServiceType] = useState<ServiceValue | "">("");
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const [cui, setCui] = useState("");
  const [company, setCompany] = useState("");
  const [anafStatus, setAnafStatus] = useState<AnafStatus>("idle");
  const [anafMessage, setAnafMessage] = useState<string>("");

  const showPackages = serviceType === "site-web" || serviceType === "magazin-online";
  const packageList = serviceType === "site-web" ? sitePackages : serviceType === "magazin-online" ? shopPackages : [];
  const isCustomPackage = selectedPackage === "Custom" || selectedPackage === "Shop Custom";

  const showSiteUrl = serviceType ? SERVICES_WITH_SITE_URL.includes(serviceType) : false;
  const showDetails = serviceType
    ? SERVICES_WITH_ALWAYS_DETAILS.includes(serviceType) || (showPackages && isCustomPackage)
    : false;
  const detailsRequired = showDetails;

  async function lookupAnaf() {
    const digits = cui.replace(/\D/g, "");
    if (!digits) {
      setAnafStatus("error");
      setAnafMessage("Introdu mai întâi un CUI valid.");
      return;
    }
    setAnafStatus("loading");
    setAnafMessage("");
    try {
      const res = await fetch("/api/anaf-lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cui: digits }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAnafStatus("error");
        setAnafMessage(data.error || "Nu am găsit firma. Completează denumirea manual.");
        return;
      }
      setCompany(data.denumire || "");
      setAnafStatus("success");
      setAnafMessage(data.adresa ? `Preluat din ANAF: ${data.adresa}` : "Date preluate din ANAF.");
    } catch {
      setAnafStatus("error");
      setAnafMessage("Nu am putut contacta ANAF. Completează denumirea manual.");
    }
  }

  function handleServiceChange(value: ServiceValue) {
    setServiceType(value);
    setSelectedPackage("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      cui: cui.replace(/\D/g, ""),
      company,
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceType,
      selectedPackage: showPackages ? selectedPackage : "",
      siteUrl: formData.get("siteUrl") || "",
      message: formData.get("message") || "",
      gdpr: formData.get("gdpr") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setServiceType("");
      setSelectedPackage("");
      setCui("");
      setCompany("");
      setAnafStatus("idle");
      setAnafMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nume persoană de contact" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Telefon" name="phone" type="tel" required />

        <div>
          <label className="mb-2 block text-sm font-medium text-ink" htmlFor="cui">
            CUI firmă
          </label>
          <div className="flex gap-2">
            <input
              id="cui"
              name="cui"
              type="text"
              required
              value={cui}
              onChange={(e) => setCui(e.target.value)}
              placeholder="ex: RO12345678"
              className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-brand"
            />
            <button
              type="button"
              onClick={lookupAnaf}
              disabled={anafStatus === "loading"}
              className="shrink-0 whitespace-nowrap rounded-2xl border border-black/10 bg-white px-4 py-3 text-xs font-medium text-ink transition hover:border-brand hover:text-brand disabled:opacity-60"
            >
              {anafStatus === "loading" ? "Se caută..." : "Preia date ANAF"}
            </button>
          </div>
          {anafMessage && (
            <p className={`mt-1.5 text-xs ${anafStatus === "error" ? "text-red-500" : "text-brand"}`}>{anafMessage}</p>
          )}
        </div>
      </div>

      <Field
        label="Denumire firmă"
        name="company"
        required
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-ink" htmlFor="serviceType">
          Ce servicii te interesează?
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          value={serviceType}
          onChange={(e) => handleServiceChange(e.target.value as ServiceValue)}
          className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-brand"
        >
          <option value="" disabled>
            Alege un serviciu
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {showPackages && (
        <div>
          <p className="mb-3 text-sm font-medium text-ink">Alege pachetul</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {packageList.map((pkg) => {
              const checked = selectedPackage === pkg.value;
              return (
                <label
                  key={pkg.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                    checked ? "border-brand bg-brand/5" : "border-black/10 bg-white/60 hover:border-black/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    required
                    className="mt-1 accent-brand"
                    checked={checked}
                    onChange={() => setSelectedPackage(pkg.value)}
                  />
                  <span>
                    <span className="block font-medium">{pkg.label}</span>
                    <span className="block text-xs text-mist">{pkg.desc}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {showSiteUrl && (
        <Field
          label="Link site existent"
          name="siteUrl"
          type="url"
          required
          placeholder="https://..."
        />
      )}

      {showDetails && (
        <div>
          <label className="mb-2 block text-sm font-medium text-ink" htmlFor="message">
            Detaliază proiectul
          </label>
          <textarea
            id="message"
            name="message"
            required={detailsRequired}
            rows={5}
            className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-brand"
            placeholder="Spune-ne câteva cuvinte despre ce ai nevoie."
          />
        </div>
      )}

      <label className="flex items-start gap-3 text-xs text-mist">
        <input type="checkbox" name="gdpr" required className="mt-0.5 accent-brand" />
        Sunt de acord cu prelucrarea datelor conform politicii de confidențialitate.
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-cream transition hover:bg-brand disabled:opacity-60"
      >
        {status === "loading" ? "Se trimite..." : "Trimite cererea"}
      </button>

      {status === "success" && (
        <p className="text-sm text-brand">Mulțumim! Îți răspundem în cel mai scurt timp.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">A apărut o eroare. Te rugăm să ne contactezi direct.</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        {...(value !== undefined ? { value, onChange } : {})}
        className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-brand"
      />
    </div>
  );
}
