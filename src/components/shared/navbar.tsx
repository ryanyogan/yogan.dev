"use client";

import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "home",
  },
  "/articles": {
    name: "articles",
  },
  "/things-i-build": {
    name: "projects",
  },
};

export function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/articles/")) {
    pathname = "/articles";
  }

  return (
    <aside className="mb-16 -ml-[8px] tracking-tight">
      <LayoutGroup>
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                    {
                      "text-neutral-500": !isActive,
                    },
                  )}
                >
                  <span className="relative py-1 px-2">
                    {name}
                    {path === pathname ? (
                      <motion.div
                        className="absolute h-px top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                        layoutId="sidebar"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    ) : null}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="ml-auto mt-0.5">
            <Link href="/our-zoo">
              <span className="text-xs">🐱</span>
            </Link>
          </div>
        </nav>
      </LayoutGroup>
    </aside>
  );
}
