import Link from "next/link";

export const runtime = "edge";
export default function TechToys() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        things i build,{" "}
        <span className="text-neutral-400 tracking-normal font-normal">
          to learn, for fun, for greater good.
        </span>
      </h1>
      <Link
        href="https://jarvis.yogan.dev"
        target="_blank"
        className="flex flex-col space-y-1 mb-4"
      >
        <div className="w-full flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Jarvis
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            AI Chat Bot powered by NextJS, OpenAI, Redis KV, and Server
            Streaming. This shows off the latest power of Next & Vercel
            combined, I love it!
          </p>
        </div>
      </Link>
      <Link
        href="https://friend.yogan.dev"
        target="_blank"
        className="flex flex-col space-y-1 mb-4"
      >
        <div className="w-full flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Build. A. Friend.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            Select a pre-modeled character to chat with, or create your own
            witty individual to have chat with :)
          </p>
        </div>
      </Link>
      <Link
        href="https://egg.yogan.dev"
        target="_blank"
        className="flex flex-col space-y-1 mb-4"
      >
        <div className="w-full flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Egg O&apos; Wisdom
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            Using the power of LLM&apos; and vector DB&apos; this fun service
            allows you to select the topic, and it will generate either multiple
            choice, or an open-ended quiz.
          </p>
        </div>
      </Link>
      <Link
        href="https://one.yogan.dev"
        target="_blank"
        className="flex flex-col space-y-1 mb-4"
      >
        <div className="w-full flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            Here&apos; One Thing
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            Fun little NextJs, Prisma, PlanetScale, Typescript Meta Messaenger
            Clone
          </p>
        </div>
      </Link>
      <Link
        href="https://bnb.ryanyogan.com"
        target="_blank"
        className="flex flex-col space-y-1 mb-4"
      >
        <div className="w-full flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            AirBNB Clone
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            What the internet be without yet another Next13 app router based
            AirBNB clone?!
          </p>
        </div>
      </Link>
      <Link
        href="https://store.ryanyogan.com"
        target="_blank"
        className="flex flex-col space-y-1 mb-4"
      >
        <div className="w-full flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            E-Commerce Store
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            This one is fun, it uses some neat tricks, it simply is an example
            store front for the SaaS / Ecommerce backend.
          </p>
        </div>
      </Link>
      <Link
        href="https://ecommerce.yogan.dev"
        target="_blank"
        className="flex flex-col space-y-1 mb-4"
      >
        <div className="w-full flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            E-Commerce Admin
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            A really fun NextJS / ShadCN / TS / Prisma / Planetscale service
            exposing a rest and GQL api for both the web and native application.
          </p>
        </div>
      </Link>
      <Link
        href="https://fly.yogan.dev"
        target="_blank"
        className="flex flex-col space-y-1 mb-4"
      >
        <div className="w-full flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            V REF
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            Serious Flight Simmer? Then you want to use this for your flight
            planning needs. In time, it is my hope that this can become the
            ForeFlight&apos; of Simming!
          </p>
        </div>
      </Link>
    </section>
  );
}
