import type { Metadata } from "next";
import { AboutHero } from "@/components/about/hero";
import { AboutPillars } from "@/components/about/pillars";
import { AboutStory } from "@/components/about/story";
import { AboutHow } from "@/components/about/how";
import { AboutValues } from "@/components/about/values";
import { DownloadBanner } from "@/components/download-banner";

export const metadata: Metadata = {
  title: "About Us — A-Shopper",
  description:
    "A-Shopper is purpose-built for engineering equipment. We connect buyers and verified vendors of heavy machinery, power tools, and industrial equipment, with chat, Money Protection, and delivery tracking in one mobile app.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutPillars />
      <AboutStory />
      <AboutHow />
      <AboutValues />
      <DownloadBanner />
    </main>
  );
}
