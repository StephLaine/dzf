import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "invert";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-ht-blue-700 text-white hover:bg-ht-blue-800",
  secondary:
    "border-2 border-ht-blue-700 bg-white text-ht-blue-700 hover:bg-ht-blue-50",
  invert: "bg-white text-ht-blue-800 hover:bg-ht-blue-50",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold no-underline transition-colors";

export default function Button({
  children,
  href,
  variant = "primary",
  ...rest
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const className = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
