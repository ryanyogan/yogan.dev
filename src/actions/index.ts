"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { NewImage, image } from "@/lib/db/schema";
import { Session } from "next-auth";

export async function getSession(): Promise<Session> {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }

  return session;
}

export async function createImageUpload(imageUrl: NewImage["imageUrl"]) {
  return db.insert(image).values({ imageUrl });
}

export async function getRecentImages() {
  return await db.query.image.findMany({});
}
