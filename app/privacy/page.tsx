import type { Metadata } from "next";
import { LegalPageHeader } from "@/components/legal/legal-primitives";
import { PrivacyContent } from "@/components/legal-pages/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy — A-Shopper",
  description:
    "How A-Shopper Global Limited collects, uses, stores, shares, and protects your personal data under the Nigeria Data Protection Act 2023 (NDPA) and GAID 2025.",
  openGraph: {
    title: "Privacy Policy — A-Shopper",
    description:
      "A-Shopper Privacy Policy: data collection, payment-related processing, your rights, and how to contact our Data Protection Officer.",
    type: "website",
    url: "https://www.a-shopper.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <LegalPageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={
          <>
            How we collect, use, protect, share, and govern your personal data. This Policy is
            legally binding and forms part of our Terms &amp; Conditions. By accessing or using the
            Platform you confirm that you have read and understood this Policy. If you do not agree,
            please do not use the Platform.
          </>
        }
        meta={
          <>
            Primary framework: Nigeria Data Protection Act 2023 (NDPA 2023) | GAID 2025.
            Supplementary: EU GDPR | UK GDPR | CCPA/CPRA | POPIA.
            <br />
            Website:{" "}
            <a href="https://www.a-shopper.com" className="text-primary hover:underline">
              www.a-shopper.com
            </a>
            {" · "}
            DPO:{" "}
            <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
              privacy@a-shopper.com
            </a>
            {" · "}
            Related:{" "}
            <a href="/cookies" className="text-primary hover:underline">
              Cookie Policy
            </a>
          </>
        }
      />
      <PrivacyContent />
    </main>
  );
}
