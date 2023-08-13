import { ExternalLink } from "@/components/shared/external-link";

export const runtime = "edge";
export default function TechToys() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        things i build,{" "}
        <span className="text-neutral-400 tracking-normal font-normal">
          to learn, for fun.
        </span>
      </h1>

      <div className="my-8 flex flex-col space-y-4 w-full">
        <ExternalLink
          title="Jarvis"
          description="
            AI Chat Bot powered by NextJS, OpenAI, Redis KV, and Server
            Streaming. This shows off the latest power of Next & Vercel
            combined, I love it!
          "
          href="https://jarvis.yogan.dev"
        />
        <ExternalLink
          title="Build a Friend"
          description="
          Select a pre-modeled character to chat with, or create your own
          witty individual to have chat with :)
          "
          href="https://friend.yogan.dev"
        />
        <ExternalLink
          title="Egg Of Wisdom"
          description="
          Using the power of LLM' and vector DB' this fun service
          allows you to select the topic, and it will generate either multiple
          choice, or an open-ended quiz.
          "
          href="https://egg.yogan.dev"
        />
        <ExternalLink
          title="Yogi"
          description="
          NextJS, Clerk, Prisma, PlanetScale, Tailwind. Multi-Purpose GPT,
          DALL-E, Music Generation, Video Generation, Code Generation.
          "
          href="https://yogi.yogan.dev"
        />
        <ExternalLink
          title="Here's One Thing"
          description="
          Fun little NextJs, Prisma, PlanetScale, Typescript Meta Messaenger
          Clone
          "
          href="https://one.yogan.dev"
        />
        <ExternalLink
          title="AirBnB Clone"
          description="
          What would the internet be without yet another Next13 app router based
          AirBNB clone?!
          "
          href="https://bnb.ryanyogan.com"
        />
        <ExternalLink
          title="E-Commerce Store"
          description="
          This one is fun, it uses some neat tricks, it simply is an example
          store front for the SaaS / Ecommerce backend.
          "
          href="https://store.yogan.dev"
        />
        <ExternalLink
          title="E-Commerce SaaS Admin"
          description="
          A really fun NextJS / ShadCN / TS / Prisma / Planetscale service
          exposing a rest and GQL api for both the web and native application.
          "
          href="https://ecommerce.yogan.dev"
        />
        <ExternalLink
          title="V-SYNC"
          description="
          Serious Flight Simmer? Then you want to use this for your flight
          planning needs. In time, it is my hope that this can become the
          ForeFlight' of Simming!
          "
          href="https://vsync.yogan.dev"
        />
      </div>
    </section>
  );
}
