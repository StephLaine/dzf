export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.14em] text-ht-red-600 uppercase">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-2xl font-bold text-ht-blue-900 sm:text-3xl">{title}</h2>
      <span className="mt-3 block h-1 w-14 bg-ht-red-500" aria-hidden="true" />
      {description && <p className="mt-4 text-base text-muted">{description}</p>}
    </div>
  );
}
