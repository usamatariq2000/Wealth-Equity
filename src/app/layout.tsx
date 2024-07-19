import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#F9F1EC] h-full w-full">
          {/* <Header /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
