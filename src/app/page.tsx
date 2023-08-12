import { BlogLink } from "@/components/shared/blog-link";
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

      <h3 className="font-bold text-xl my-10 tracking-tighter">
        leadership
        <span className="text-neutral-400 font-normal">, two books please</span>
      </h3>

      <p className="prose prose-neutral dark:prose-invert">
        Please, if you read one book on leadership (I know, crazy, we read
        hundreds on programming yet...) please read{" "}
        <a href="https://www.engmanagement.dev/">
          Sarah Drasner&apos;s - Engineering Management for the rest of us.
        </a>
        <br />
        <br />
        This book capstones much of what I believe to be true in engineering
        leadership; however, this book also cracked an&apos; egg of wisdom on me
        and some.
        <br />
        Make your life easier and read the book, I am in no way affliated.
      </p>
      <hr className="my-10" />
      <p className="prose prose-neutral dark:prose-invert">
        <span className="underline decoration-red-400/40">
          Whoops, I read People-Ware, uh-oh!
        </span>{" "}
        I have been in this industry as an engineering manager for quite some
        time, yet I had not read PeopleWare! It was not until a fantastic leader
        recommended this book, I finally read it! 🚀
        <br />
        <br />
        My perspective has not changed; however, my narrative has. I knew in my
        heart, there were others with more emphasis on the human perspective. I
        beleive this book capstones many of my thoughts on leadership!{" "}
        <span className="font-semibold"></span>
        <a
          href="https://www.amazon.com/Peopleware-Productive-Projects-Tom-DeMarco/dp/0932633439/ref=sr_1_4?keywords=peopleware&qid=1664326500&qu=eyJxc2MiOiIyLjE2IiwicXNhIjoiMS43NSIsInFzcCI6IjEuNzkifQ%3D%3D&sr=8-4"
          className="underline decoration-slice transition-all duration-300 ease-in-out"
        >
          Read the book to understand me, read the book for the greater good
        </a>
        &nbsp;😃
      </p>

      <div className="my-8 flex flex-col space-y-4 w-full">
        <Suspense>
          <BlogLink name="This is new." slug="hello-yogi" />
        </Suspense>
      </div>

      <h3 className="font-bold text-xl my-10 tracking-tighter">
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
        <br />
        I love all forms of software engineering; however, the UI has my heart.
        <br />
        <br />I study too much, I still buy resources on things I know, I may
        have a nerd shopping habbit.
      </p>

      <h3 className="font-bold text-xl my-10 tracking-tighter">
        giving back,
        <span className="text-neutral-400 font-normal"> mentoring</span>
      </h3>

      <p className="prose prose-neutral dark:prose-invert">
        To a community, or building one is excellence! My fondest memories to
        date:
        <br />
        1. Speaking @ USCB to new graduates ~ &quot;We need you, more than you
        need us!&quot;
        <br />
        2. Hack-a-thon by the Sea - Receiving an award, smiles and thanks from
        children and parents, helping them build video-games whilst teaching
        them about our industry. Happiest moment in my career!
        <br />
      </p>

      <h3 className="font-bold text-xl my-10 tracking-tighter">
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
          <li>Detailing cars (a days worth) is my zen.</li>
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
