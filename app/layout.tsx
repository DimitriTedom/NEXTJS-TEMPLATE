import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Snowdev NextJs Template",
    template: "%s | Snowdev NextJs Template",
  },
  description:
    "",
  keywords: [
    "snowdev",
    "template"
  ],
  authors: [{ name: "Dimitri Tedom", url: "https://github.com/DimitriTedom" }],
  metadataBase: new URL("https://snow-dev-portfolio-mu.vercel.app/"),
  openGraph: {
    title: "Snowdev NextJs Template",
    description:
      "",
    url: "https://snow-dev-portfolio-mu.vercel.app/",
    siteName: "Snowdev NextJs Template",
    images: [
      {
        url: "https://snow-prompt-builder.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Snowdev NextJs Template Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DimitriTedom",
    creator: "@DimitriTedom",
    title: "Snowdev NextJs Template",
    description:
      "",
    images: ["https://snow-dev-portfolio-mu.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/og-image.png",
    apple: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-nexa`}
      >
        {children}
      </body>
    </html>
  );
}
