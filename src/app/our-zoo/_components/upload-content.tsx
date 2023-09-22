"use client";

import FileUpload from "./file-upload";

export default function UploadContent() {
  return (
    <FileUpload
      endpoint="imageUploader"
      onChange={async (url) => {
        if (url) {
          console.log(url);
          // await createPhotoPost(url);
        }
      }}
    />
  );
}
