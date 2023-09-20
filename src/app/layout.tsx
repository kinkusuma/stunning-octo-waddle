import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "@/components/NavBar";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News Portal",
  description: "News Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <NavBar />
        <main className='px-10 pt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          perferendis aliquid, dignissimos adipisci quam animi vel quo pariatur
          et libero enim similique tempora soluta, dolore eos unde corrupti
          veniam officiis.{children}
        </main>
      </body>
    </html>
  );
}
