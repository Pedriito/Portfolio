import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Experience/>
      <Contact/>
    </main>
  );
};
