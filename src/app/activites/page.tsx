import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import NewsCard from "@/components/NewsCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Activités & Actualités — Direction des Zones Franches",
  description: "Actualités, communiqués, publications et sessions de la Direction des Zones Franches en Haïti.",
};

const ACTIVITIES = [
  { title: "Installation du Ministre du Commerce et de l'Industrie", tag: "Institutionnel" },
  {
    title: "Pourquoi Haïti est une terre d'opportunités pour les investisseurs ?",
    tag: "Investissement",
  },
  { title: "Nouveaux emplois créés dans les zones franches", tag: "Emploi" },
  {
    title: "Bon à savoir : autorisation d'utilisateur de zones franches",
    tag: "Réglementation",
  },
  { title: "Lois et arrêtés sur les zones franches", tag: "Cadre légal" },
  { title: "Bulletin d'information (brochure)", tag: "Publication" },
  { title: "Session ordinaire du CNZF", tag: "CNZF" },
  { title: "Session extraordinaire du CNZF", tag: "CNZF" },
  { title: "Point de presse de la Direction", tag: "Communiqué" },
  { title: "Procédure d'accréditation des utilisateurs", tag: "Réglementation" },
  { title: "Cocktail de presse du Premier Sommet", tag: "Événement" },
];

export default function ActivitesPage() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Accueil", href: "/" }, { label: "Activités" }]} />
      <PageHero
        eyebrow="Actualités"
        title="Activités et publications"
        description="Communiqués, sessions du Conseil National des Zones Franches et documents de référence."
      />

      <Container className="py-12 sm:py-16">
        
        {/* Editorial introduction card from the official site */}
        <section className="mb-12 border border-line border-l-4 border-l-ht-blue-700 bg-panel p-6 sm:p-8">
          <SectionHeading title="Une direction très active pour le développement d'Haïti" />
          <div className="mt-6 space-y-4 text-base leading-7 text-justify text-muted">
            <p>
              Principal moteur de la création d’emplois durables en Haïti, la Direction des Zones Franches <strong>(DZF)</strong> fait un effort majeur pour attirer des investissements dans son secteur et pourvoir des emplois à la main-d&apos;œuvre du pays. Avec un environnement d’affaires de plus en plus favorable, on est en droit d’affirmer qu’Haïti devient de plus en plus attractive pour les investisseurs qui y constatent l&apos;évolution positive et indéniable du pays.
            </p>
            <p>
              La nouvelle classe moyenne qui émerge du fait du développement du pays constitue dorénavant des relais de croissance pour les groupes internationaux. De plus, les jeunes haïtiens formés à l’étranger prennent aujourd’hui le pari du retour, tandis que l’intérêt du pays pour les nouvelles technologies donne une réelle opportunité à nos entreprises multimédia.
            </p>
            <p>
              Contrairement à une idée largement répandue, Haïti n’est pas un terrain économique plus risqué qu’un autre pour le développement de projets dûment structurés et accompagnés. Les études récentes démontrent au contraire que les risques et retours sur investissements y sont largement comparables à ceux rencontrés dans le cadre d’investissements réalisés dans d’autres zones économiques émergentes.
            </p>
          </div>
        </section>

        {/* Activities and news cards */}
        <section>
          <SectionHeading eyebrow="Publications & Médias" title="Dernières publications et communiqués" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((item) => (
              <NewsCard key={item.title} title={item.title} tag={item.tag} href="/contact" />
            ))}
          </div>
        </section>

      </Container>
    </div>
  );
}
