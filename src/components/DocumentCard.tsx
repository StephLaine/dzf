import type { DocumentEntry } from "@/lib/documents";

export default function DocumentCard({ document }: { document: DocumentEntry }) {
  return (
    <a
      href={document.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 border border-line bg-white p-5 no-underline transition-colors hover:border-ht-blue-700 hover:bg-ht-blue-50"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-ht-red-500 text-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.6}
          stroke="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 12 2.25 2.25L16.5 12m-7.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      </span>
      <span className="flex-1">
        <span className="block font-bold text-ht-blue-800 group-hover:text-ht-blue-700">
          {document.title}
        </span>
        <span className="mt-1 block text-sm leading-6 text-muted">{document.description}</span>
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold tracking-wide text-ht-red-600 uppercase">
          Télécharger le PDF · {document.sizeLabel}
        </span>
      </span>
    </a>
  );
}
