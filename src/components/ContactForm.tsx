"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Site web de prezentare",
  "Magazin online",
  "Mentenanta",
  "SEO",
  "Domeniu / Hosting",
  "Alt serviciu",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

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
        <p className="mb-3 text-sm font-medium text-ink">Ce servicii te intereseaza?</p>
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
          placeholder="Spune-ne cateva cuvinte despre afacerea ta si ce ai nevoie."
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-mist">
        <input type="checkbox" name="gdpr" required className="mt-0.5 accent-brand" />
        Sunt de acord cu prelucrarea datelor conform politicii de confidentialitate.
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-cream transition hover:bg-brand disabled:opacity-60"
      >
        {status === "loading" ? "Se trimite..." : "Trimite cererea"}
      </button>

      {status === "success" && (
        <p className="text-sm text-brand">Multumim! Iti raspundem in cel mai scurt timp.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">A aparut o eroare. Te rugam sa ne contactezi direct.</p>
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
