"use server";

import { auth } from "@/lib/auth";
import { Session } from "next-auth";

export async function getSession(): Promise<Session> {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  return session;
}
