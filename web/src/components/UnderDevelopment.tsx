import Breadcrumbs from "./Breadcrumbs";
import PageHero from "./PageHero";
import Container from "./Container";
import Button from "./Button";

export default function UnderDevelopment({ title }: { title: string }) {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Accueil", href: "/" }, { label: title }]} />
      <PageHero title={title} />

      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl border border-line border-t-4 border-t-ht-red-500 bg-panel p-8 text-center sm:p-12">
          <span className="mx-auto flex h-14 w-14 items-center justify-center bg-ht-blue-700 text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={1.6}
              stroke="currentColor"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437"
              />
            </svg>
          </span>

          <h2 className="mt-6 text-2xl font-bold text-ht-blue-900">
            En cours de développement
          </h2>
          <span className="mx-auto mt-3 block h-1 w-14 bg-ht-red-500" aria-hidden="true" />
          <p className="mt-4 text-muted">
            Cette section du site est en cours de développement et sera disponible
            prochainement. Nous vous remercions de votre patience.
          </p>

          <div className="mt-8">
            <Button href="/">Retour à l&apos;accueil</Button>
          </div>

          <p className="mt-8 border-t border-line pt-6 text-sm text-muted">
            Pour toute demande, écrivez-nous à{" "}
            <a href="mailto:info@dzf.gouv.ht">info@dzf.gouv.ht</a>
          </p>
        </div>
      </Container>
    </div>
  );
}
