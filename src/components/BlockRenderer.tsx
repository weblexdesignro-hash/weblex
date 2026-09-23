import Image from "next/image";
import Link from "next/link";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

type MediaLike = { url?: string; alt?: string } | string | null | undefined;

function mediaUrl(m: MediaLike): string | null {
  if (m && typeof m === "object" && m.url) return m.url;
  return null;
}

export default function BlockRenderer({ blocks }: { blocks: any[] }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.blockType) {
          case "hero":
            return (
              <section key={i} className="container-px mx-auto max-w-5xl pb-16 pt-32 text-center sm:pt-40">
                <h1 className="font-display text-4xl font-semibold sm:text-5xl">{block.heading}</h1>
                {block.subheading && <p className="mx-auto mt-4 max-w-2xl text-lg text-ink/70">{block.subheading}</p>}
                {mediaUrl(block.image) && (
                  <div className="relative mx-auto mt-10 aspect-[16/9] max-w-3xl overflow-hidden rounded-2xl">
                    <Image src={mediaUrl(block.image)!} alt={block.heading || ""} fill className="object-cover" />
                  </div>
                )}
                {block.ctaLabel && block.ctaHref && (
                  <Link
                    href={block.ctaHref}
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    {block.ctaLabel}
                  </Link>
                )}
              </section>
            );

          case "text":
            return (
              <section key={i} className="container-px mx-auto max-w-3xl py-12">
                {block.heading && <h2 className="font-display text-2xl font-semibold sm:text-3xl">{block.heading}</h2>}
                {block.richText && (
                  <div
                    className="prose prose-neutral mt-4 max-w-none text-ink/80"
                    dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: block.richText }) }}
                  />
                )}
              </section>
            );

          case "imageText": {
            const imgLeft = block.imagePosition === "left";
            return (
              <section key={i} className="container-px mx-auto max-w-5xl py-12">
                <div className={`grid items-center gap-10 sm:grid-cols-2 ${imgLeft ? "" : "sm:[&>*:first-child]:order-2"}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist/10">
                    {mediaUrl(block.image) && (
                      <Image src={mediaUrl(block.image)!} alt={block.heading || ""} fill className="object-cover" />
                    )}
                  </div>
                  <div>
                    {block.heading && <h2 className="font-display text-2xl font-semibold sm:text-3xl">{block.heading}</h2>}
                    {block.text && <p className="mt-4 text-ink/80">{block.text}</p>}
                  </div>
                </div>
              </section>
            );
          }

          case "featureGrid":
            return (
              <section key={i} className="container-px mx-auto max-w-5xl py-12">
                {block.heading && (
                  <h2 className="mb-10 text-center font-display text-2xl font-semibold sm:text-3xl">{block.heading}</h2>
                )}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {(block.items || []).map((item: any, j: number) => (
                    <div key={j} className="rounded-2xl border border-black/5 p-6">
                      <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                      {item.text && <p className="mt-2 text-sm text-ink/70">{item.text}</p>}
                    </div>
                  ))}
                </div>
              </section>
            );

          case "cta":
            return (
              <section key={i} className="container-px mx-auto max-w-3xl py-16 text-center">
                <div className="rounded-3xl bg-ink px-8 py-14 text-white">
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">{block.heading}</h2>
                  {block.text && <p className="mx-auto mt-3 max-w-xl text-white/70">{block.text}</p>}
                  <Link
                    href={block.buttonHref}
                    className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-ink transition hover:opacity-90"
                  >
                    {block.buttonLabel}
                  </Link>
                </div>
              </section>
            );

          case "gallery":
            return (
              <section key={i} className="container-px mx-auto max-w-5xl py-12">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {(block.images || []).map((img: any, j: number) => {
                    const url = mediaUrl(img);
                    if (!url) return null;
                    return (
                      <div key={j} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <Image src={url} alt="" fill className="object-cover" />
                      </div>
                    );
                  })}
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
