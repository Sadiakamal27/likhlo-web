import type { Metadata } from "next";
import bgImage from "@/assets/mesh-gradient-1.png";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
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
          <Image
            className="fixed cover  w-full h-full "
            src={bgImage}
            width={400}
            height={200}
            alt="background-mesh"
          />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
