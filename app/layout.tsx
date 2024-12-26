import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tracy Musongole | Software Developer",
  description: "My professional portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
