import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/nav";

const SERVICES = [
  { label: "Procédure d'accréditation", href: "/contact" },
  { label: "Textes légaux et arrêtés", href: "/activites" },
  { label: "Sessions du CNZF", href: "/activites" },
  { label: "Publications", href: "/activites" },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="border-t-4 border-ht-red-500 bg-ht-blue-900 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <Image
                src="/images/coat-of-arms-haiti.svg"
                alt="Armoiries de la République d'Haïti"
                width={56}
                height={56}
                className="h-14 w-14 shrink-0"
              />
              <div className="border-l border-white/25 pl-4">
                <p className="text-[0.65rem] font-bold tracking-[0.14em] text-white/70 uppercase">
                  République d&apos;Haïti
                </p>
                <p className="text-base leading-tight font-bold">Direction des Zones Franches</p>
                <p className="text-xs text-white/70">
                  Ministère du Commerce et de l&apos;Industrie
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/80">
              Direction technique déconcentrée du Ministère du Commerce et de l&apos;Industrie,
              créée par la loi du 9 juillet 2002. La DZF assure le secrétariat technique du
              Conseil National des Zones Franches (CNZF).
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/80">
              <p>Port-au-Prince, Haïti</p>
              <p>
                <a href="mailto:info@dzf.gouv.ht" className="text-white underline">
                  info@dzf.gouv.ht
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="border-b border-white/25 pb-2 text-xs font-bold tracking-[0.14em] uppercase">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 no-underline hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="border-b border-white/25 pb-2 text-xs font-bold tracking-[0.14em] uppercase">
              Démarches
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-white/80 no-underline hover:text-white hover:underline"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://web.facebook.com/directionzonesfranches/timeline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 no-underline hover:text-white hover:underline"
                >
                  Page Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-ht-blue-950 text-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Direction des Zones Franches — République d&apos;Haïti</p>
          <p>Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
