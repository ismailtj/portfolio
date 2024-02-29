import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderMenu from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi I'm Ismail",
  description: "Created by Ismail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderMenu />
        <main className="flex min-h-screen flex-col items-center justify-between ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

