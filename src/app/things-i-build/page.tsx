import { ExternalLink } from "@/components/shared/external-link";

export default function TechToys() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        things i build,{" "}
        <span className="text-neutral-400 tracking-normal font-normal">
          to learn, for fun.
        </span>
      </h1>

      <p className="prose prose-neutral dark:prose-invert">
        I enjoy building useful and useless projects, some are for the kids,
        some are for me or the household, and some are simply me cloning
        projects to see if I can. Why the f@*k would you waste your time doing
        that Ryan? Good question, this is how I learn, this is what is fun to
        me. I digress...
      </p>

      <p className="prose prose-neutral dark:prose-invert mt-4 text-gray-500">
        Note: To save time in my life, some of these projects are using Node and
        the server-less paradigm from Vercel. Vercel has a cold boot time of
        around 3 seconds, so please be patient as I do not want to convert these
        all to the edge. Some services haul ass, they are either static, on the
        edge, or using Fly.io. I will write a post about this topic in time, I
        promise, I won&apos;t 🤣.
      </p>

      <div className="my-8 flex flex-col space-y-4 w-full">
        <ExternalLink
          title="Jarvis"
          description="
            An AI chatbot using Next 13.4, edge based streaming, the Vercel AI
            package and the Vercel KV for saving chats. I use the shit out of
            this daily as I personally, and I cannot stress this enough,
            personally, cannot stand the OpenAI UI.
          "
          href="https://jarvis.yogan.dev"
        />

        <ExternalLink
          title="Dispatch"
          description="
          I love this little service and use it like it's going out of style,
          I DO NOT use this service for non-simulated
          aviation, please... use Foreflight lol. If you are a big simmer like
          me as well, I love pulling this little tool out if I have my VR on,
          give it a quick look for ATIS and runways, and go back to enjoying
          that VFR! I do have a service I use that I am making pretty for
          flight planning. This service uses Remix, Sqlite (yup, distributed,
          LiteFS!), and well.. web standards. It just works, I forgot about
          it, a year later in my Fly dashboard it was chugging along, no
          updates needed, nothing, it just works. Having said that, Remix is
          very much an exploration model for me at best. I am waiting to see
          what Shopify and crew do with it 🚀
          "
          href="https://dispatch.fly.dev"
        />

        <ExternalLink
          title="Dreadit"
          description="
          For the kids, they like D&D, I wanted to create a small `Reddit` for
          them. This uses Next, Redis, Prisma, Postgres, Tailwind, Vercels
          Edge, React Query... essentially the reason I am starting to like
          basic web applications and Remix again lmao. A lot of code to do ..
          not that much, but fun!
          "
          href="https://dreadit.yogan.dev"
        />

        <ExternalLink
          title="Mood Journal"
          description="
          My little journal that tells me how I am feeling based on my entry,
          and over time. This project leverages Next 13, Redis, MySql
          (PlanetScale), Prisma, Tailwind, all the crap essentially. I like
          it, my kids like it, my mother said it works so ya know... that's
          the feeedback right there!
          "
          href="https://journal.yogan.dev"
        />

        <ExternalLink
          title="Bionic X"
          description="
          So Twitter is not a thing, or is it, who knows if the DNS will ever
          remove the 301 from twitter to x.com. Random... does anyone else
          feel dirty typing x.com? It's just fucking weird! Well, use this
          tool to create a new bio, for anything! Yes again, OpenAI, Edge,
          blah blah blah. You get where this is going.
          "
          href="https://bionic.yogan.dev"
        />

        <ExternalLink
          title="Egg Of Wisdom"
          description="
          Myself and the kids like to learn, they have to (so the school tells
            us), I want to. Pick any topic and this tool will query GPT 4 to
            create either an open ended test, or a multiple choice test. This is
            legit fun, uses alot of db vectoring, really fun prompt engineering
            and a good oppurtunity to make something useful.
          "
          href="https://egg.yogan.dev"
        />

        <ExternalLink
          title="Build a Friend"
          description="
          Want to hang out with Christopher Walken, get yelled at by Elon
          Musk, or ask Steve Jobs for some wisdom? Perhaps you want to create
          a wise wizard, or a mean mammoth. This chat application leverages A
          TON of LLM modeling, redis combined with PG to create personas, and
          naturally all the nonsense you'd expect in a 2023 Next app. The kids
          love this one!
          "
          href="https://friend.yogan.dev"
        />

        <ExternalLink
          title="AirBnB Clone (take 20?)"
          description="
          The internet would stop working without another over-engineered CMS,
          cough, I mean a home rental site in which I have zero homes to rent,
          but it sure is pretty! I have a weird love of AirBnB, their service
          is cool, their tech is cool, thus they are cool. That is essentially
          the theory of relativity in my mind. This was a fantastic way to
          learn the newer app based router for Next 13, this uses MongoDB and
          serverless, so enjoy that cold boot time 🥳
          "
          href="https://bnb.ryanyogan.com"
        />

        <ExternalLink
          title="Here's One Thing"
          description="
          Named after a phrase we hear far too often in our home... `But
          here's one thing`, this Next 13 application is real-time chat
          application that we use in the house to send funny memes, pics,
          videos and other content we do not want lost in the ether of a group
          message.
          "
          href="https://one.yogan.dev"
        />

        <ExternalLink
          title="Yogi"
          description="
          This is my own personal `SAAS` application for AI tooling. This has
          chat, audio, video, and some amazing DALL-E tools to help with my
          three-dimensional modeling, don't get excited, it's just Three.js or
          GoDot engine.
          "
          href="https://yogi.yogan.dev"
        />

        <ExternalLink
          title="E-Commerce Store"
          description="
          This client side application (Next 13) is heavily cached and running
          on the edge, this particular tool leverages the API's exposed from
          the `E-Commerce Admin` tool.
          "
          href="https://store.yogan.dev"
        />

        <ExternalLink
          title="E-Commerce SaaS Admin"
          description="
          A fun Next 13 dashboard with all the CMS bells and whistles one
          would expect. I built this with Wix in mind, I wanted to create an
          easier way for my better half to expose blocks, products, or general
          layouts via an API.
          "
          href="https://ecommerce.yogan.dev"
        />
      </div>
    </section>
  );
}
