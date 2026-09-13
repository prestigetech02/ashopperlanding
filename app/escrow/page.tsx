import type { Metadata } from "next";
import { MoneyProtectionHero } from "@/components/money-protection/hero";
import { MoneyProtectionSteps } from "@/components/money-protection/steps";
import { MoneyProtectionWhy } from "@/components/money-protection/why";
import { MoneyProtectionFaq } from "@/components/money-protection/faq";
import { MoneyProtectionClosing } from "@/components/money-protection/closing";
import { DownloadBanner } from "@/components/download-banner";

export const metadata: Metadata = {
  title: "Money Protection — A-Shopper",
  description:
    "Every A-Shopper purchase is protected by built-in Money Protection. Funds are held until you confirm delivery, and vendors ship knowing payment is locked in.",
};

export default function MoneyProtectionPage() {
  return (
    <main>
      <MoneyProtectionHero />
      <MoneyProtectionSteps />
      <MoneyProtectionWhy />
      <MoneyProtectionFaq />
      <MoneyProtectionClosing />
      <DownloadBanner />
    </main>
  );
}
