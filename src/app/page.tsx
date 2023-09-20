import { BlogLink } from "@/components/shared/blog-link";
import { SocialLink } from "@/components/shared/social-link";
import { Suspense } from "react";

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
        mentoring has my heart. I did not re-create my personal site for the
        100th time for my own amusement this time (okay I did a little bit), I
        intend on teaching some seriously fun stuff. I want to teach what I want
        to learn, maybe you will find it interesting.
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
            Detailing cars is my zen.
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
