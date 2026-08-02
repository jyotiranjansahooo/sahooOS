import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/press-start-2p";
import { WindowProvider } from "./context/WindowContext";
import { Toaster } from "react-hot-toast";
import { ProjectProvider } from "./context/ProjectContext";
// import { DesktopProvider } from "@/app/context/DesktopContext";
import { siteMetadata } from "./metadata";

export const metadata: Metadata = siteMetadata;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen">
  <ClerkProvider>
    <ProjectProvider>
      {/* <DesktopProvider> */}
        <WindowProvider>
          {children}

          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
            }}
          />
        </WindowProvider>
      {/* </DesktopProvider> */}
    </ProjectProvider>
  </ClerkProvider>
</body>
    </html>
  );
}
