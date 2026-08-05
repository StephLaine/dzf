import Link from "next/link";
import Tag from "./Tag";

export default function NewsItem({
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
    <article className="border-b border-line py-5 last:border-b-0">
      <div className="flex flex-wrap items-center gap-3">
        {date && (
          <time className="text-xs font-bold tracking-wide text-ht-red-600 uppercase">{date}</time>
        )}
        {tag && <Tag>{tag}</Tag>}
      </div>
      <h3 className="mt-2 text-lg leading-snug font-bold">
        <Link href={href} className="text-ht-blue-800 no-underline hover:underline">
          {title}
        </Link>
      </h3>
    </article>
  );
}
