import Icon from "./Icon";
import Link from "next/link";
import type { PricingTier } from "@/content/pricing";
import { StaggerItem } from "./RevealOnScroll";

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <StaggerItem>
      <div
        className={`flex h-full flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-1.5 ${
          tier.highlighted
            ? "border-brand bg-ink text-cream shadow-soft"
            : "border-black/5 bg-white/70 shadow-card"
        }`}
      >
        {tier.highlighted && (
          <span className="mb-4 inline-block w-fit rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
            Cel mai popular
          </span>
        )}
        <h3 className="font-display text-xl font-semibold">{tier.name}</h3>
        <p className={`mt-2 text-sm ${tier.highlighted ? "text-cream/70" : "text-mist"}`}>{tier.note}</p>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-display text-4xl font-semibold">{tier.price}</span>
          {tier.oldPrice && (
            <span className={`text-sm line-through ${tier.highlighted ? "text-cream/50" : "text-mist"}`}>
              {tier.oldPrice}
            </span>
          )}
        </div>

        <ul className="mt-6 flex-1 space-y-3 text-sm">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Icon
                name="check"
                className={`mt-0.5 h-4 w-4 shrink-0 ${tier.highlighted ? "text-lime" : "text-brand"}`}
              />
              <span className={tier.highlighted ? "text-cream/85" : "text-ink/75"}>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium transition ${
            tier.highlighted
              ? "bg-cream text-ink hover:bg-lime"
              : "bg-ink text-cream hover:bg-brand"
          }`}
        >
          Cere oferta
        </Link>
      </div>
    </StaggerItem>
  );
}
