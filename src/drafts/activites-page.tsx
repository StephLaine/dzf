import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = {
  title: "Activités",
  description: "Actualités, communiqués et publications de la Direction des Zones Franches.",
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((item) => (
            <NewsCard key={item.title} title={item.title} tag={item.tag} href="/contact" />
          ))}
        </div>
      </Container>
    </div>
  );
}
