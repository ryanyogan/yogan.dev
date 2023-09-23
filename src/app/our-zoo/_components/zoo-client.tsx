"use client";

import { SignIn, SignOut } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import UploadContent from "./upload-content";

export default function ZooClient() {
  const session = useSession();

  return (
    <div className="mt-20 w-full flex flex-col justify-center items-center">
      {session?.data?.user ? (
        <div className="flex flex-col gap-y-2">
          <UploadContent />
          <SignOut />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
