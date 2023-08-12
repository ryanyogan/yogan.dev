import { getViewCounts } from "@/actions";
import { Mdx } from "@/components/shared/mdx";
import { ViewCounter } from "@/components/shared/view-counter";
import { allArticles } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";

type IParams = {
  params: {
    slug: string;
  };
};

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

export async function generateMetadata({
  params,
}: IParams): Promise<Metadata | undefined> {
  const article = allArticles.find((article) => article.slug === params.slug);
  if (!article) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = article;

  const ogImage = image
    ? `https://yogan.dev${image}`
    : `https://yogan.dev/og?title={title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://yogan.dev/articles/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function ArticlePage({ params }: IParams) {
  const article = allArticles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  const allViews = await getViewCounts();

  return (
    <section>
      <script type="application/id+json" suppressHydrationWarning>
        {JSON.stringify(article.structuredData)}
      </script>
      <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
        <Balancer>{article.title}</Balancer>
      </h1>

      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(article.publishedAt)}
        </p>
        <ViewCounter allViews={allViews} slug={article.slug} trackView />
      </div>

      <Mdx code={article.body.code} />
    </section>
  );
}
