"use client";
import { AboutSection } from "@/components/AboutSection";
import { HomeSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar handleScroll={handleScroll} />
      <main>
        <HomeSection handleScroll={handleScroll} />

        <section className="bg-background">
          <AboutSection />
        </section>

        <section className="bg-background">
          <SkillsSection />
        </section>
        
      </main>
    </>
  );
}