import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Sahoo OS",
    template: "%s | Sahoo OS",
  },

  description:
    "Sahoo OS is a retro desktop-inspired developer portfolio created by Jyoti Ranjan Sahoo. Explore projects, terminal, profile, resume, and interactive desktop experience built with Next.js 16, React 19, TypeScript, Tailwind CSS, GSAP, and modern web technologies.",

  applicationName: "Sahoo OS",

  authors: [
    {
      name: "Jyoti Ranjan Sahoo",
    },
  ],

  creator: "Jyoti Ranjan Sahoo",

  publisher: "Jyoti Ranjan Sahoo",

  keywords: [
    "Jyoti Ranjan Sahoo",
    "Sahoo OS",
    "Portfolio",
    "Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Node.js",
    "MongoDB",
    "Web Developer",
    "Software Engineer",
  ],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/icon.png",
        sizes: "180x180",
      },
    ],

    other: [
      {
        rel: "icon",
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },

      {
        rel: "icon",
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Sahoo OS",

    description:
      "Retro desktop-inspired developer portfolio by Jyoti Ranjan Sahoo.",

    url: "https://your-domain.com",

    siteName: "Sahoo OS",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/icon.png",

        width: 1200,

        height: 630,

        alt: "Sahoo OS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sahoo OS",

    description: "Retro desktop-inspired portfolio built with Next.js 16.",

    images: ["/icon.png"],
  },

  category: "Technology",
};
