import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Story from "@/components/Story";
import Experience from "@/components/Experience";
import Academics from "@/components/Academics";
import Admissions from "@/components/Admissions";
import Footer from "@/components/Footer";
import { CustomCursor, ScrollProgress } from "@/components/ClientUI";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Stats />
      <Story />
      <Experience />
      <Academics />
      <Admissions />
      <Footer />
    </main>
  );
}
