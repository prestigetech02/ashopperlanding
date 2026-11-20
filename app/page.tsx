import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { EquipmentMarketplace } from "@/components/equipment-marketplace";
import { ProjectTerms } from "@/components/project-terms";
import { Confidence } from "@/components/confidence";
import { GetStarted } from "@/components/get-started";
import { BuyerProtection } from "@/components/buyer-protection";
import { ForVendors } from "@/components/for-vendors";
import { FAQ } from "@/components/faq";
import { DownloadBanner } from "@/components/download-banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <EquipmentMarketplace />
      <ProjectTerms />
      <Confidence />
      <GetStarted />
      <BuyerProtection />
      <ForVendors />
      <FAQ />
      <DownloadBanner />
    </main>
  );
}
