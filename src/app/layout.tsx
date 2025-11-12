import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Listee Web",
  description:
    "Web client for Listee built on the shared API, auth, and types packages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
