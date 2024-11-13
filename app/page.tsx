"use client";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HomeSection } from "@/components/HomeSection";
import MyInterests from "@/components/MyInterests";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
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

        <section className="bg-background">
          <ProjectsSection />
        </section>

        <section className="bg-background">
          <ExperienceSection />
        </section>

        <section className="bg-background">
          <MyInterests />
        </section>
        
      </main>
    </>
  );
}