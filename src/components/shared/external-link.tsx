import Link from "next/link";
import { ArrowIcon } from "./arrow-icon";

interface ExternalLinkProps {
  title: string;
  description: string;
  href: string;
}

export function ExternalLink({ title, href, description }: ExternalLinkProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex flex-col mr-2">
        <h1 className="font-bold text-neutral-900 dark:text-neutral-100">
          {title}
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
          {description}
        </p>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </Link>
  );
}
