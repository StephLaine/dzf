import Link from "next/link";
import Tag from "./Tag";

export default function NewsCard({
  title,
  href,
  tag,
  date,
}: {
  title: string;
  href: string;
  tag?: string;
  date?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between border-t-4 border-ht-blue-700 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)] no-underline transition-shadow hover:shadow-[0_4px_14px_rgba(0,0,0,0.14)]"
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          {date && (
            <time className="text-xs font-bold tracking-wide text-ht-red-600 uppercase">
              {date}
            </time>
          )}
          {tag && <Tag>{tag}</Tag>}
        </div>
        <p className="mt-3 leading-snug font-bold text-ht-blue-800 group-hover:underline">
          {title}
        </p>
      </div>
      <span className="mt-4 text-sm font-bold text-ht-blue-700">Consulter →</span>
    </Link>
  );
}
