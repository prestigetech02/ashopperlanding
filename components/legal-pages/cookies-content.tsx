import Link from "next/link";
import {
  LegalH3,
  LegalList,
  LegalP,
  LegalSection,
  LegalTable,
  LegalToc,
} from "@/components/legal/legal-primitives";

const tocItems = [
  { href: "#section-1", label: "1. Who We Are" },
  { href: "#section-2", label: "2. What Are Cookies" },
  { href: "#section-3", label: "3. Why We Use Cookies" },
  { href: "#section-4", label: "4. Types of Cookies" },
  { href: "#section-5", label: "5. Cookie Details" },
  { href: "#section-6", label: "6. Consent" },
  { href: "#section-7", label: "7. Managing Preferences" },
  { href: "#section-8", label: "8. Third-Party Cookies" },
  { href: "#section-9", label: "9. Similar Technologies" },
  { href: "#section-10", label: "10. International Users" },
  { href: "#section-11", label: "11. Changes" },
  { href: "#section-12", label: "12. Contact" },
];

export function CookiesContent() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 pb-20 sm:px-6 lg:px-8">
      <LegalToc items={tocItems} />

      <LegalP className="text-xs">
        Last Updated: May 2026 · Effective: 1 June 2026 · Version 1.0
      </LegalP>

      <LegalTable
        headers={["Detail", "Information"]}
        rows={[
          ["Registered Name", "A-Shopper Global Limited"],
          ["RC Number", "RC: 7835618"],
          [
            "Registered Address",
            "[Registered Office Address], Lagos, Federal Republic of Nigeria",
          ],
          [
            "DPO Email",
            "privacy@ashopper.com — cookie preferences and data protection requests",
          ],
          [
            "Cookie Policy",
            <Link key="cookies-url" href="/cookies" className="text-primary hover:underline">
              https://www.a-shopper.com/cookies
            </Link>,
          ],
          [
            "Privacy Policy",
            <Link key="privacy-url" href="/privacy" className="text-primary hover:underline">
              https://www.a-shopper.com/privacy
            </Link>,
          ],
          ["Customer Support", "support@ashopper.com"],
        ]}
      />

      <LegalSection id="section-1" title="1. Who We Are">
        <LegalP>
          1.1 This Cookie Policy explains how A-Shopper Global Limited (&quot;A-Shopper&quot;,
          &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking
          technologies on the A-Shopper website, mobile applications, and related services (the
          &quot;Platform&quot;).
        </LegalP>
        <LegalP>
          1.2 This Policy forms part of our{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms &amp; Conditions
          </Link>
          . Capitalised terms not defined here have the meaning given in those documents.
        </LegalP>
        <LegalP>
          1.3 Cookie use is governed primarily by the Nigeria Data Protection Act 2023 (NDPA 2023)
          and the NDPA General Application and Implementation Directive 2025 (GAID 2025), including
          GAID 2025 Art.19 on cookies and similar technologies.
        </LegalP>
      </LegalSection>

      <LegalSection id="section-2" title="2. What Are Cookies?">
        <LegalP>
          2.1 Cookies are small text files stored on your device when you visit a website or use an
          app. They help the Platform recognise your device, remember preferences, keep you signed
          in, and understand how the Platform is used.
        </LegalP>
        <LegalP>
          2.2 Cookies may be &quot;session&quot; cookies (deleted when you close your browser or
          app) or &quot;persistent&quot; cookies (stored until they expire or you delete them).
        </LegalP>
        <LegalP>
          2.3 Cookies may be set by A-Shopper (&quot;first-party cookies&quot;) or by third-party
          service providers acting on our behalf or independently (&quot;third-party cookies&quot;).
        </LegalP>
      </LegalSection>

      <LegalSection id="section-3" title="3. Why We Use Cookies">
        <LegalP>3.1 We use cookies and similar technologies to:</LegalP>
        <LegalList
          items={[
            "Operate the Platform securely (authentication, session integrity, fraud prevention);",
            "Remember preferences such as language, currency, and display settings;",
            "Measure performance, diagnose errors, and improve marketplace features;",
            "Understand aggregate usage patterns so we can improve buyer and vendor experience;",
            "Deliver or measure marketing only where you have given prior explicit consent.",
          ]}
        />
        <LegalP>
          3.2 We do not use cookies to sell your personal data. Any personal data collected through
          cookies is processed under our{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="section-4" title="4. Types of Cookies We Use">
        <LegalP>
          4.1 A-Shopper uses the following categories in compliance with GAID 2025 Art.19:
        </LegalP>
        <LegalTable
          headers={["Cookie Type", "Purpose", "Disableable?", "Duration"]}
          rows={[
            [
              "Strictly Necessary",
              "Session management, login authentication, shopping cart, security tokens, CSRF protection. Core to Platform function.",
              "No. Platform cannot function without these.",
              "Session / up to 24hrs",
            ],
            [
              "Performance & Analytics",
              "Usage patterns, page visits, error tracking, load times. Data aggregated and anonymised where practicable; no individual profiling for advertising without consent.",
              "Yes, via consent banner",
              "Up to 13 months",
            ],
            [
              "Functional / Preference",
              "Language, currency, layout preferences, recently viewed items, “remember me” login settings.",
              "Yes, via consent banner",
              "Up to 12 months",
            ],
            [
              "Marketing & Targeting",
              "Relevant advertising, campaign tracking, retargeting. Set ONLY with prior explicit consent per GAID 2025 Art.19.",
              "Yes; withdraw consent anytime",
              "Up to 90 days",
            ],
            [
              "Third-Party / Social",
              "Set by providers (e.g. analytics or advertising partners). A-Shopper does not control these cookies.",
              "Yes, via browser settings or consent banner",
              "Varies by provider",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection id="section-5" title="5. Cookie Details (Illustrative)">
        <LegalP>
          5.1 The following table lists representative cookies that may be used on the Platform.
          Exact names and providers may change as we update tools; the consent banner and this
          Policy will reflect material changes.
        </LegalP>
        <LegalTable
          headers={["Name / Category", "Provider", "Purpose", "Type"]}
          rows={[
            [
              "as_session / auth token",
              "A-Shopper",
              "Keep you signed in and protect account sessions",
              "Strictly Necessary",
            ],
            [
              "csrf_token",
              "A-Shopper",
              "Prevent cross-site request forgery on forms and checkout flows",
              "Strictly Necessary",
            ],
            [
              "currency / locale",
              "A-Shopper",
              "Remember currency and language preferences",
              "Functional",
            ],
            [
              "cookie_consent",
              "A-Shopper",
              "Store your cookie preference choices",
              "Strictly Necessary",
            ],
            [
              "Analytics identifiers",
              "Analytics provider",
              "Measure traffic, feature usage, and performance (consent-based where required)",
              "Performance",
            ],
            [
              "Marketing pixels",
              "Advertising partners",
              "Measure campaigns and show relevant ads only with prior consent",
              "Marketing",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection id="section-6" title="6. Cookie Consent (GAID 2025 Art.19)">
        <LegalP>
          6.1 On first visit, a clear consent banner is presented. Only Strictly Necessary cookies
          are set before consent. No pre-ticked boxes are used for non-essential cookies.
        </LegalP>
        <LegalP>6.2 You may:</LegalP>
        <LegalList
          items={[
            "Accept All — allow all cookie categories;",
            "Reject Non-Essential — allow only Strictly Necessary cookies;",
            "Customise — choose categories individually.",
          ]}
        />
        <LegalP>
          6.3 Marketing and non-essential analytics cookies are set only after you give prior
          explicit consent. You may withdraw consent at any time without affecting the lawfulness of
          processing based on consent before its withdrawal.
        </LegalP>
      </LegalSection>

      <LegalSection id="section-7" title="7. Managing Your Cookie Preferences">
        <LegalH3>7.1 Platform Controls</LegalH3>
        <LegalP>
          Update preferences anytime through Account Settings &gt; Cookie Preferences (in-app), or
          by contacting{" "}
          <a href="mailto:privacy@ashopper.com" className="text-primary hover:underline">
            privacy@ashopper.com
          </a>
          .
        </LegalP>
        <LegalH3>7.2 Browser Controls</LegalH3>
        <LegalP>
          Most browsers let you block or delete cookies. If you block Strictly Necessary cookies,
          parts of the Platform (including sign-in, cart, and checkout) may not work correctly.
        </LegalP>
        <LegalH3>7.3 Mobile Devices</LegalH3>
        <LegalP>
          On mobile apps, similar identifiers and SDKs may be used. You can reset advertising IDs
          or limit ad tracking in your device settings, and manage in-app preference controls where
          available.
        </LegalP>
      </LegalSection>

      <LegalSection id="section-8" title="8. Third-Party Cookies">
        <LegalP>
          8.1 Some cookies are set by third parties that provide analytics, payment, messaging,
          maps, advertising, or social features. Those providers may process data under their own
          privacy policies.
        </LegalP>
        <LegalP>
          8.2 A-Shopper requires processors to handle personal data under appropriate contracts and
          security measures, as described in our{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          . We do not control cookies set independently by third-party websites you visit after
          leaving the Platform.
        </LegalP>
      </LegalSection>

      <LegalSection id="section-9" title="9. Similar Technologies">
        <LegalP>
          9.1 In addition to cookies, we may use local storage, session storage, pixels, SDKs, and
          similar technologies for the same purposes described in this Policy. Where those
          technologies process personal data, the same consent and rights rules apply.
        </LegalP>
      </LegalSection>

      <LegalSection id="section-10" title="10. International Users">
        <LegalP>
          10.1 If you access the Platform from outside Nigeria, cookies and related processing may
          involve transfers of data to Nigeria or other countries where our service providers
          operate. Transfers are handled under the safeguards described in our Privacy Policy
          (including NDPA / GAID requirements for cross-border transfers).
        </LegalP>
      </LegalSection>

      <LegalSection id="section-11" title="11. Changes to This Cookie Policy">
        <LegalP>
          11.1 We may update this Cookie Policy to reflect changes in law, technology, or Platform
          features. The &quot;Last Updated&quot; date at the top will change when we do.
        </LegalP>
        <LegalP>
          11.2 Material changes affecting non-essential cookies or your rights will be communicated
          through the consent banner, in-Platform notice, and/or email where appropriate. Continued
          use after the Effective Date of an updated Policy, where permitted by law, constitutes
          acceptance of the updated terms for cookie use.
        </LegalP>
      </LegalSection>

      <LegalSection id="section-12" title="12. Contact Us">
        <LegalP>
          For questions about cookies, consent, or your data protection rights, contact our Data
          Protection Officer:
        </LegalP>
        <LegalList
          items={[
            <>
              Email:{" "}
              <a href="mailto:privacy@ashopper.com" className="text-primary hover:underline">
                privacy@ashopper.com
              </a>
            </>,
            <>
              Support:{" "}
              <a href="mailto:support@ashopper.com" className="text-primary hover:underline">
                support@ashopper.com
              </a>
            </>,
            <>
              Privacy Policy:{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                /privacy
              </Link>
            </>,
          ]}
        />
        <LegalP>
          You may also lodge a complaint with the Nigeria Data Protection Commission (NDPC) at
          www.ndpc.gov.ng or complaints@ndpc.gov.ng.
        </LegalP>
      </LegalSection>
    </div>
  );
}
