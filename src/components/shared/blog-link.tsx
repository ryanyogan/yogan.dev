import Link from "next/link";
import { ArrowIcon } from "./arrow-icon";

interface BlogLinkProps {
  slug: string;
  name: string;
}

export async function BlogLink({ slug, name }: BlogLinkProps) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
    >
      <div className="flex flex-col">
        <p className="font-bold text-neutral-900 dark:text-neutral-100">
          {name}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          I am switching all DB requests to redis...
        </p>
        {/* <ViewCounter allViews={100} slug={slug} trackView={false} /> */}
      </div>
      <div className="text-neutral-700 dark:text-neutral-300">
        <ArrowIcon />
      </div>
    </Link>
  );
}
