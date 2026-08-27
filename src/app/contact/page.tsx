import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact — Direction des Zones Franches",
  description: "Contactez la Direction des Zones Franches (DZF). Adresses, téléphones et formulaires de contact.",
};

const DETAILS = [
  { 
    label: "Adresse Temporaire", 
    value: "En face entré Djoumbala, Rue Solon Menos, 2ème Impasse après le pont (7, Impasse La Paix) Route de Frères, Pétion Ville, Port-au-Prince, Haiti (W.I.)" 
  },
  { 
    label: "Adresse Permanente", 
    value: "8, RUE LEGITIME, CHAMPS DE MARS, Port-au-Prince, Haiti (W.I.)" 
  },
  { 
    label: "Téléphone", 
    value: "(509) 3701-7713 / 4890-2685",
    href: "tel:+50937017713" 
  },
  { 
    label: "Courriel", 
    value: "info@dzf.gouv.ht / directionzonesfranches@gmail.com", 
    href: "mailto:info@dzf.gouv.ht" 
  },
  {
    label: "Réseaux sociaux",
    value: "Page Facebook officielle",
    href: "https://web.facebook.com/directionzonesfranches/timeline",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Contacter la DZF"
        description="Une question sur l'accréditation, les avantages ou le cadre légal des zones franches ? Adressez votre demande à nos services."
      />

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Formulaire" title="Adresser une demande" />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-6">
          <div className="border border-line bg-white shadow-sm">
            <h2 className="border-b border-line bg-panel px-5 py-3 text-xs font-bold tracking-[0.14em] text-ht-blue-900 uppercase">
              Coordonnées de la Direction
            </h2>
            <dl className="divide-y divide-line">
              {DETAILS.map((detail) => (
                <div key={detail.label} className="px-5 py-4">
                  <dt className="text-xs font-bold tracking-[0.12em] text-ht-red-600 uppercase">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-sm text-muted leading-relaxed">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-ht-blue-900 font-semibold hover:underline"
                        {...(detail.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-l-4 border-ht-blue-700 bg-panel p-5">
            <h2 className="font-bold text-ht-blue-900">Avant de nous écrire</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Consultez la page{" "}
              <a href="/la-dzf" className="text-ht-blue-900 font-semibold hover:underline">La DZF</a> pour connaître le cadre légal du régime des zones
              franches et les missions de la Direction.
            </p>
          </div>
        </aside>
      </Container>
    </div>
  );
}
