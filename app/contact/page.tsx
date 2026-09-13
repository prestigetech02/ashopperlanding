import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/hero";
import { ContactPanel } from "@/components/contact/panel";
import { DownloadBanner } from "@/components/download-banner";

export const metadata: Metadata = {
  title: "Contact Us — A-Shopper",
  description:
    "Questions about buying, selling, partnerships, or support? Send A-Shopper a message and our team will get back to you.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactPanel />
      <DownloadBanner />
    </main>
  );
}
