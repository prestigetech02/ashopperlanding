import type { Metadata } from "next";
import { LegalPageHeader } from "@/components/legal/legal-primitives";
import { CookiesContent } from "@/components/legal-pages/cookies-content";

export const metadata: Metadata = {
  title: "Cookie Policy — A-Shopper",
  description:
    "How A-Shopper Global Limited uses cookies and similar technologies on the website and app, and how you can manage consent under NDPA 2023 and GAID 2025.",
  openGraph: {
    title: "Cookie Policy — A-Shopper",
    description:
      "A-Shopper Cookie Policy: cookie categories, consent, third-party cookies, and how to manage preferences.",
    type: "website",
    url: "https://www.a-shopper.com/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main>
      <LegalPageHeader
        eyebrow="Legal"
        title="Cookie Policy"
        description={
          <>
            This Cookie Policy explains what cookies and similar technologies we use on the
            A-Shopper Platform, why we use them, and how you can manage your preferences. It forms
            part of our Privacy Policy and Terms &amp; Conditions.
          </>
        }
        meta={
          <>
            Primary framework: Nigeria Data Protection Act 2023 (NDPA 2023) | GAID 2025 Art.19.
            <br />
            Related:{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            {" · "}
            <a href="/terms" className="text-primary hover:underline">
              Terms &amp; Conditions
            </a>
            {" · "}
            DPO:{" "}
            <a href="mailto:privacy@ashopper.com" className="text-primary hover:underline">
              privacy@ashopper.com
            </a>
          </>
        }
      />
      <CookiesContent />
    </main>
  );
}
