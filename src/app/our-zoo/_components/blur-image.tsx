"use client";

import { Image } from "@/lib/db/schema";
import NextImage from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  image: Image;
}

function parseDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export default function BlurImage({ image }: Props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href="#" className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <NextImage
          alt="fancy animal picture"
          src={image.imageUrl || "https://bit.ly/placeholder-img"}
          fill
          className={cn(
            "group-hover:opacity-75 object-cover duration-700 ease-in-out",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Uploaded On</h3>
      <p className="mt-1 text-sm font-medium text-gray-500">
        {parseDate(new Date(image.createdAt!))}
      </p>
    </a>
  );
}
