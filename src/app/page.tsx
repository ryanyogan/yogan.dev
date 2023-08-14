import { BlogLink } from "@/components/shared/blog-link";
import { SocialLink } from "@/components/shared/social-link";
import { Suspense } from "react";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        hello, I&apos;m{" "}
        <a
          href="https://www.linkedin.com/in/ryan-yogan-b0218157/"
          target="_blank"
          className="underline decoration-slice decoration-slate-400 transition-all duration-300 ease-in-out"
          rel="noreferrer"
        >
          ryan
        </a>{" "}
        👋
      </h1>

      <p className="prose prose-neutral dark:prose-invert">
        I am a developer, engineering leader, and complete aviation nerd. I am a
        believer, a dreamer, and I see art in every facet of life.
        <br />
        <br />I am a builder; however, satisfaction does not come from my
        creations. My joy, insipriation, feeling of value comes from those that
        I may help with their creation. ♥️
      </p>

      <div className="my-10 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <SocialLink
          img="/images/me.jpeg"
          name="@ryanyogan"
          count={654}
          service="github"
          link="https://github.com/ryanyogan"
        />

        <SocialLink
          img="/images/me.jpeg"
          name="@ryanyogan"
          count={1_000}
          service="x"
          link="https://x.com/ryanyogan"
        />
      </div>

      <h3 className="font-bold text-2xl my-8 tracking-tighter">
        fun drives me,{" "}
        <span className="text-neutral-400 font-normal">you motivate me</span>
      </h3>

      <p className="prose prose-neutral dark:prose-invert">
        To paraphrase{" "}
        <a
          href="https://www.imdb.com/name/nm0000190/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-slice transition-all duration-300 ease-in-out"
        >
          Matthew McConaughey
        </a>
        , it&apos;s the &quot;Why, Oh, You.&quot; My drive is simple, I want you
        to be happy, the best user experience, the best developer experience,
        the most kick-ass work experience.
        <br />
        <br />I love all forms of software engineering; however, education and
        mentoring has my heart.
      </p>

      <div className="my-8 flex flex-col space-y-4 w-full">
        <Suspense>
          <BlogLink
            name="New Year Starting in August"
            slug="new-year-starting-in-august"
          />
          <BlogLink name="Rebuilding React 2025" slug="rebuilding-react-2025" />
        </Suspense>
      </div>

      <h3 className="font-bold text-2xl my-8 tracking-tighter">
        leadership
        <span className="text-neutral-400 font-normal">, two books please</span>
      </h3>

      <p className="prose prose-neutral dark:prose-invert">
        <a href="https://www.engmanagement.dev/">
          Sarah Drasner&apos;s - Engineering Management for the rest of us
        </a>
        . This book in my opinion (take with salt), should be the standard 101
        course in engineering leadership; however, this book also cracked me up,
        and taught me so much
      </p>

      <div className="h-px my-10 bg-neutral-200 dark:bg-neutral-500 w-2/3 mx-auto" />

      <p className="prose prose-neutral dark:prose-invert">
        <span className="underline decoration-red-400/40">
          Whoops, I read People-Ware, uh-oh!
        </span>{" "}
        I have been in this industry as an engineering manager for quite some
        time, yet I had not read PeopleWare! It was not until a fantastic leader
        recommended this book, I finally read it! 🚀
        <br />
        <br />A group of individuals that work together like a fine tuned
        symphony-orchestra... This book taught me how to execute on the creation
        of truly vulnerable teams. Simply the best!{" "}
        <a
          href="https://www.amazon.com/Peopleware-Productive-Projects-Tom-DeMarco/dp/0932633439/ref=sr_1_4?keywords=peopleware&qid=1664326500&qu=eyJxc2MiOiIyLjE2IiwicXNhIjoiMS43NSIsInFzcCI6IjEuNzkifQ%3D%3D&sr=8-4"
          className="underline decoration-slice transition-all duration-300 ease-in-out"
        >
          Read the book for the greater good
        </a>
        &nbsp;😃
      </p>

      <h3 className="font-bold text-2xl my-8 tracking-tighter">
        giving back,
        <span className="text-neutral-400 font-normal"> mentoring</span>
      </h3>

      <div className="prose prose-neutral dark:prose-invert">
        To a community, or building one is excellence! My fondest experiences to
        date,
        <ul>
          <li>
            Speaking @ USCB to new graduates - &quot;We need you, more than you
            need us!&quot;
          </li>
          <li>
            Hack-a-thon by the Sea - Receiving an award, smiles and thanks from
            children and parents, helping them build video-games whilst teaching
            them about our industry. Happiest moment in my career!
          </li>
        </ul>
      </div>

      <h3 className="font-bold text-2xl my-8 tracking-tighter">
        my loves,
        <span className="text-neutral-400 font-normal">
          {" "}
          the reasons we work
        </span>
      </h3>

      <div className="prose prose-neutral dark:prose-invert">
        <ul>
          <li>
            <span className="text-2xl">🛩 </span>is my joy.{" "}
          </li>
          <li>
            <span className="text-2xl">🎸 </span>is my jam.{" "}
          </li>
          <li>
            <span className="text-2xl">👨‍👩‍👦‍👦 </span>is my love.
          </li>
          <li>
            <span className="text-2xl">🐕 & 🐈‍⬛ </span>pain in the ass.
          </li>
          <li>
            <span className="text-2xl">🚙 </span>
            Detailing cars is my zend.
          </li>
        </ul>
      </div>

      <p className="text-xs text-slate-400 pt-14">
        Props where due,&nbsp;
        <a
          href="https://leerob.io/"
          className="underline decoration-slice transition-all duration-300 ease-in-out"
          target="_blank"
          rel="noreferrer"
        >
          Lee Robinson
        </a>{" "}
        is a huge visual design inspirer of mine. I love simple.
      </p>
    </section>
  );
}
