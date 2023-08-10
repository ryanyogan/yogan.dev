import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc: any) => doc._raw.flattenedPath,
  },
  structuredData: {
    type: "nested",
    resolve: (doc: any) => ({
      "@context": "https://schema.org",
      "@type": "ArticlePosting",
      headline: doc.tile,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `https://yogan.dev${doc.image}`
        : `https://yogan.dev/og?title=${doc.title}`,
      url: `https://yogan.dev/articles/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: "Ryan Yogan",
      },
    }),
  },
};

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
