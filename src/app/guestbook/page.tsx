import { getGuestbookEntries } from "@/actions";
import { SignIn, SignOut } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { auth } from "@/lib/auth";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Sign the guestbook, say anything...",
};

export default async function SignPage() {
  let session;
  let entries;

  try {
    const [sessionRes, entriesRes] = await Promise.allSettled([
      auth(),
      getGuestbookEntries(),
    ]);

    if (sessionRes.status === "fulfilled") {
      session = sessionRes.value;
    } else {
      console.error(sessionRes);
    }

    if (entriesRes.status === "fulfilled" && entriesRes.value[0]) {
      entries = entriesRes.value;
    } else {
      console.error(entriesRes);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        leave something,{" "}
        <span className="text-neutral-400 tracking-normal font-normal">
          possibly nice.
        </span>
      </h1>
      {session?.user ? (
        <>
          <Form />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}

      {entries?.map((entry) => (
        <div key={entry.id} className="flex flex-col space-y-1 mb-4">
          <div className="w-full text-sm break-words">
            <span className="text-neutral-600 dark:text-neutral-400 mr-1">
              {entry.createdBy}:
            </span>
            {entry.body}
          </div>
        </div>
      ))}
    </section>
  );
}
