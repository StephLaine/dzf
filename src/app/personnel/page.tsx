import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Personnel — Direction des Zones Franches",
  description: "La direction et les services de la Direction des Zones Franches (DZF).",
};

const LEADERSHIP = [
  {
    name: "Le Ministre du MCI",
    role: "Ministère du Commerce et de l'Industrie",
    note: "Autorité de tutelle de la Direction des Zones Franches.",
    image: "/images/photo-ministre.jpg",
  },
  {
    name: "Le Directeur Général",
    role: "Direction des Zones Franches",
    note: "Pilotage stratégique et représentation institutionnelle de la DZF.",
    image: "/images/DG_DZF-3.jpg",
  },
];

const DEPARTMENTS = [
  {
    title: "Direction Générale",
    description: "Pilotage stratégique et représentation institutionnelle de la DZF.",
  },
  {
    title: "Affaires juridiques et réglementaires",
    description: "Instruction des dossiers d'accréditation et suivi du cadre légal.",
  },
  {
    title: "Promotion des investissements",
    description: "Relations avec les investisseurs et promotion des zones franches.",
  },
  {
    title: "Administration et finances",
    description: "Gestion administrative, financière et des ressources humaines.",
  },
];

export default function PersonnelPage() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Accueil", href: "/" }, { label: "Personnel" }]} />
      <PageHero
        eyebrow="Organisation"
        title="Personnel"
        description="La direction politique et technique de la Direction des Zones Franches."
      />

      <Container className="py-12 sm:py-16">
        <SectionHeading eyebrow="Direction" title="Instances dirigeantes" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {LEADERSHIP.map((person) => (
            <div
              key={person.name}
              className="flex gap-5 border-l-4 border-ht-blue-700 bg-panel p-6"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={120}
                height={150}
                className="h-40 w-32 shrink-0 object-cover object-top shadow-sm"
              />
              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-ht-red-600 uppercase">
                  {person.role}
                </p>
                <p className="mt-2 text-lg font-bold text-ht-blue-900">{person.name}</p>
                <p className="mt-2 text-sm text-muted">{person.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Structure" title="Services et départements" />
          <div className="mt-8 border border-line">
            <ul className="divide-y divide-line">
              {DEPARTMENTS.map((dept) => (
                <li key={dept.title} className="px-6 py-5 bg-white">
                  <h3 className="font-bold text-ht-blue-900">{dept.title}</h3>
                  <p className="mt-1 text-sm text-muted">{dept.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
