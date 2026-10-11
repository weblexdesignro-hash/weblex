"use client";

import { useState } from "react";

// Butoane de distribuire pentru articolele de blog (Facebook, LinkedIn, X/Twitter,
// WhatsApp, email) + copiere link. `url` trebuie sa fie absolut (vezi blog/[slug]/page.tsx).
export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.95 2 14.67 2 11.98 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M6.94 5a2 2 0 11-4-.01 2 2 0 014 .01zM7 8.48H3V21h4V8.48zm6.32 0H9.35V21h3.97v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2zm-1.2 18h1.9L7.4 4H5.3l12.4 16z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.27-1.38a9.9 9.9 0 004.77 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm4.52 13.91c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
          <path d="M4 6h16v12H4z" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      ),
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponibil — nu facem nimic, butonul ramane neschimbat
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-mist">Distribuie:</span>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Distribuie pe ${link.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink/70 transition hover:border-brand hover:text-brand"
        >
          {link.icon}
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        className="flex h-9 items-center gap-1.5 rounded-full border border-black/10 px-3 text-xs font-medium text-ink/70 transition hover:border-brand hover:text-brand"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
        {copied ? "Copiat!" : "Copiaza link"}
      </button>
    </div>
  );
}
