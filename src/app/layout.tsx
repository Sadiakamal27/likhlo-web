import type { Metadata } from "next";
import bgImageDark from "@/assets/mesh-gradient-1.png";
import bgImageLight from "@/assets/mesh-gradient-light.png";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import Navbar from "@/components/navbar";
import Image from "next/image";
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Likhlo",
  description:
    "Likhlo is a modern book publishing platform innovating how people write and read books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Image
            className="fixed cover  object-cover w-full h-full "
            src={bgImageDark}
            width={400}
            height={200}
            alt="background-mesh"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
