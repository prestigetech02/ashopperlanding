import type { Metadata } from "next";
import { VendorsHero } from "@/components/vendors/hero";
import { VendorsSolutions } from "@/components/vendors/solutions";
import { VendorsSupports } from "@/components/vendors/supports";
import { VendorsFaq } from "@/components/vendors/faq";
import { DownloadBanner } from "@/components/download-banner";

export const metadata: Metadata = {
  title: "For Vendors — A-Shopper",
  description:
    "Sell engineering equipment with confidence. List from your phone, reach buyers worldwide, and get paid securely through Money Protection.",
};

export default function VendorsPage() {
  return (
    <main>
      <VendorsHero />
      <VendorsSolutions />
      <VendorsSupports />
      <VendorsFaq />
      <DownloadBanner
        variant="light"
        title="Ready to start selling?"
        description="Join A-Shopper as a vendor. List equipment from your phone, chat with buyers, and get paid through Money Protection."
      />
    </main>
  );
}
