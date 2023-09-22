"use server";

import { db } from "@/lib/db";
import { NewImage, image } from "@/lib/db/schema";

export async function createImageUpload(imageUrl: NewImage["imageUrl"]) {
  return db.insert(image).values({ imageUrl });
}

export async function getRecentImages() {
  return await db.query.image.findMany({});
}
