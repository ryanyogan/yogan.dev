"use client";

import { useRouter } from "next/navigation";
import FileUpload from "./file-upload";

export default function UploadContent() {
  const router = useRouter();

  return (
    <FileUpload
      endpoint="imageUploader"
      onChange={async (url) => {
        if (url) {
          router.refresh();
        }
      }}
    />
  );
}
