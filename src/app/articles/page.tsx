import { allArticles } from "contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles on Software Engineering, Engineering Leadership, tutorials, aviation, and me soap-boxing.",
};

export default async function ArticlePage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        read my articles,{" "}
        <span className="text-neutral-400 tracking-normal font-normal">
          and ramblings.
        </span>
      </h1>
      {allArticles
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="flex flex-col space-y-1 mb-4"
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {article.title}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                I am switching all DB requests to redis...
              </p>
              {/* <ViewCounter
                allViews={allViews}
                slug={article.slug}
                trackView={false}
              /> */}
            </div>
          </Link>
        ))}
    </section>
  );
}
