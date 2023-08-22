import { allArticles } from "contentlayer/generated";

export default async function sitemap() {
  const articles = allArticles.map((article) => ({
    url: `https://ryanyogan.com/articles/${article.slug}`,
    lastModified: article.publishedAt,
  }));

  const routes = ["", "/articles", "/guestbook", "/things-i-build"].map(
    (route) => ({
      url: `https://ryanyogan.com${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...articles];
}
