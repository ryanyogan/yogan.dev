import { createImageUpload } from "@/actions";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "16MB" } })
    .middleware((res) => res)
    .onUploadComplete(async ({ file }) => {
      console.log("Uploaded " + file);
      await createImageUpload(file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
