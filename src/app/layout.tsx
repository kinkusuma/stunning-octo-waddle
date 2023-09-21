import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";
import ReactQueryProviders from "@/components/ReactQueryProviders";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
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
      <body className='px-5 md:px-10' style={roboto.style}>
        <ReactQueryProviders>
          <Nav />
          {children}
          <Footer />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
