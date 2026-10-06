export type DocumentEntry = {
  title: string;
  description: string;
  href: string;
  sizeLabel: string;
};

// Cadre légal et réglementaire des zones franches en Haïti.
export const LEGAL_FRAMEWORK_DOCUMENTS: DocumentEntry[] = [
  {
    title: "Loi du 9 juillet 2002 sur les zones franches",
    description: "Texte intégral de la loi, en français.",
    href: "/documents/loi-zone-franche-2002.pdf",
    sizeLabel: "0.4 Mo",
  },
  {
    title: "Law on Free Zones",
    description: "Full text of the law, English version.",
    href: "/documents/law-on-free-zones-en.pdf",
    sizeLabel: "5.4 Mo",
  },
  {
    title: "Arrêté DZF n° 136",
    description: "Arrêté ministériel relatif aux zones franches.",
    href: "/documents/arrete-dzf-no-136.pdf",
    sizeLabel: "6.5 Mo",
  },
  {
    title: "Le Moniteur n° 121",
    description: "Publication officielle du journal officiel de la République d'Haïti.",
    href: "/documents/moniteur-121.pdf",
    sizeLabel: "0.9 Mo",
  },
];

// Documents stratégiques sur l'investissement en Haïti, publiés dans le cadre
// du partenariat avec le Centre de Facilitation des Investissements (CFI-Invest
// Haïti — lettre CFI-DG/07.284.26 du 7 juillet 2026).
//
// Pour publier un document :
// 1. Déposer le fichier PDF dans /public/documents/
// 2. Ajouter une entrée ci-dessous avec son titre, une courte description,
//    son chemin (ex: "/documents/guide-investisseur.pdf") et sa taille
//    approximative (ex: "2.4 Mo").
export const INVESTMENT_DOCUMENTS: DocumentEntry[] = [];

// Formulaires et guides pour la procédure d'accréditation d'une zone franche.
export const ACCREDITATION_DOCUMENTS: DocumentEntry[] = [
  {
    title: "Formulaire de demande d'obtention de statut de zone franche",
    description: "Formulaire officiel à compléter pour toute demande d'accréditation.",
    href: "/documents/formulaire-demande-statut-zone-franche.pdf",
    sizeLabel: "1.4 Mo",
  },
  {
    title: "Guide de constitution de dossier",
    description: "Étapes et documents requis pour constituer un dossier de demande.",
    href: "/documents/guide-constitution-dossier.pdf",
    sizeLabel: "2.0 Mo",
  },
  {
    title: "Liste des pièces à joindre",
    description: "Récapitulatif des pièces justificatives à fournir avec le dossier.",
    href: "/documents/liste-pieces-a-joindre.pdf",
    sizeLabel: "0.6 Mo",
  },
  {
    title: "Instructions pour la conception de projet",
    description: "Lignes directrices pour la préparation du projet d'implantation.",
    href: "/documents/instructions-conception-projet.pdf",
    sizeLabel: "1.3 Mo",
  },
  {
    title: "Dépliant DZF pour les clients",
    description: "Informations générales à l'attention des utilisateurs de zones franches.",
    href: "/documents/flyer-dzf-clients-francais.pdf",
    sizeLabel: "3.4 Mo",
  },
];
