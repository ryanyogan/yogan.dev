import { getRecentImages } from "@/actions";
import { SignInButton, SignOutButton, auth } from "@clerk/nextjs";
import BlurImage from "./_components/blur-image";
import UploadContent from "./_components/upload-content";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function OurZoo() {
  const images = await getRecentImages();
  const { userId } = auth();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        the zoo,{" "}
        <span className="text-neutral-400 font-normal">
          we love our animals!
        </span>
      </h1>

      <br />

      <p className="prose prose-neutral dark:prose-invert">
        I am fairly certain we have the oddest cats on this planet, have yet to
        check others 🚀. We take way too many damn pictures of these little
        stinkers. 🙀
      </p>

      <br />

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6">
        {images.length
          ? images.map((image) => <BlurImage key={image.id} image={image} />)
          : null}
      </div>

      <div className="mt-20 w-full flex justify-center items-center">
        {userId ? (
          <div className="flex flex-col items-center gap-y-2">
            <UploadContent />

            <span className="text-slate-500 font-medium text-sm underline underline-offset-2">
              <SignOutButton />
            </span>
          </div>
        ) : (
          <span className="text-slate-500 font-medium text-sm underline underline-offset-2">
            <SignInButton />
          </span>
        )}
      </div>
    </section>
  );
}
