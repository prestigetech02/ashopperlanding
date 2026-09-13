import type { Metadata } from "next";
import { LegalPageHeader } from "@/components/legal/legal-primitives";
import { TermsContent } from "@/components/legal-pages/terms-content";

export const metadata: Metadata = {
  title: "Terms & Conditions — A-Shopper",
  description:
    "Terms & Conditions of Use for the A-Shopper Platform governing buyers, sellers, service providers, renters, and developers. Governed by the laws of the Federal Republic of Nigeria.",
  openGraph: {
    title: "Terms & Conditions — A-Shopper",
    description:
      "Platform terms governing all Users of A-Shopper Global Limited. Effective 2026. Version 1.0.",
    type: "website",
    url: "https://www.a-shopper.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main>
      <LegalPageHeader
        eyebrow="Legal"
        title="Terms & Conditions of Use"
        description={
          <>
            Platform terms governing all Users, Buyers, Sellers, Service Providers, Renters &amp;
            Developers. Kindly read these Terms carefully before using the A-Shopper Platform. By
            accessing, registering, or using the Platform in any capacity, you agree to be legally
            bound by these Terms. If you do not agree, you must not access or use the Platform.
          </>
        }
        meta={
          <>
            Applicable globally · Effective 2026 · Version 1.0 · Jurisdiction: Federal Republic of
            Nigeria.
            <br />
            Website:{" "}
            <a href="https://www.a-shopper.com" className="text-primary hover:underline">
              www.a-shopper.com
            </a>
            {" · "}
            Related:{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </>
        }
      />
      <TermsContent />
    </main>
  );
}
