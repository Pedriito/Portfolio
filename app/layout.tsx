import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Intro from "@/components/intro";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pierre-Elie | Personal Portfolio",
  description: "Pierre Elie est un développeur web fullstack avec 3 ans d'expérience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className="bg-[#9f7e7f] absolute top-[-6rem] -z-10 right-[11rem] h-[32.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#3b3d82] absolute top-[-1rem] -z-10 left-[-35rem] h-[32.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <ActiveSectionContextProvider>
        <Header/>
      {children}
      </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
