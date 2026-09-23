"use client";

import { useState, type FormEvent } from "react";
import type { PricingTier } from "@/content/pricing";

const serviceOptions = [
  "Site web de prezentare",
  "Magazin online",
  "Mentenanta",
  "SEO",
  "Domeniu / Hosting",
  "Alt serviciu",
];

type PackageOption = { serviceTitle: string; tier: PricingTier };
type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ packages = [] }: { packages?: PackageOption[] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      services: formData.getAll("services"),
      selectedPackage,
      message: formData.get("message"),
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
      setSelectedPackage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nume complet" name="name" required />
        <Field label="Companie" name="company" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Telefon" name="phone" type="tel" required />
      </div>

      <div>
        <p className="mb-3 text-sm font-medium text-ink">Ce servicii te interesează?</p>
        <div className="flex flex-wrap gap-3">
          {serviceOptions.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm has-[:checked]:border-brand has-[:checked]:text-brand"
            >
              <input type="checkbox" name="services" value={opt} className="accent-brand" />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {packages.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-medium text-ink">
            Ai deja un pachet în minte? <span className="font-normal text-mist">(opțional)</span>
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {packages.map(({ serviceTitle, tier }) => {
              const value = `${serviceTitle} — ${tier.name} (${tier.price})`;
              const checked = selectedPackage === value;
              return (
                <label
                  key={value}
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                    checked ? "border-brand bg-brand/5" : "border-black/10 bg-white/60 hover:border-black/20"
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    className="mt-1 accent-brand"
                    checked={checked}
                    onChange={() => setSelectedPackage(value)}
                  />
                  <span>
                    <span className="block font-medium">
                      {serviceTitle} — {tier.name}
                    </span>
                    <span className="block text-xs text-mist">{tier.price}</span>
                  </span>
                </label>
              );
            })}
          </div>
          {selectedPackage && (
            <button
              type="button"
              onClick={() => setSelectedPackage("")}
              className="mt-2 text-xs text-mist hover:text-brand"
            >
              Renunță la selecție
            </button>
          )}
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium text-ink" htmlFor="message">
          Detalii despre proiect
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-brand"
          placeholder="Spune-ne câteva cuvinte despre afacerea ta și ce ai nevoie."
        />
      </div>

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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-brand"
      />
    </div>
  );
}
