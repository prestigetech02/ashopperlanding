import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
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
      <Mission />
      <Confidence />
      <GetStarted />
      <BuyerProtection />
      <ForVendors />
      <FAQ />
      <DownloadBanner />
    </main>
  );
}
