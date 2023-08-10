"use client";

import { useEffect } from "react";

interface ViewCounterProps {
  slug: string;
  allViews: {
    slug: string;
    count: number;
  }[];
  trackView?: boolean;
}
export function ViewCounter({ slug, allViews, trackView }: ViewCounterProps) {
  //TODO: Replace this with an action that hits @vercel/kv
  const viewsForSlug = allViews && allViews.find((view) => view.slug === slug);
  const number = new Number(viewsForSlug?.count || 0);

  useEffect(() => {
    if (trackView) {
      // increment(slug);
    }
  }, [trackView]);

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {`${number.toLocaleString()} views`}
    </p>
  );
}
