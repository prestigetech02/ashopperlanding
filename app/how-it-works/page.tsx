import type { Metadata } from "next";
import { HowItWorksHero } from "@/components/how-it-works/hero";
import { HowItWorksJourney } from "@/components/how-it-works/journey";
import { HowItWorksFlow } from "@/components/how-it-works/flow";
import { HowItWorksProtection } from "@/components/how-it-works/protection";
import { HowItWorksClosing } from "@/components/how-it-works/closing";
import { DownloadBanner } from "@/components/download-banner";

export const metadata: Metadata = {
  title: "How It Works — A-Shopper",
  description:
    "Browse engineering equipment, chat with verified vendors, pay with Money Protection, and confirm delivery, all from the A-Shopper mobile app.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <HowItWorksHero />
      <HowItWorksJourney />
      <HowItWorksFlow />
      <HowItWorksProtection />
      <HowItWorksClosing />
      <DownloadBanner />
    </main>
  );
}
