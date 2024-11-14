"use client";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HomeSection } from "@/components/HomeSection";
import MyInterests from "@/components/MyInterests";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TransitionSection } from "@/components/TransitionSection";

export default function Home() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar handleScroll={handleScroll} />
      <main className="overflow-hidden">
      <TransitionSection id="inicio">
        <HomeSection handleScroll={handleScroll} />
      </TransitionSection>

      <TransitionSection id="acercademi" className="bg-background">
          <AboutSection />
        </TransitionSection>

        <TransitionSection id="skills" className="bg-background">
          <SkillsSection />
        </TransitionSection>

        <TransitionSection id="misproyectos" className="bg-background">
          <ProjectsSection />
        </TransitionSection>

        <TransitionSection id="experiencia" className="bg-background">
          <ExperienceSection />
        </TransitionSection>

        <TransitionSection id="misintereses" className="bg-background">
          <MyInterests />
        </TransitionSection>

        <TransitionSection id="contactos" className="bg-background">
          <ContactSection />
        </TransitionSection>
      </main>
    </>
  );
}