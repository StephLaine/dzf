"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* Official lockup — crest and institutional titling */}
      <div className="border-b-2 border-ht-red-500 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-4 no-underline" onClick={() => setOpen(false)}>
            <Image
              src="/images/coat-of-arms-haiti.svg"
              alt="Armoiries de la République d'Haïti"
              width={64}
              height={64}
              priority
              className="h-12 w-12 shrink-0 sm:h-16 sm:w-16"
            />
            <span className="border-l border-line pl-4">
              <span className="block text-[0.65rem] font-bold tracking-[0.14em] text-muted uppercase sm:text-xs">
                République d&apos;Haïti
              </span>
              <span className="block text-base leading-tight font-bold text-ht-blue-800 sm:text-xl">
                Direction des Zones Franches
              </span>
              <span className="hidden text-xs text-muted sm:block">
                Ministère du Commerce et de l&apos;Industrie
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex shrink-0 items-center gap-2 border-2 border-ht-blue-700 px-3 py-2 text-sm font-bold text-ht-blue-700 lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </div>

      {/* Primary navigation */}
      <nav className={`bg-ht-blue-700 ${open ? "block" : "hidden"} lg:block`}>
        <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:flex-row lg:px-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="border-b border-white/15 lg:border-b-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-sm font-bold tracking-wide text-white no-underline uppercase transition-colors lg:px-5 ${
                    isActive ? "bg-ht-blue-900" : "hover:bg-ht-blue-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
