import Link from "next/link";

export default function Breadcrumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-line bg-panel">
      <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
          {trail.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-line">
                  /
                </span>
              )}
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span className="font-semibold text-ink">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
