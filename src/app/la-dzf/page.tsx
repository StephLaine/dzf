import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import DocumentCard from "@/components/DocumentCard";
import { ACCREDITATION_DOCUMENTS, INVESTMENT_DOCUMENTS, LEGAL_FRAMEWORK_DOCUMENTS } from "@/lib/documents";

export const metadata: Metadata = {
  title: "La DZF — Direction des Zones Franches",
  description:
    "Brève présentation, cadre légal, importance et objectifs de la Direction des Zones Franches en Haïti.",
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

const ADVANTAGES = [
  "Un régime douanier spécial",
  "Un régime fiscal attrayant",
  "Assouplissement de la législation du travail",
  "Subvention d’incitation à la création d’emplois",
  "Exonération totale d’impôt sur les revenus générés par les investissements dans les Zones Franches industrielles pendant dix (10) ans",
  "Déduction des valeurs investies dans une Zone Franche, mais interdiction de vendre le titre pendant cinq (5) ans à compter de la date de l’investissement."
];

const RELATED = [
  { label: "Personnel et structure", href: "/personnel" },
  { label: "Sessions du CNZF et actualités", href: "/activites" },
  { label: "Procédure d'accréditation", href: "#documents-accreditation" },
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
          <div className="lg:col-span-8 space-y-12">
            
            {/* Presentation Section */}
            <section>
              <SectionHeading title="Présentation de la Direction des Zones Franches" />
              <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
                <div className="relative w-full md:w-48 h-56 shrink-0 border border-line bg-white shadow-sm">
                  <Image
                    src="/images/s-ordinaire.JPG"
                    alt="Session ordinaire du CNZF"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 text-base leading-7 text-justify text-muted">
                  <p>
                    La gestion de l’établissement et du fonctionnement des Zones Franches en Haïti est confiée à
                    une direction techniquement déconcentrée, créée à cet effet au sein du Ministère du Commerce
                    et de l’Industrie (MCI) par la loi du 09 juillet 2002 portant sur les zones franches,
                    laquelle est dénommée <strong>Direction des Zones Franches (DZF)</strong>.
                  </p>
                  <p>
                    Cette direction assure le secrétariat technique du Conseil National des Zones Franches (CNZF).
                    Elle assure également l’exécution des décisions prises par le CNZF. Actuellement, la DZF,
                    avec le support inconditionnel du MCI, a mis en place un dispositif fortement incitatif pour
                    attirer les investisseurs étrangers. Uniquement destiné aux entreprises entièrement tournées
                    vers des activités exportatrices, le régime haïtien de zone franche offre des avantages importants aux entreprises agréées.
                  </p>
                  <p>
                    Il est ouvert à trois (3) catégories d’activités : l’industrie, le commerce et les services
                    (généraux et spécifiques). Le régime de zone franche privilégie la zone franche industrielle
                    et agricole afin de stopper le déclin de l&apos;activité agricole et dynamiser l’économie. Pour y
                    parvenir, la DZF allie une grande souplesse afin de créer un environnement propice à l’investissement.
                  </p>
                  <p>
                    Il ne fait aucun doute que les zones franches ont été créées en tant qu&apos;outils de planification pour aider
                    au développement économique. En Haïti, elles présentent de nombreux avantages et stimulent
                    l&apos;investissement dans certaines régions du pays. Actuellement, de nouvelles zones franches sont sur
                    le point de voir le jour et beaucoup d&apos;autres encore émergeront dans les années à venir. L’objectif
                    ultime de cette démarche est de rendre ces investissements profitables pour stimuler davantage l&apos;économie haïtienne.
                  </p>
                </div>
              </div>
            </section>

            {/* Importance Section */}
            <section className="border-t border-line pt-10">
              <SectionHeading title="Importance du développement des Zones Franches" />
              <div className="mt-6 space-y-4 text-base leading-7 text-justify text-muted">
                <p>
                  Les zones franches (ZF) se sont multipliées ces quarante dernières (40) années dans le monde comme un instrument de développement et de croissance. Déjà largement utilisées en Asie et en Amérique latine dans les années 70, elles se sont répandues en une vingtaine d’années en Afrique et dans les économies en transition. Plus récemment, plusieurs grands marchés émergents comme la Chine, l’Inde et la Russie ont adopté de nouvelles législations sur les ZF pour répondre à l’évolution des politiques industrielles et commerciales. La création de telles zones concerne non seulement l’industrie manufacturière traditionnelle, mais aussi, de plus en plus, le secteur des services. Plus de 100 pays appliquent actuellement, sous une forme ou sous une autre, des mesures en faveur de zones spéciales pour la fourniture de biens et de services aux marchés étrangers.
                </p>
                <p>
                  Il ne fait aucun doute que les ZF peuvent contribuer utilement au développement d’un pays et ouvrir la voie des réformes si elles sont intégrées dans une stratégie nationale globale et complétées par d’autres politiques. Elles peuvent être particulièrement utiles dans les pays qui mettent en œuvre une libéralisation progressive des échanges, en atténuant les effets défavorables de droits de douane élevés sur les exportations, en facilitant la création d’un secteur d’exportation et en améliorant la balance commerciale du pays.
                </p>
                <p>
                  Imbue du rôle clé que les zones franches peuvent jouer en termes de débouchés, Haïti a merveilleusement bien répondu à la demande du capitalisme mondial en mettant en œuvre les dispositions nécessaires pour devenir une destination importante pour les investissements dans la région. Aujourd’hui, la stratégie de développement des Zones franches, en tant qu’outil de planification de développement économique, est devenue pour Haïti le meilleur moyen de parvenir à une création massive d’emplois. D’où l’importance du développement des Zones Franches commerciales dans le pays.
                </p>
              </div>
            </section>

            {/* Objectives Section */}
            <section className="border-t border-line pt-10">
              <SectionHeading title="Objectif de La Zone Franche Commerciale en Haïti" />
              <div className="mt-6 space-y-4 text-base leading-7 text-justify text-muted">
                <p>
                  Créer une zone franche commerciale en Haïti est un moyen d’offrir, d’une part, une opportunité aux commerçants haïtiens de se ravitailler chez eux avec la monnaie locale et en toute sécurité, d’autre part, offrir aux investisseurs venus d’horizons divers une opportunité unique d´investissement dans un environnement protégé et de libre échange avec les avantages suivants :
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-muted font-normal">
                  {ADVANTAGES.map((advantage, index) => (
                    <li key={index} className="leading-relaxed">
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="border border-line">
              <h2 className="border-b border-line bg-panel px-5 py-3 text-xs font-bold tracking-[0.14em] text-ht-blue-900 uppercase">
                Cadre légal
              </h2>
              <ul className="divide-y divide-line text-sm">
                {LEGAL_FRAMEWORK_DOCUMENTS.map((doc) => (
                  <li key={doc.href}>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-5 py-3 font-medium text-ht-blue-900 no-underline hover:underline"
                    >
                      {doc.title}
                      <span className="mt-0.5 block text-xs font-normal text-muted">
                        PDF · {doc.sizeLabel}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-line">
              <h2 className="border-b border-line bg-panel px-5 py-3 text-xs font-bold tracking-[0.14em] text-ht-blue-900 uppercase">
                Contenu associé
              </h2>
              <ul className="divide-y divide-line text-sm">
                {RELATED.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block px-5 py-3 no-underline hover:underline text-ht-blue-900 font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Missions Cards */}
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

        {/* Accreditation documents and forms */}
        <div id="documents-accreditation" className="mt-16 scroll-mt-24 border-t border-line pt-12">
          <SectionHeading
            eyebrow="Procédure d'accréditation"
            title="Documents et formulaires"
            description="Formulaires, guides et pièces requises pour toute demande d'obtention du statut de zone franche."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {ACCREDITATION_DOCUMENTS.map((doc) => (
              <DocumentCard key={doc.href} document={doc} />
            ))}
          </div>
        </div>

        {/* Investment Resources — CFI-Invest Haïti partnership */}
        <div className="mt-16 border-t border-line pt-12">
          <SectionHeading
            eyebrow="Partenariat CFI-Invest Haïti"
            title="Ressources pour investisseurs"
            description="En partenariat avec le Centre de Facilitation des Investissements (CFI-Invest Haïti), organisme autonome de l'État haïtien, la DZF met à la disposition de ses usagers des documents stratégiques sur l'investissement en Haïti."
          />

          {INVESTMENT_DOCUMENTS.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {INVESTMENT_DOCUMENTS.map((doc) => (
                <DocumentCard key={doc.href} document={doc} />
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-line border-t-4 border-t-ht-red-500 bg-panel p-6 text-sm text-muted">
              Les premiers documents seront publiés prochainement dans le cadre de la campagne
              numérique du CFI-Invest Haïti.
            </div>
          )}

          <p className="mt-6 text-sm text-muted">
            Pour en savoir plus sur les opportunités d&apos;investissement en Haïti, consultez{" "}
            <a href="https://www.investhaiti.ht" target="_blank" rel="noopener noreferrer">
              le site du CFI-Invest Haïti
            </a>
            .
          </p>
        </div>

      </Container>
    </div>
  );
}
