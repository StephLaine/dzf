import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b-4 border-ht-red-500 bg-ht-blue-800">
      <Container className="py-10 sm:py-14">
        {eyebrow && (
          <p className="text-xs font-bold tracking-[0.14em] text-ht-blue-200 uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-3xl text-base text-ht-blue-100 sm:text-lg">{description}</p>
        )}
      </Container>
    </div>
  );
}
