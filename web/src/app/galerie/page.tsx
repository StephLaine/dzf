import type { Metadata } from "next";
import UnderDevelopment from "@/components/UnderDevelopment";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Section en cours de développement.",
};

export default function GaleriePage() {
  return <UnderDevelopment title="Galerie" />;
}
