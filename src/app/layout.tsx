import { Navbar } from "@/components/shared/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const graphik = localFont({
  src: [
    {
      path: "../../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryanyogan.com"),
  title: {
    default: "Ryan Yogan",
    template: "%s | Ryan Yogan",
  },
  description: "Engineering Leader, Developer, Writer, and Aviation Nerd",
  openGraph: {
    title: "Ryan Yogan",
    description: "Engineering Leader, Developer, Writer, and Aviation Nerd",
    url: "https://ryanyogan.com",
    siteName: "Ryan Yogan",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ryan Yogan",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={clsx(
          "text-black bg-white dark:text-white dark:bg-[#111010]",
          graphik.variable
        )}
      >
        <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Analytics />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
