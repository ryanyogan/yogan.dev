"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { Guestbook } from "@prisma/client/edge";
import { Session } from "next-auth";
import { revalidatePath } from "next/cache";

export async function getSession(): Promise<Session> {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  return session;
}

export async function increment(slug: string) {
  const article = await db.views.findFirst({
    where: { slug },
  });
  console.log("SLUG", article);

  if (article) {
    await db.views.update({
      where: { id: article.id },
      data: {
        count: {
          increment: 1,
        },
      },
    });
  } else {
    await db.views.create({
      data: {
        slug,
        count: 1,
      },
    });
  }
}

export async function getViewCounts() {
  return db.views.findMany({
    select: {
      slug: true,
      count: true,
    },
  });
}

export async function getGuestbookEntries(): Promise<
  Pick<Guestbook, "id" | "body" | "createdBy" | "updatedAt">[]
> {
  return await db.guestbook.findMany({
    select: {
      id: true,
      body: true,
      createdBy: true,
      updatedAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
    take: 100,
  });
}

export async function saveGuestbookEntry(formData: FormData) {
  const session = await getSession();
  const email = session.user?.email as string;
  const createdBy = session.user?.name as string;
  const entry = formData.get("entry")?.toString() || "";
  const body = entry.slice(0, 500);

  await db.guestbook.create({
    data: {
      email,
      body,
      createdBy,
    },
  });

  revalidatePath("/guestbook");

  // const data = await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.RESEND_SECRET}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     from: "guestbook@yogan.dev",
  //     to: "ryanyogan@gmail.com",
  //     subject: "New Guestbook Entry",
  //     html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
  //   }),
  // });

  // const response = await data.json();
  // console.log("Email Sent", response);
}
