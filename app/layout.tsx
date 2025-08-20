import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mb-web-boilerplate.vercel.app'),
  title: {
    default: "MB Web Boilerplate - Modern Next.js 15 Starter",
    template: "%s | MB Web Boilerplate",
  },
  description: "Production-ready Next.js 15 boilerplate with React 19, TypeScript, Tailwind CSS v4, Supabase, Drizzle ORM, and shadcn/ui components",
  keywords: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Drizzle ORM",
    "shadcn/ui",
    "Boilerplate",
    "Starter Template",
  ],
  authors: [{ name: "MB" }],
  creator: "MB",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mb-web-boilerplate.vercel.app",
    siteName: "MB Web Boilerplate",
    title: "MB Web Boilerplate - Modern Next.js 15 Starter",
    description: "Production-ready Next.js 15 boilerplate with React 19, TypeScript, Tailwind CSS v4, Supabase, Drizzle ORM, and shadcn/ui components",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MB Web Boilerplate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Web Boilerplate - Modern Next.js 15 Starter",
    description: "Production-ready Next.js 15 boilerplate with React 19, TypeScript, Tailwind CSS v4, Supabase, Drizzle ORM, and shadcn/ui",
    images: ["/og-image.svg"],
    creator: "@mb",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
