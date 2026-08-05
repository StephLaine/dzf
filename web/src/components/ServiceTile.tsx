import Link from "next/link";

export type ServiceIcon =
  | "factory"
  | "document"
  | "legal"
  | "council"
  | "publication"
  | "contact";

const ICON_PATHS: Record<ServiceIcon, string> = {
  factory:
    "M2.25 21h19.5M6.75 21V9.75l5.25-3v3l5.25-3V21M6.75 12.75h.008v.008H6.75v-.008Zm0 3h.008v.008H6.75v-.008Zm3.75-3h.008v.008H10.5v-.008Zm0 3h.008v.008H10.5v-.008Zm3.75-3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z",
  document:
    "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 12 2.25 2.25L16.5 12m-7.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  legal:
    "M12 3v17.25m0-17.25c-2.291 0-4.545.16-6.75.47m6.75-.47c2.291 0 4.545.16 6.75.47m-13.5 0c-1.01.143-2.01.317-3 .52m3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.99 5.99 0 0 1-2.031.352 5.99 5.99 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 3.99Zm13.5 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.99 5.99 0 0 1-2.031.352 5.99 5.99 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 3.99Zm3 .52c-.99-.203-1.99-.377-3-.52M7.815 21c1.303-.485 2.713-.75 4.185-.75s2.882.265 4.185.75",
  council:
    "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.34 9.34 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.32 12.32 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  publication:
    "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
  contact:
    "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
};

export default function ServiceTile({
  icon,
  title,
  description,
  href,
}: {
  icon: ServiceIcon;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex gap-4 border border-line bg-white p-5 no-underline transition-colors hover:border-ht-blue-700 hover:bg-ht-blue-50"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-ht-blue-700 text-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={1.6}
          stroke="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={ICON_PATHS[icon]} />
        </svg>
      </span>
      <span>
        <span className="block font-bold text-ht-blue-800 group-hover:text-ht-blue-700">
          {title}
        </span>
        <span className="mt-1 block text-sm leading-6 text-muted">{description}</span>
      </span>
    </Link>
  );
}
