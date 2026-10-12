"use client";

import { useState, type FormEvent } from "react";
import type { PricingTier } from "@/content/pricing";
import { ui, type Locale } from "@/content/i18n";

type ServiceValue =
  | "site-web"
  | "magazin-online"
  | "redesign"
  | "crm"
  | "aplicatie-custom"
  | "mentenanta"
  | "seo"
  | "altul";

// Pachetele afisate aici (nume, pret, descriere) vin acum din Payload CMS —
// aceleasi "pachete" (pricingTiers) editate din admin -> Continut -> Services
// -> Site web de prezentare / Magazin online, exact cele afisate pe pagina
// /servicii si pe homepage. Modifici pretul sau descrierea o singura data in
// admin si se actualizeaza automat si aici, in formular. Ultima optiune din
// fiecare lista ("Custom") e adaugata manual mai jos si deschide campul liber
// "Detaliaza proiectul" — nu face parte din pachetele din CMS.
type PackageOption = { value: string; label: string; desc: string };

function tiersToOptions(tiers: PricingTier[], customValue: string, customLabel: string, customDesc: string): PackageOption[] {
  const fromCms: PackageOption[] = tiers.map((t) => ({
    value: `${t.name} — ${t.price}`,
    label: t.name,
    desc: t.note,
  }));
  return [...fromCms, { value: customValue, label: customLabel, desc: customDesc }];
}

// Servicii pentru care apare campul "Link site existent" (redesign, mentenanta, SEO —
// toate presupun un site deja existent, de refacut/intretinut/auditat).
const SERVICES_WITH_SITE_URL: ServiceValue[] = ["redesign", "mentenanta", "seo"];
// Servicii pentru care campul "Detaliaza proiectul" e mereu vizibil si obligatoriu
// (nu depind de alegerea unui pachet).
const SERVICES_WITH_ALWAYS_DETAILS: ServiceValue[] = ["redesign", "crm", "aplicatie-custom", "mentenanta", "seo", "altul"];

type AnafStatus = "idle" | "loading" | "success" | "error";
type Status = "idle" | "loading" | "success" | "error";

// Formularul e integral bilingv prin dictionarul `ui[locale].contactForm`
// (vezi @/content/i18n) — campurile trimise la /api/contact raman aceleasi
// (valori tehnice in engleza, ex. "site-web"), doar etichetele vizibile se schimba.
export default function ContactForm({
  websiteTiers,
  shopTiers,
  locale = "ro",
}: {
  websiteTiers: PricingTier[];
  shopTiers: PricingTier[];
  locale?: Locale;
}) {
  const t = ui[locale].contactForm;
  const [status, setStatus] = useState<Status>("idle");
  const [serviceType, setServiceType] = useState<ServiceValue | "">("");
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const [cui, setCui] = useState("");
  const [company, setCompany] = useState("");
  const [anafStatus, setAnafStatus] = useState<AnafStatus>("idle");
  const [anafMessage, setAnafMessage] = useState<string>("");

  const sitePackages = tiersToOptions(websiteTiers, t.customLabel, t.customLabel, t.customDesc);
  const shopPackages = tiersToOptions(shopTiers, t.shopCustomLabel, t.shopCustomLabel, t.customDesc);

  const showPackages = serviceType === "site-web" || serviceType === "magazin-online";
  const packageList = serviceType === "site-web" ? sitePackages : serviceType === "magazin-online" ? shopPackages : [];
  const isCustomPackage = selectedPackage === t.customLabel || selectedPackage === t.shopCustomLabel;

  const showSiteUrl = serviceType ? SERVICES_WITH_SITE_URL.includes(serviceType) : false;
  const showDetails = serviceType
    ? SERVICES_WITH_ALWAYS_DETAILS.includes(serviceType) || (showPackages && isCustomPackage)
    : false;
  const detailsRequired = showDetails;

  async function lookupAnaf() {
    const digits = cui.replace(/\D/g, "");
    if (!digits) {
      setAnafStatus("error");
      setAnafMessage(t.anafErrorNoCui);
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
        setAnafMessage(data.error || t.anafErrorNotFound);
        return;
      }
      setCompany(data.denumire || "");
      setAnafStatus("success");
      setAnafMessage(data.adresa ? `${t.anafSuccessPrefix}${data.adresa}` : t.anafSuccessGeneric);
    } catch {
      setAnafStatus("error");
      setAnafMessage(t.anafErrorContact);
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
        <Field label={t.nameLabel} name="name" required />
        <Field label={t.emailLabel} name="email" type="email" required />
        <Field label={t.phoneLabel} name="phone" type="tel" required />

        <div>
          <label className="mb-2 block text-sm font-medium text-ink" htmlFor="cui">
            {t.cuiLabel}
          </label>
          <div className="flex gap-2">
            <input
              id="cui"
              name="cui"
              type="text"
              required
              value={cui}
              onChange={(e) => setCui(e.target.value)}
              placeholder={t.cuiPlaceholder}
              className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-brand"
            />
            <button
              type="button"
              onClick={lookupAnaf}
              disabled={anafStatus === "loading"}
              className="shrink-0 whitespace-nowrap rounded-2xl border border-black/10 bg-white px-4 py-3 text-xs font-medium text-ink transition hover:border-brand hover:text-brand disabled:opacity-60"
            >
              {anafStatus === "loading" ? t.anafLoading : t.anafButton}
            </button>
          </div>
          {anafMessage && (
            <p className={`mt-1.5 text-xs ${anafStatus === "error" ? "text-red-500" : "text-brand"}`}>{anafMessage}</p>
          )}
        </div>
      </div>

      <Field
        label={t.companyLabel}
        name="company"
        required
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <div>
        <label className="mb-2 block text-sm font-medium text-ink" htmlFor="serviceType">
          {t.serviceLabel}
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
            {t.serviceChoose}
          </option>
          {t.serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {showPackages && (
        <div>
          <p className="mb-3 text-sm font-medium text-ink">{t.packagesLabel}</p>
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
          label={t.siteUrlLabel}
          name="siteUrl"
          type="url"
          required
          placeholder="https://..."
        />
      )}

      {showDetails && (
        <div>
          <label className="mb-2 block text-sm font-medium text-ink" htmlFor="message">
            {t.detailsLabel}
          </label>
          <textarea
            id="message"
            name="message"
            required={detailsRequired}
            rows={5}
            className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-brand"
            placeholder={t.detailsPlaceholder}
          />
        </div>
      )}

      <label className="flex items-start gap-3 text-xs text-mist">
        <input type="checkbox" name="gdpr" required className="mt-0.5 accent-brand" />
        {t.gdprText}
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-cream transition hover:bg-brand disabled:opacity-60"
      >
        {status === "loading" ? t.submitLoading : t.submitButton}
      </button>

      {status === "success" && <p className="text-sm text-brand">{t.successMessage}</p>}
      {status === "error" && <p className="text-sm text-red-500">{t.errorMessage}</p>}
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
