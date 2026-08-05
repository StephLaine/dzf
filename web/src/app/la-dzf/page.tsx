import type { Metadata } from "next";
import UnderDevelopment from "@/components/UnderDevelopment";

export const metadata: Metadata = {
  title: "La DZF",
  description: "Section en cours de développement.",
};

export default function LaDzfPage() {
  return <UnderDevelopment title="La DZF" />;
}
