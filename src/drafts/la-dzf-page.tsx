import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "La DZF",
  description:
    "Mission, cadre légal et rôle de la Direction des Zones Franches au sein du Ministère du Commerce et de l'Industrie.",
};

const MISSIONS = [
  {
    title: "Promotion",
    description:
      "Faire connaître le régime des zones franches haïtiennes auprès des investisseurs locaux et internationaux.",
  },
  {
    title: "Encadrement réglementaire",
    description:
      "Instruire les demandes d'accréditation et veiller au respect du cadre légal applicable aux zones franches.",
  },
  {
    title: "Suivi et accompagnement",
    description:
      "Accompagner les utilisateurs de zones franches tout au long de leur implantation et de leurs activités.",
  },
  {
    title: "Appui institutionnel",
    description:
      "Assurer le secrétariat technique du Conseil National des Zones Franches (CNZF) et coordonner ses sessions.",
  },
];

const RELATED = [
  { label: "Personnel et structure", href: "/personnel" },
  { label: "Sessions du CNZF et actualités", href: "/activites" },
  { label: "Procédure d'accréditation", href: "/contact" },
];

export default function LaDzfPage() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Accueil", href: "/" }, { label: "La DZF" }]} />
      <PageHero
        eyebrow="Qui sommes-nous"
        title="La Direction des Zones Franches"
        description="Direction technique déconcentrée du Ministère du Commerce et de l'Industrie, dédiée à la promotion et à l'encadrement des zones franches en Haïti."
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading title="Notre mandat" />
            <div className="mt-6 space-y-4 text-base leading-7">
              <p>
                La Direction des Zones Franches (DZF) est une direction technique déconcentrée du
                Ministère du Commerce et de l&apos;Industrie (MCI), créée par la loi du 9 juillet
                2002 relative aux zones franches. Elle agit comme point de contact privilégié
                entre l&apos;État haïtien et les investisseurs intéressés par ce régime.
              </p>
              <p>
                Ce régime définit les conditions d&apos;éligibilité, les avantages fiscaux et
                douaniers ainsi que les obligations des utilisateurs de zones franches. Il est
                ouvert aux activités d&apos;industrie, de commerce et de services.
              </p>
              <p>
                La DZF assure également le secrétariat technique du Conseil National des Zones
                Franches (CNZF), l&apos;organe qui délibère sur les demandes d&apos;accréditation
                et sur les grandes orientations de la politique de zones franches du pays.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="border border-line">
              <h2 className="border-b border-line bg-panel px-5 py-3 text-xs font-bold tracking-[0.14em] text-ht-blue-900 uppercase">
                Cadre légal
              </h2>
              <ul className="space-y-3 px-5 py-4 text-sm">
                <li>Loi du 9 juillet 2002 sur les zones franches</li>
                <li>Textes d&apos;application et arrêtés ministériels</li>
                <li>Décisions du Conseil National des Zones Franches</li>
              </ul>
            </div>

            <div className="mt-6 border border-line">
              <h2 className="border-b border-line bg-panel px-5 py-3 text-xs font-bold tracking-[0.14em] text-ht-blue-900 uppercase">
                Contenu associé
              </h2>
              <ul className="divide-y divide-line text-sm">
                {RELATED.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block px-5 py-3 no-underline hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-line pt-12">
          <SectionHeading eyebrow="Ce que nous faisons" title="Nos missions" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MISSIONS.map((item) => (
              <div key={item.title} className="border-t-4 border-ht-blue-700 bg-panel p-5">
                <h3 className="font-bold text-ht-blue-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
