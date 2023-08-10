import dotenv from "dotenv";
import { promises as fs } from "fs";
import path from "path";

const template = `---
title: 'Hello, Yogi!'
publishedAt: '2023-01-01'
summary: 'This is the first article, ever, in the history of the internet...'
---

Hey Boo Boo, Let's go steal some pic-a-nic baskets!
`;

const homePage = `export default function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">My Site</h1>
      <p className="prose prose-neutral dark:prose-invert">
        This is my new site.
      </p>
    </section>
  )
}`;

const deleteFolderRecursive = async (path) => {
  const stat = await fs.stat(path);
  if (stat.isDirectory()) {
    const files = await fs.readdir(path);
    await Promise.all(
      files.map((file) => deleteFolderRecursive(`${path}/${file}`))
    );
    await fs.rmdir(path);
  } else {
    await fs.unlink(path);
  }
};

// Who doesn't like an IIFE?!
(async () => {
  dotenv.config();

  if (process.env.IS_TEMPLATE === "false") {
    // return out of this as I do not want to delete my own content
    // if you are using this, set this env var to TRUE, then
    // run this script to erase the /content dir ;)
    return;
  }

  const contentDir = path.join(process.cwd(), "content"); // ./content
  const imagesDir = path.join(process.cwd(), "public", "images"); // /public/images
  const appDir = path.join(process.cwd(), "src/app"); // src/app

  await deleteFolderRecursive(contentDir);
  await deleteFolderRecursive(imagesDir);
  await fs.mkdir(contentDir);
  await fs.writeFile(path.join(contentDir, "hello-yogi.mdx"), template);
  await fs.writeFile(path.join(appDir, "page.tsx"), homePage);
})();
