import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import NewsItem from "@/components/NewsItem";
import ServiceTile, { type ServiceIcon } from "@/components/ServiceTile";
import Button from "@/components/Button";

const KEY_FACTS = [
  { label: "Cadre légal", value: "Loi du 9 juillet 2002" },
  { label: "Secteurs éligibles", value: "Industrie · Commerce · Services" },
  { label: "Organe délibérant", value: "Conseil National des Zones Franches" },
];

const SERVICES: {
  icon: ServiceIcon;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: "factory",
    title: "Devenir utilisateur de zone franche",
    description: "Conditions d'éligibilité et démarches d'implantation.",
    href: "/contact",
  },
  {
    icon: "document",
    title: "Procédure d'accréditation",
    description: "Constitution et dépôt du dossier auprès de la DZF.",
    href: "/contact",
  },
  {
    icon: "legal",
    title: "Textes légaux et arrêtés",
    description: "Loi de 2002, textes d'application et décisions.",
    href: "/activites",
  },
  {
    icon: "council",
    title: "Sessions du CNZF",
    description: "Sessions ordinaires et extraordinaires du Conseil.",
    href: "/activites",
  },
  {
    icon: "publication",
    title: "Publications et brochures",
    description: "Bulletins d'information et documents de référence.",
    href: "/activites",
  },
  {
    icon: "contact",
    title: "Contacter la DZF",
    description: "Adressez vos demandes à nos services.",
    href: "/contact",
  },
];

const NEWS = [
  { title: "Installation du Ministre du Commerce et de l'Industrie", tag: "Institutionnel" },
  {
    title: "Pourquoi Haïti est une terre d'opportunités pour les investisseurs ?",
    tag: "Investissement",
  },
  { title: "Bon à savoir : autorisation d'utilisateur de zones franches", tag: "Réglementation" },
  { title: "Nouveaux emplois créés dans les zones franches", tag: "Emploi" },
];

