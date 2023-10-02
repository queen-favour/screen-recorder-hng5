import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "@/components/ui/navbar/navbar";
import { Sora } from "next/font/google";
import Footer from "@/components/ui/footer/footer";
const sora = Sora({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Help",
  description: "video recording chrome extention",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
