import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Galerie photo des activités et sessions de la Direction des Zones Franches.",
};

const PHOTOS = [
  { src: "/images/codevi.jpg", caption: "Zone franche de CODEVI, Ouanaminthe" },
  { src: "/images/s-ordinaire.JPG", caption: "Session ordinaire du CNZF" },
  { src: "/images/DZF-APN.jpg", caption: "Session extraordinaire du CNZF" },
  { src: "/images/photo-ministre.jpg", caption: "Le Ministre du MCI" },
  { src: "/images/DG_DZF-3.jpg", caption: "Le Directeur Général de la DZF" },
];

export default function GaleriePage() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Accueil", href: "/" }, { label: "Galerie" }]} />
      <PageHero
        eyebrow="Médias"
        title="Galerie"
        description="Images des activités et sessions institutionnelles de la DZF."
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((photo) => (
            <figure key={photo.src} className="border border-line bg-white">
              <div className="relative h-52 w-full">
                <Image src={photo.src} alt={photo.caption} fill className="object-cover" />
              </div>
              <figcaption className="border-t-4 border-ht-blue-700 p-4 text-sm font-bold text-ht-blue-800">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </div>
  );
}