export default function Home() {
  return (
    <div>
      {/* Official hero */}
      <section className="relative isolate border-b-4 border-ht-red-500">
        <Image
          src="/images/codevi.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="-z-10 object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ht-blue-950/97 via-ht-blue-900/93 to-ht-blue-800/80"
          aria-hidden="true"
        />
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-bold tracking-[0.16em] text-ht-blue-200 uppercase">
            République d&apos;Haïti — Ministère du Commerce et de l&apos;Industrie
          </p>
          <span className="mt-4 block h-1 w-16 bg-ht-red-500" aria-hidden="true" />
          <h1 className="mt-5 max-w-3xl text-3xl leading-tight font-bold text-white sm:text-5xl">
            Direction des Zones Franches
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ht-blue-100 sm:text-lg">
            La DZF encadre le régime des zones franches en Haïti, instruit les demandes
            d&apos;accréditation et accompagne les investisseurs dans leur implantation sur le
            territoire national.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/la-dzf" variant="invert">
              Découvrir la DZF
            </Button>
            <Button href="/contact">Nous contacter</Button>
          </div>
        </Container>
      </section>

      {/* Key facts band */}
      <section className="border-b border-line bg-panel">
        <Container>
          <dl className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {KEY_FACTS.map((fact) => (
              <div key={fact.label} className="py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <dt className="text-xs font-bold tracking-[0.14em] text-ht-red-600 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 font-bold text-ht-blue-900">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Démarches et services"
            title="Que souhaitez-vous faire ?"
            description="Accédez directement aux démarches et informations les plus demandées auprès de la Direction des Zones Franches."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceTile key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      {/* News + CNZF sessions */}
      <section className="border-y border-line bg-panel py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="Actualités" title="Communiqués et informations" />
              <div className="mt-6 bg-white px-6">
                {NEWS.map((item) => (
                  <NewsItem
                    key={item.title}
                    title={item.title}
                    tag={item.tag}
                    href="/activites"
                  />
                ))}
              </div>
              <div className="mt-6">
                <Button href="/activites" variant="secondary">
                  Toutes les actualités
                </Button>
              </div>
            </div>

            <aside>
              <SectionHeading eyebrow="CNZF" title="Sessions du Conseil" />
              <div className="mt-6 space-y-5">
                <article className="bg-white">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/images/s-ordinaire.JPG"
                      alt="Session ordinaire du Conseil National des Zones Franches"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="border-t-4 border-ht-blue-700 p-4">
                    <h3 className="font-bold text-ht-blue-800">Session ordinaire</h3>
                    <p className="mt-1 text-sm text-muted">
                      Examen des dossiers et orientations relatifs aux zones franches.
                    </p>
                  </div>
                </article>
                <article className="bg-white">
                  <div className="relative h-40 w-full">
                    <Image
                      src="/images/DZF-APN.jpg"
                      alt="Session extraordinaire du Conseil National des Zones Franches"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="border-t-4 border-ht-blue-700 p-4">
                    <h3 className="font-bold text-ht-blue-800">Session extraordinaire</h3>
                    <p className="mt-1 text-sm text-muted">
                      Traitement des dossiers prioritaires du Conseil.
                    </p>
                  </div>
                </article>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Free zone in operation */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Zone franche en activité"
            title="CODEVI, Ouanaminthe"
            description="Un exemple concret du régime encadré par la DZF : un parc industriel en activité depuis 2003, aujourd'hui l'un des plus grands employeurs du secteur de la sous-traitance en Haïti."
          />
          <div className="mt-10 grid items-stretch gap-0 border border-line lg:grid-cols-5">
            <div className="relative h-64 lg:col-span-3 lg:h-auto">
              <Image
                src="/images/codevi.jpg"
                alt="Vue aérienne du parc industriel de la zone franche CODEVI à Ouanaminthe"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-white p-6 lg:col-span-2 lg:p-8">
              <h3 className="text-lg font-bold text-ht-blue-900">Parc industriel de Ouanaminthe</h3>
              <span className="mt-3 block h-1 w-12 bg-ht-red-500" aria-hidden="true" />
              <p className="mt-4 text-sm leading-7 text-muted">
                Implantée sur une concession de 80 hectares dans le Nord-Est, la zone franche de
                CODEVI regroupe des dizaines d&apos;usines de confection textile travaillant pour
                des marques internationales.
              </p>
              <dl className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Commune</dt>
                  <dd className="font-bold text-ht-blue-900">Ouanaminthe</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">En activité depuis</dt>
                  <dd className="font-bold text-ht-blue-900">2003</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Secteur</dt>
                  <dd className="font-bold text-ht-blue-900">Textile</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="border-y border-line bg-panel py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Direction" title="Instances dirigeantes" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="flex gap-5 border-l-4 border-ht-blue-700 bg-white p-6">
              <Image
                src="/images/photo-ministre.jpg"
                alt="Le Ministre du Commerce et de l'Industrie"
                width={110}
                height={140}
                className="h-36 w-28 shrink-0 object-cover object-top"
              />
              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-ht-red-600 uppercase">
                  Ministère du Commerce et de l&apos;Industrie
                </p>
                <p className="mt-2 text-lg font-bold text-ht-blue-900">Le Ministre du MCI</p>
                <p className="mt-2 text-sm text-muted">
                  Autorité de tutelle de la Direction des Zones Franches.
                </p>
              </div>
            </div>
            <div className="flex gap-5 border-l-4 border-ht-blue-700 bg-white p-6">
              <Image
                src="/images/DG_DZF-3.jpg"
                alt="Le Directeur Général de la DZF"
                width={110}
                height={140}
                className="h-36 w-28 shrink-0 object-cover object-top"
              />
              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-ht-red-600 uppercase">
                  Direction des Zones Franches
                </p>
                <p className="mt-2 text-lg font-bold text-ht-blue-900">Le Directeur Général</p>
                <p className="mt-2 text-sm text-muted">
                  Pilotage stratégique et représentation institutionnelle de la DZF.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button href="/personnel" variant="secondary">
              Voir le personnel et la structure
            </Button>
          </div>
        </Container>
      </section>

      {/* Call to action — a contained panel, not a full-bleed band, so the
          footer remains the only closing block on the page. */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 border border-line border-l-4 border-l-ht-red-500 bg-panel p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-ht-blue-900">
                Vous souhaitez investir en zone franche ?
              </h2>
              <p className="mt-2 max-w-2xl text-muted">
                Nos services vous accompagnent dans la constitution de votre dossier
                d&apos;accréditation et vous informent sur les avantages du régime.
              </p>
            </div>
            <Button href="/contact">Contacter nos services</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
