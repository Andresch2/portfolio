"use client";
import { HomeSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar handleScroll={handleScroll} />
      <main>
        <HomeSection handleScroll={handleScroll} />
      </main>
    </>
  );
}