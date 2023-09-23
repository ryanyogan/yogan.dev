"use server";

import { db } from "@/lib/db";
import { NewImage, image } from "@/lib/db/schema";
import { getServerSession } from "next-auth";

export async function createImageUpload(imageUrl: NewImage["imageUrl"]) {
  return db.insert(image).values({ imageUrl });
}

export async function getRecentImages() {
  return await db.query.image.findMany({});
}

export async function getCurrentSession() {
  const session = await getServerSession();
  return session;
}
