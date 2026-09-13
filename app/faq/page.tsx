import type { Metadata } from "next";
import { HelpHero } from "@/components/help/hero";
import { HelpFaqList } from "@/components/help/faq-list";
import { HelpClosing } from "@/components/help/closing";
import { DownloadBanner } from "@/components/download-banner";

export const metadata: Metadata = {
  title: "Help Center / FAQ — A-Shopper",
  description:
    "Answers about buying, renting, Money Protection payments, vendor selling, and getting support on A-Shopper.",
};

export default function FaqPage() {
  return (
    <main>
      <HelpHero />
      <HelpFaqList />
      <HelpClosing />
      <DownloadBanner />
    </main>
  );
}
