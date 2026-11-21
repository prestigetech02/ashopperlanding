import {
  LegalH3,
  LegalList,
  LegalP,
  LegalSection,
  LegalTable,
  LegalToc,
} from '@/components/legal/legal-primitives';

const tocItems = [
  { href: '#section-1', label: '1. Who We Are' },
  { href: '#section-2', label: '2. Scope' },
  { href: '#section-3', label: '3. Personal Data We Collect' },
  { href: '#section-4', label: '4. How We Collect' },
  { href: '#section-5', label: '5. Lawful Basis' },
  { href: '#section-6', label: '6. How We Use' },
  { href: '#section-7', label: '7. Data Sharing' },
  { href: '#section-8', label: '8. International Transfers' },
  { href: '#section-9', label: '9. Retention' },
  { href: '#section-10', label: '10. Security' },
  { href: '#section-11', label: '11. Your Rights' },
  { href: '#section-12', label: '12. Cookies' },
  { href: '#section-13', label: '13. Children' },
  { href: '#section-14', label: '14. Marketing' },
  { href: '#section-15', label: '15. Automated Decisions' },
  { href: '#section-16', label: '16. DPIAs' },
  { href: '#section-17', label: '17. Vendor Data' },
  { href: '#section-18', label: '18. User-to-User' },
  { href: '#section-19', label: '19. Third-Party Links' },
  { href: '#section-20', label: '20. International Users' },
  { href: '#section-21', label: '21. Minimisation & Accuracy' },
  { href: '#section-22', label: '22. Penalties' },
  { href: '#section-23', label: '23. Whistleblower' },
  { href: '#section-24', label: '24. Accessibility' },
  { href: '#section-25', label: '25. Changes' },
  { href: '#section-26', label: '26. Contact & Complaints' },
];

export function PrivacyContent() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 pb-20 sm:px-6 lg:px-8">
      <LegalToc items={tocItems} />

      <LegalP className="text-xs">
        Last Updated: May 2026 · Effective: 1 June 2026 · Version 1.0 Legally Verified
      </LegalP>

      <LegalTable
        headers={['Detail', 'Information']}
        rows={[
          ['Registered Name', 'A-Shopper Global Limited'],
          ['RC Number', 'RC: 7835618'],
          [
            'Registered Address',
            '[Registered Office Address], Lagos, Federal Republic of Nigeria',
          ],
          [
            'DPO Email',
            'privacy@a-shopper.com — all data subject rights requests (NDPA 2023 s.32)',
          ],
          [
            'Privacy Policy',
            <a
              key="privacy-url"
              href="https://www.a-shopper.com/privacy"
              className="text-primary hover:underline"
            >
              https://www.a-shopper.com/privacy
            </a>,
          ],
          [
            'Cookie Policy',
            <a
              key="cookies-url"
              href="/cookies"
              className="text-primary hover:underline"
            >
              https://www.a-shopper.com/cookies
            </a>,
          ],
          ['Customer Support', 'support@a-shopper.com'],
          ['Legal', 'legal@a-shopper.com'],
          ['Compliance / AML', 'compliance@a-shopper.com'],
          [
            'Supervisory Authority',
            'Nigeria Data Protection Commission (NDPC) — established under NDPA 2023 s.4',
          ],
          [
            'NDPC Website / Complaints',
            'www.ndpc.gov.ng | complaints@ndpc.gov.ng',
          ],
          [
            'DCPMI Registration',
            'Registered with NDPC as Data Controller of Major Importance under NDPA 2023 s.44',
          ],
        ]}
      />

      {/* 1. WHO WE ARE */}
      <LegalSection id="section-1" title="1. Who We Are: Data Controller &amp; Data Protection Officer">
        <LegalP>
          1.1 A-Shopper Global Limited (&quot;A-Shopper&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) is the Data Controller of your personal data as defined under the Nigeria
          Data Protection Act 2023 (NDPA 2023). As Data Controller, A-Shopper determines the purposes
          and means of processing your personal data and bears full legal responsibility for ensuring
          compliance with the NDPA 2023 and the NDPA General Application and Implementation Directive
          2025 (GAID 2025), which took effect on 19 September 2025 and replaced the NDPR 2019 as the
          primary implementing instrument.
        </LegalP>
        <LegalP>
          1.2 A-Shopper is a company incorporated under the laws of the Federal Republic of Nigeria
          (RC: 7835618), with its registered office at [Registered Office Address], Lagos, Federal
          Republic of Nigeria. A-Shopper operates a dynamic engineering tools e-commerce marketplace
          connecting Nigerian, African and Global businesses with verified suppliers, manufacturers,
          and distributors — offering B2B, B2C, C2C, service-to-service, and rental commerce
          solutions worldwide.
        </LegalP>
        <LegalH3>1.3 Governing Law &amp; Jurisdiction</LegalH3>
        <LegalP>
          This Privacy Policy and all data processing activities of A-Shopper are governed by the
          laws of the Federal Republic of Nigeria. The primary applicable framework is the Nigeria
          Data Protection Act 2023 as supplemented by the GAID 2025. Supplementary international
          frameworks (EU GDPR, UK GDPR, CCPA/CPRA, POPIA) apply to the extent required by law for
          Users in those jurisdictions. Where there is conflict, NDPA 2023 shall prevail for
          Nigerian-domiciled processing.
        </LegalP>
        <LegalH3>1.4 Data Protection Officer (DPO)</LegalH3>
        <LegalP>
          In compliance with NDPA 2023 s.32, A-Shopper has designated a dedicated Data Protection
          Officer with expert knowledge of data protection law and practices. The DPO is responsible
          for: overseeing data protection compliance; handling all data subject rights requests;
          advising on DPIAs; and liaising with the NDPC. Contact:{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>{' '}
          (all data subject rights requests).
        </LegalP>
        <LegalH3>1.5 Privacy by Design &amp; Default (NDPA 2023 s.24)</LegalH3>
        <LegalP>
          A-Shopper embeds data protection into all Platform systems and processes from inception,
          applying the principles of data minimisation, purpose limitation, storage limitation, and
          privacy by default across all operations.
        </LegalP>
        <LegalH3>1.6 Records of Processing Activities (RoPA)</LegalH3>
        <LegalP>
          A-Shopper maintains comprehensive Records of Processing Activities as required under NDPA
          2023, maintained by the DPO and available to the NDPC on request.
        </LegalP>
        <LegalH3>1.7 Annual Compliance Audit Return (CAR)</LegalH3>
        <LegalP>
          As a DCPMI, A-Shopper files an annual Compliance Audit Return (CAR) with the NDPC by 31
          March each year, conducted through an NDPC-licensed Data Protection Compliance Organisation
          (DPCO) per NDPA 2023 s.44 and GAID 2025.
        </LegalP>
      </LegalSection>

      {/* 2. SCOPE */}
      <LegalSection id="section-2" title="2. Scope of This Privacy Policy">
        <LegalP>
          2.1 This Privacy Policy applies to all personal data A-Shopper collects and processes when
          you:
        </LegalP>
        <LegalList
          items={[
            'Visit, browse, or use the A-Shopper website or mobile application (Android and iOS);',
            'Register for an Account or undergo KYC/Vendor verification;',
            'Place or receive an Order, booking, rental, or service engagement through the Platform;',
            'Communicate with A-Shopper or other Users through any Platform channel;',
            'Subscribe to marketing communications or participate in promotions or surveys;',
            "Access A-Shopper's APIs as a developer or technical integration partner;",
            'Interact with A-Shopper through social media, events, or offline channels; or',
            'Browse as a Guest User without a registered Account.',
          ]}
        />
        <LegalP>
          2.2 This Policy applies to all User categories: Buyers, Vendors, Sellers, Service
          Providers, Renters, Resellers, API Users, and Guest Users — worldwide.
        </LegalP>
        <LegalP>
          2.3 This Policy forms part of our Terms &amp; Conditions and should be read alongside our
          Cookie Policy and any role-specific data processing notices applicable to your User type.
        </LegalP>
        <LegalP>
          2.4 This Policy does not govern the data practices of third-party websites, applications,
          or services linked to or integrated with our Platform.
        </LegalP>
      </LegalSection>

      {/* 3. PERSONAL DATA WE COLLECT */}
      <LegalSection id="section-3" title="3. Personal Data We Collect">
        <LegalP>
          3.1 We collect personal data you provide directly, data generated automatically through
          Platform use, and data received from trusted third-party sources:
        </LegalP>
        <LegalTable
          headers={['Category', 'Data Points Collected', 'Purpose']}
          rows={[
            [
              'Identity Data',
              "Full legal name, username, date of birth, gender, nationality, government-issued ID number (NIN, passport, driver's licence)",
              'Account creation, KYC verification, fraud prevention',
            ],
            [
              'Contact Data',
              'Email address, phone number(s), delivery address(es), billing address. Next of kin contact collected on voluntary, explicit-consent basis only for account recovery in exceptional circumstances.',
              'Order fulfilment, communications, customer support, account recovery',
            ],
            [
              'Financial Data',
              'Bank account details, tokenised card data (full card numbers are NEVER stored), payment history, wallet balance, escrow records',
              'Payment processing, refunds, escrow management, AML compliance',
            ],
            [
              'Transaction Data',
              'Order history, items purchased, cart data, rental records, service bookings, returns, cancellations, dispute records',
              'Order management, analytics, dispute resolution',
            ],
            [
              'KYC & Compliance Data',
              "Government ID documents, CAC certificate, Tax Identification Number (TIN under the Nigeria Tax Act), proof of address, directors' details, PEP and sanctions screening results",
              'KYC verification, AML compliance under ML(PP)A 2022, vendor onboarding',
            ],
            [
              'Technical Data',
              'IP address, device ID, browser type and version, operating system, screen resolution, login timestamps, session tokens, referral URLs. MAC addresses are NOT collected.',
              'Platform security, fraud detection, session management',
            ],
            [
              'Usage & Behavioural Data',
              'Pages visited, search queries, click patterns, product views, session duration, feature usage, A/B test group',
              'Personalisation, analytics, product improvement, marketing optimisation',
            ],
            [
              'Communications Data',
              'Platform messages between Users, support tickets, live chat transcripts, email correspondence with A-Shopper, review content',
              'Customer support, dispute resolution, compliance monitoring, fraud detection',
            ],
            [
              'Profile Data',
              'Username, profile photo, business description, reviews posted, ratings, wishlist items, vendor performance score',
              'Platform experience, trust and safety, vendor quality management',
            ],
            [
              'Location Data',
              'Approximate location from IP address; precise GPS location only where User explicitly grants device permission',
              'Logistics optimisation, localised listings, fraud detection, regulatory compliance',
            ],
            [
              'Marketing & Preference Data',
              'Newsletter opt-in/out status, communication preferences, promotional campaign engagement, product category interests',
              'Targeted marketing (consent-based only), personalisation, campaign measurement',
            ],
            [
              'Vendor & Business Data',
              'Business name, RC number, TIN (Nigeria Tax Act), product catalogue, pricing data, inventory levels, fulfilment metrics, payout bank details',
              'Vendor onboarding, quality assurance, payment disbursement, regulatory compliance',
            ],
          ]}
        />
        <LegalH3>3.2 Special Category Data (NDPA 2023 s.30)</LegalH3>
        <LegalP>
          A-Shopper does not intentionally or routinely collect special category personal data. Where
          such data is collected in exceptional circumstances, explicit written consent is obtained
          in advance and a specific processing notice is provided.
        </LegalP>
        <LegalH3>3.3 Data About Third Parties</LegalH3>
        <LegalP>
          If you provide personal data about another person, you confirm that: (a) you have the legal
          right to share their data; (b) you have informed them about this Privacy Policy; and (c)
          they are aware their data will be processed as described herein.
        </LegalP>
        <LegalH3>3.4 Mandatory vs. Optional Data</LegalH3>
        <LegalP>
          Fields marked mandatory during registration, KYC, or checkout are required for service
          delivery. Optional fields are clearly labelled.
        </LegalP>
      </LegalSection>

      {/* 4. HOW WE COLLECT */}
      <LegalSection id="section-4" title="4. How We Collect Your Personal Data">
        <LegalH3>4.1 Data You Provide Directly</LegalH3>
        <LegalList
          items={[
            'Registration and Account creation: name, email, password, phone number;',
            'KYC verification submissions: identity documents, proof of address, business documents;',
            'Order placement and checkout: delivery address, payment details;',
            'Vendor onboarding: business registration, TIN (Nigeria Tax Act), bank account details;',
            'Customer support interactions: tickets, live chat, email enquiries; and',
            'Reviews, ratings, Platform feedback, and marketing preference settings.',
          ]}
        />
        <LegalH3>4.2 Data Collected Automatically</LegalH3>
        <LegalList
          items={[
            'Cookies, web beacons, pixel tags, session storage, and similar tracking technologies — see Section 12 and GAID 2025 Art.19;',
            'Server access logs: IP address, access time, pages requested, HTTP referrer;',
            'Device and browser information: device model, OS version, browser type, screen resolution; and',
            'Location data: approximate location from IP address; precise GPS location only with explicit User device permission. MAC addresses are not collected.',
          ]}
        />
        <LegalH3>4.3 Data Received from Third Parties</LegalH3>
        <LegalList
          items={[
            'Identity verification and KYC results from NDPC-accredited verification partners;',
            'Payment and fraud risk signals from CBN-licensed payment processors;',
            'Business registration data from the Corporate Affairs Commission (CAC);',
            'Sanctions, PEP, and adverse media screening results from accredited compliance providers; and',
            'Social media profile data where you register or log in via a social platform.',
          ]}
        />
      </LegalSection>

      {/* 5. LAWFUL BASIS */}
      <LegalSection id="section-5" title="5. Lawful Basis for Processing Your Personal Data">
        <LegalP>
          5.1 A-Shopper processes your personal data only where a valid and documented lawful basis
          exists under NDPA 2023 s.25. The six lawful bases under s.25(1) are: (a) Consent; (b)
          Contract; (c) Legal obligation; (d) Vital interests; (e) Public task/interest; (f)
          Legitimate interests:
        </LegalP>
        <LegalTable
          headers={['Processing Activity', 'Lawful Basis', 'NDPA 2023 s.25(1)', 'Notes']}
          rows={[
            [
              'Account registration & management',
              'Contract',
              's.25(1)(b)',
              'Necessary to provide Platform services to User',
            ],
            [
              'Order processing & fulfilment',
              'Contract',
              's.25(1)(b)',
              'Required to execute Transactions between parties',
            ],
            [
              'Payment processing & escrow',
              'Contract + Legal obligation',
              's.25(1)(b)+(c)',
              'Compliance with Nigeria Tax Act & CBN regulations',
            ],
            [
              'KYC & identity verification',
              'Legal obligation',
              's.25(1)(c)',
              'ML(PP)A 2022 & CBN KYC Regulations under CBN Act 2007',
            ],
            [
              'AML & sanctions screening',
              'Legal obligation',
              's.25(1)(c)',
              'ML(PP)A 2022 s.9 — mandatory record-keeping & screening',
            ],
            [
              'Fraud prevention & platform security',
              'Legitimate interest',
              's.25(1)(f)',
              'LIA conducted & documented by DPO; available on request',
            ],
            [
              'Customer support & dispute resolution',
              'Contract',
              's.25(1)(b)',
              'Service delivery obligation to registered Users',
            ],
            [
              'Legal compliance & court/regulatory orders',
              'Legal obligation',
              's.25(1)(c)',
              'NDPA 2023, GAID 2025, judicial & regulatory requirements',
            ],
            [
              'Tax record-keeping & financial reporting',
              'Legal obligation',
              's.25(1)(c)',
              'Nigeria Tax Act — mandatory tax record-keeping obligation',
            ],
            [
              'Platform analytics & performance improvement',
              'Legitimate interest',
              's.25(1)(f)',
              'Improving services; LIA conducted, pseudonymised where possible',
            ],
            [
              'AI/ML model training',
              'Legitimate interest',
              's.25(1)(f)',
              'Strictly anonymised data only; no personal data linkage',
            ],
            [
              'Personalised product recommendations',
              'Legitimate interest / Consent',
              's.25(1)(a)/(f)',
              'Consent obtained where profiling has significant legal effect per s.37',
            ],
            [
              'Marketing & promotional communications',
              'Consent',
              's.25(1)(a)',
              'Explicit opt-in required; freely & independently withdrawable',
            ],
            [
              'Special/sensitive category data',
              'Explicit consent',
              's.25(1) / s.30',
              'Only where strictly necessary with prior explicit consent',
            ],
            [
              "Minors' data (emergency processing only)",
              'Legal obligation',
              's.25(1)(c)',
              'Child Rights Act 2003 + NDPA s.31 — immediate closure & deletion',
            ],
          ]}
        />
        <LegalH3>5.2 Legitimate Interest Assessments (LIA)</LegalH3>
        <LegalP>
          Where s.25(1)(f) is applied, A-Shopper has conducted a formal, documented LIA confirming
          our interests do not override your fundamental rights. LIA records are available on written
          request from the DPO.
        </LegalP>
        <LegalH3>5.3 Consent Standards (NDPA 2023 s.25(1)(a))</LegalH3>
        <LegalP>
          Consent is freely given, specific, informed, and obtained through a clear affirmative
          action. It is never bundled as a condition of unrelated service and may be withdrawn at any
          time per s.35.
        </LegalP>
        <LegalH3>5.4 Purpose Limitation (NDPA 2023 s.24(1)(b))</LegalH3>
        <LegalP>
          Data will not be used for a new, incompatible purpose without fresh notification and,
          where required, a fresh lawful basis.
        </LegalP>
        <LegalH3>5.5 AI/ML Systems</LegalH3>
        <LegalP>
          AI/ML training is conducted exclusively on genuinely anonymised or aggregated datasets that
          cannot be re-linked to any individual.
        </LegalP>
      </LegalSection>

      {/* 6. HOW WE USE */}
      <LegalSection id="section-6" title="6. How We Use Your Personal Data">
        <LegalH3>6.1 Platform Operation &amp; Service Delivery</LegalH3>
        <LegalList
          items={[
            'Creating, managing, and securing your Account; processing Orders, refunds, and returns;',
            'Managing escrow, rental deposits, and fund disbursements;',
            'Facilitating communications between Buyers, Vendors, and Service Providers; and',
            'Sending essential transactional communications: Order confirmations, receipts, delivery updates.',
          ]}
        />
        <LegalH3>6.2 Security, Fraud Prevention &amp; Legal Compliance</LegalH3>
        <LegalList
          items={[
            'KYC verification, AML/PEP/sanctions screening per ML(PP)A 2022;',
            'Detecting, preventing, and investigating fraud and Platform abuse; and',
            'Maintaining audit trails and compliance records as required by Nigerian law.',
          ]}
        />
        <LegalH3>6.3 Platform Improvement, Research &amp; Analytics</LegalH3>
        <LegalList
          items={[
            'Analysing usage patterns, developing new features, A/B testing, and Platform optimisation; and',
            'Training AI/ML systems using strictly anonymised and aggregated data only.',
          ]}
        />
        <LegalH3>6.4 Marketing, Personalisation &amp; Recommendations (Consent-Based Only)</LegalH3>
        <LegalList
          items={[
            'Sending promotional communications only with your explicit opt-in consent under NDPA 2023 s.25(1)(a);',
            'Delivering personalised product recommendations; and',
            'Running targeted advertising through approved digital marketing channels.',
          ]}
        />
        <LegalH3>6.5 Trust, Safety &amp; Quality Assurance</LegalH3>
        <LegalList
          items={[
            'Monitoring Vendor performance, facilitating the review and rating system; and',
            'Enforcing our Terms & Conditions and Platform policies.',
          ]}
        />
      </LegalSection>

      {/* 7. DATA SHARING */}
      <LegalSection id="section-7" title="7. Data Sharing, Disclosure &amp; Third-Party Processors">
        <LegalTable
          headers={['Recipient', 'Data Shared', 'Purpose & Safeguard']}
          rows={[
            [
              'Vendors & Service Providers',
              'Name, delivery address, order details, contact info',
              'Order fulfilment — minimum data only; DPA in place',
            ],
            [
              'Payment Processors (CBN-licensed)',
              'Tokenised card data, transaction amount, billing address',
              'Payment processing — PCI-DSS certified; DPA and SCCs where applicable',
            ],
            [
              'Logistics & Delivery Partners',
              'Name, address, order ID, contact number',
              'Delivery fulfilment — DPA in place; no secondary use permitted',
            ],
            [
              'KYC / Identity Verification Partners',
              'Identity documents, biographic data',
              'KYC/AML legal obligation — NDPC-accredited processors; DPA in place',
            ],
            [
              'Cloud & IT Infrastructure Providers',
              'Encrypted platform data',
              'Platform hosting — DPA; encryption at rest and in transit',
            ],
            [
              'Analytics Providers',
              'Pseudonymised or aggregated usage data',
              'Platform improvement — anonymisation applied; no personal data sold',
            ],
            [
              'Marketing & Advertising Platforms',
              'Hashed email, device IDs (consent-based only)',
              'Targeted advertising — consent obtained before sharing; data minimisation applied',
            ],
            [
              'Legal & Regulatory Authorities (NFIU, EFCC, NDPC, CBN)',
              'Data as required by law or court order',
              'ML(PP)A 2022, NDPA 2023, judicial orders — legal obligation; User notified where permitted',
            ],
            [
              'Fraud Prevention Services',
              'Transaction data, behavioural signals',
              'Fraud prevention — legitimate interest; accredited partners with DPA only',
            ],
            [
              'Business Acquirers / Successors',
              'Account and transaction data on verified business transfer',
              'Business continuity — Users notified in advance; data protection obligations preserved',
            ],
          ]}
        />
        <LegalH3>7.1 Data Processing Agreements (DPAs)</LegalH3>
        <LegalP>
          All third-party processors are contractually required to: (a) process data only on
          A-Shopper&apos;s documented instructions; (b) implement appropriate technical and
          organisational security measures; (c) assist in fulfilling data subject rights; and (d)
          comply with NDPA 2023 and GAID 2025.
        </LegalP>
        <LegalH3>7.2 Sub-Processors</LegalH3>
        <LegalP>
          A current list of key sub-processors is available on request from{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>
          .
        </LegalP>
        <LegalH3>7.3 Legal Disclosures</LegalH3>
        <LegalP>
          A-Shopper may disclose personal data to the NFIU, EFCC, NDPC, CBN, FCCPC, or other
          authorities without prior User notice where legally compelled.
        </LegalP>
      </LegalSection>

      {/* 8. INTERNATIONAL TRANSFERS */}
      <LegalSection id="section-8" title="8. International Data Transfers">
        <LegalP>
          8.1 Personal data may be transferred to and processed in countries outside Nigeria. For all
          international transfers, A-Shopper ensures at least one safeguard under NDPA 2023 s.41–43
          and GAID 2025 Art.46:
        </LegalP>
        <LegalList
          items={[
            'Transfer to countries formally recognised by the NDPC as providing adequate data protection (NDPA 2023 s.42);',
            'Standard Contractual Clauses (SCCs) or equivalent data transfer agreements (NDPA 2023 s.43);',
            'Binding contractual obligations on the receiving entity requiring NDPA 2023-equivalent standards; or',
            'Your explicit, informed consent to the specific transfer after being informed of the possible risks.',
          ]}
        />
        <LegalP>
          8.2 BCRs are not relied upon as the NDPC has not yet established a BCR approval framework.
          For EU/EEA transfers, EU-approved SCCs are applied.
        </LegalP>
        <LegalP>
          8.3 Transfer risk assessments are conducted before transferring data to jurisdictions with
          potentially lower protection than NDPA 2023. Details of safeguards are available on written
          request from{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>
          .
        </LegalP>
      </LegalSection>

      {/* 9. RETENTION */}
      <LegalSection id="section-9" title="9. Data Retention: How Long We Keep Your Data">
        <LegalP>
          9.1 A-Shopper retains personal data only as long as necessary to fulfil the purposes for
          which it was collected, in compliance with NDPA 2023 s.24(1)(d) and GAID 2025 Art.49:
        </LegalP>
        <LegalTable
          headers={['Data Category', 'Retention Period', 'Legal / Regulatory Basis']}
          rows={[
            [
              'Account & Profile Data',
              'Duration of account + 2 years post-closure',
              'Legitimate interest — post-closure dispute resolution (NDPA 2023 s.25(1)(f)); GAID 2025 Art.49(3)',
            ],
            [
              'Transaction & Order Records',
              '6 years from last transaction',
              'NDPR Implementation Framework s.8.2 — 6 years after last transaction in contractual agreement',
            ],
            [
              'Financial & Payment Records',
              '7 years from transaction date',
              'Nigeria Tax Act — mandatory tax record-keeping; CBN regulations under CBN Act 2007',
            ],
            [
              'Communications Data',
              '3 years from last interaction',
              'NDPR Implementation Framework s.8.2 — within limitation window for contractual claims',
            ],
            [
              'KYC / Identity Documents',
              '5 years after account closure or last transaction',
              'ML(PP)A 2022 s.9 — mandatory minimum AML record-keeping period',
            ],
            [
              'AML Screening & SAR Records',
              '5 years from date of report or relevant transaction',
              'ML(PP)A 2022 s.9 — mandatory minimum under Nigerian AML law',
            ],
            [
              'Marketing Preference Records',
              'Until consent withdrawn or account closed',
              'Consent-based per NDPA 2023 s.25(1)(a); s.35 right to withdraw at any time',
            ],
            [
              'Cookie & Tracking Data',
              '13 months rolling',
              'GAID 2025 Art.19 — data minimisation principle; international best practice',
            ],
            [
              'Technical / Server Logs',
              '12 months rolling',
              'Legitimate interest — security & fraud prevention (NDPA 2023 s.25(1)(f))',
            ],
            [
              'Legal & Dispute Records',
              'Duration of matter + 6 years post-resolution',
              'Nigeria Limitation Act — 6-year limitation period for contractual claims',
            ],
            [
              'Regulatory Correspondence',
              '10 years from date of correspondence',
              'NDPC, CBN, FCCPC record-keeping requirements under applicable regulations',
            ],
            [
              'Backup & Archive Data',
              'Up to 12 months beyond primary retention',
              'Business continuity — encrypted at rest; no active processing during archive period',
            ],
          ]}
        />
        <LegalH3>9.2 Secure Deletion</LegalH3>
        <LegalP>
          Upon expiry of the applicable retention period, personal data is securely and irreversibly
          deleted or anonymised per GAID 2025 Art.49(3).
        </LegalP>
        <LegalH3>9.3 Account Closure</LegalH3>
        <LegalP>
          All personal data not subject to a legal retention obligation will be securely deleted
          within 30 days of Account closure. You may request a copy of your data before closure using
          your Right to Data Portability (s.38).
        </LegalP>
      </LegalSection>

      {/* 10. SECURITY */}
      <LegalSection id="section-10" title="10. Data Security: How We Protect Your Information">
        <LegalP>
          10.1 A-Shopper implements a comprehensive, multi-layered security framework in compliance
          with NDPA 2023 s.39:
        </LegalP>
        <LegalH3>10.1a Technical Security Measures</LegalH3>
        <LegalList
          items={[
            'AES-256 encryption at rest; TLS 1.2/1.3 encryption in transit;',
            'Full tokenisation of payment card data — complete card details are never stored;',
            'Multi-factor authentication (MFA) for all User Accounts and administrative access;',
            'Role-based, least-privilege access controls; WAF, intrusion detection, and DDoS mitigation; and',
            'Regular vulnerability scanning, independent penetration testing, and secure SDLC.',
          ]}
        />
        <LegalH3>10.1b Organisational Security Measures</LegalH3>
        <LegalList
          items={[
            'Mandatory annual data protection and information security training for all staff;',
            'Binding confidentiality and non-disclosure agreements for all employees and contractors; and',
            'Annual DCPMI Compliance Audit Return (CAR) filed with the NDPC; DPIAs for all new high-risk processing.',
          ]}
        />
        <LegalH3>10.2 Personal Data Breach Response (NDPA 2023 s.40)</LegalH3>
        <LegalList
          items={[
            'Immediately contain and investigate the breach upon discovery;',
            'Notify the NDPC within 72 hours of becoming aware of a breach likely to pose risk to individuals\' rights and freedoms — as confirmed by NDPA 2023 s.40 and GAID 2025;',
            'Notify affected Users without undue delay where the breach is likely to result in high risk to their rights; and',
            'Document the breach and all remediation actions in our breach register; conduct post-incident review.',
          ]}
        />
        <LegalP>
          10.3 If you suspect unauthorised access to your Account, change your password immediately
          and contact{' '}
          <a href="mailto:support@a-shopper.com" className="text-primary hover:underline">
            support@a-shopper.com
          </a>
          .
        </LegalP>
      </LegalSection>

      {/* 11. RIGHTS */}
      <LegalSection id="section-11" title="11. Your Data Protection Rights">
        <LegalP>
          11.1 Under NDPA 2023 and GAID 2025, you have the following rights. All section references
          are verified against the gazetted NDPA 2023 text:
        </LegalP>
        <LegalTable
          headers={['Your Right', 'What It Means', 'How to Exercise']}
          rows={[
            [
              'Right to be Informed (NDPA 2023 s.34(1)(a); s.27)',
              'Receive clear, concise, transparent information about how your data is processed — purposes, lawful basis, retention period, recipients, and any automated decision-making — before or at the point of collection.',
              'Provided in this Privacy Policy; contact: privacy@a-shopper.com',
            ],
            [
              'Right of Access (NDPA 2023 s.34(1)(b))',
              'Obtain a copy of personal data A-Shopper holds about you in a commonly used electronic format. Response within 30 days. Free of charge except where request is manifestly unfounded, excessive, or repetitive.',
              "Email: privacy@a-shopper.com — Subject: 'Data Access Request'",
            ],
            [
              'Right to Rectification (NDPA 2023 s.34(1)(c))',
              'Correct any inaccurate, outdated, incomplete, or misleading personal data without undue delay. Where error is caused by A-Shopper, correction is at no cost to you.',
              'Account Settings or email: privacy@a-shopper.com',
            ],
            [
              'Right to Erasure (NDPA 2023 s.34(1)(d))',
              'Request deletion of personal data where: it is no longer necessary for original purpose; consent is withdrawn; or processing was unlawful. Subject to legal retention obligations under Nigeria Tax Act, ML(PP)A 2022 etc.',
              "Email: privacy@a-shopper.com — Subject: 'Erasure Request'",
            ],
            [
              'Right to Restrict Processing (NDPA 2023 s.34(1)(v))',
              'Request temporary suspension of processing — for example while accuracy is contested, processing was unlawful, or you need data for a legal claim.',
              "Email: privacy@a-shopper.com — Subject: 'Restriction Request'",
            ],
            [
              'Right to Data Portability (NDPA 2023 s.38)',
              'Receive personal data in a structured, commonly used, machine-readable format and have it transmitted to another controller. Applies only where processing is based on consent (s.25(1)(a)) or contract (s.25(1)(b)).',
              "Email: privacy@a-shopper.com — Subject: 'Portability Request'",
            ],
            [
              'Right to Object (NDPA 2023 s.36)',
              'Object to processing based on legitimate interest (s.25(1)(f)). Processing must stop unless A-Shopper demonstrates compelling grounds. Right to object to direct marketing is absolute; no override permitted.',
              'Account Settings > Privacy or email: privacy@a-shopper.com',
            ],
            [
              'Rights re. Automated Decisions (NDPA 2023 s.37)',
              'Not be subject to solely automated decisions producing significant legal or similar effects. Request human review, express your view, and challenge incorrect automated decisions.',
              "Email: privacy@a-shopper.com — Subject: 'Automated Decision Review'",
            ],
            [
              'Right to Withdraw Consent (NDPA 2023 s.35)',
              'Withdraw consent for any consent-based processing at any time, as easily as consent was given, without detriment. A-Shopper will cease processing within 10 business days. Does not affect prior lawful processing.',
              'Account Settings > Communications Preferences or email us',
            ],
            [
              'Right to Complain (NDPA 2023 s.34; s.46)',
              'Lodge a complaint with the NDPC where you believe your rights have been violated — after first raising with A-Shopper.',
              'www.ndpc.gov.ng | complaints@ndpc.gov.ng',
            ],
          ]}
        />
        <LegalH3>11.2 How to Submit a Request</LegalH3>
        <LegalP>
          Email{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>{' '}
          with your full name, Account email, the right you wish to exercise, and sufficient detail
          to identify the relevant data. Acknowledged within 5 business days; full response within 30
          days.
        </LegalP>
        <LegalH3>11.3 Consent Withdrawal (NDPA 2023 s.35)</LegalH3>
        <LegalP>
          A-Shopper will cease the relevant processing within 10 business days of a valid withdrawal.
          The withdrawal mechanism is as easy as the consent mechanism.
        </LegalP>
        <LegalH3>11.4 Complaints (NDPA 2023 s.46)</LegalH3>
        <LegalP>
          If dissatisfied with A-Shopper&apos;s response, lodge a complaint with the NDPC at
          www.ndpc.gov.ng | complaints@ndpc.gov.ng. EU/EEA Users may also complain to their local
          supervisory authority. UK Users may contact the ICO at www.ico.org.uk.
        </LegalP>
      </LegalSection>

      {/* 12. COOKIES */}
      <LegalSection id="section-12" title="12. Cookies &amp; Tracking Technologies">
        <LegalP>
          12.1 A-Shopper uses cookies and similar tracking technologies in compliance with GAID 2025
          Art.19:
        </LegalP>
        <LegalTable
          headers={['Cookie Type', 'Purpose', 'Disableable?', 'Duration']}
          rows={[
            [
              'Strictly Necessary',
              'Session management, login authentication, shopping cart, security tokens, CSRF protection. Core to Platform function.',
              'No. Platform cannot function without these.',
              'Session / up to 24hrs',
            ],
            [
              'Performance & Analytics',
              'Usage patterns, page visits, error tracking, load times. Data aggregated and anonymised; no individual profiling.',
              'Yes, via consent banner',
              'Up to 13 months',
            ],
            [
              'Functional / Preference',
              "Language, currency, layout preferences, recently viewed items, 'remember me' login settings.",
              'Yes, via consent banner',
              'Up to 12 months',
            ],
            [
              'Marketing & Targeting',
              'Relevant advertising, campaign tracking, retargeting. Set ONLY with prior explicit consent per GAID 2025 Art.19.',
              'Yes; withdraw consent anytime',
              'Up to 90 days',
            ],
            [
              'Third-Party / Social',
              'Set by providers (e.g. Google Analytics, Meta Pixel). A-Shopper does not control these cookies.',
              'Yes, via browser settings or consent banner',
              'Varies by provider',
            ],
          ]}
        />
        <LegalH3>12.2 Cookie Consent (GAID 2025 Art.19)</LegalH3>
        <LegalP>
          On first visit, a clear consent banner is presented. Only Strictly Necessary cookies are
          set before consent. No pre-ticked boxes. You may Accept All, Reject Non-Essential, or
          Customise by category.
        </LegalP>
        <LegalP>
          12.3 Cookie preferences can be updated anytime through Account Settings &gt; Cookie
          Preferences, your browser settings, or by emailing{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>
          . Full Cookie Policy:{' '}
          <a
            href="/cookies"
            className="text-primary hover:underline"
          >
            https://www.a-shopper.com/cookies
          </a>
          .
        </LegalP>
      </LegalSection>

      {/* 13. CHILDREN */}
      <LegalSection id="section-13" title="13. Children&apos;s Privacy">
        <LegalP>
          13.1 The Platform is designed exclusively for adults. Registration constitutes confirmation
          that you are 18 or older. Under NDPA 2023 s.31 and the Child Rights Act 2003, a child is
          any person under 18.
        </LegalP>
        <LegalP>
          13.2 A-Shopper does not maintain a parental consent mechanism for underage registration.
          The Platform is exclusively for adults.
        </LegalP>
        <LegalH3>13.3 Discovery of Underage User</LegalH3>
        <LegalP>
          If A-Shopper discovers a child&apos;s data has been collected, A-Shopper will immediately,
          under NDPA 2023 s.31 and the Child Rights Act 2003: (a) suspend the Account; (b)
          permanently delete all associated personal data within 30 days; (c) reverse or cancel
          associated Transactions where possible; and (d) notify the parent or guardian where contact
          details are available.
        </LegalP>
        <LegalP>
          13.4 Parents or guardians who believe a child has registered must contact{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>{' '}
          immediately.
        </LegalP>
      </LegalSection>

      {/* 14. MARKETING */}
      <LegalSection id="section-14" title="14. Marketing Communications &amp; Your Choices">
        <LegalP>
          14.1 With your freely given, specific consent under NDPA 2023 s.25(1)(a), A-Shopper may
          send promotional communications via email, in-Platform notifications, push notifications,
          and SMS. Marketing consent is never bundled with consent for other Platform services.
        </LegalP>
        <LegalH3>14.2 Opting Out</LegalH3>
        <LegalP>
          Withdraw marketing consent at any time by: (a) clicking &apos;Unsubscribe&apos; in any
          marketing email; (b) updating Account Settings &gt; Communications Preferences; or (c)
          emailing{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>{' '}
          with subject &apos;Marketing Opt-Out&apos;. Effective within 10 business days per s.35.
        </LegalP>
        <LegalH3>14.3 Right to Object to Direct Marketing (NDPA 2023 s.36(3))</LegalH3>
        <LegalP>
          Where you object to direct marketing processing, A-Shopper shall immediately cease all
          direct marketing — this right is absolute and no override is permitted under NDPA 2023.
        </LegalP>
        <LegalP>
          14.4 Essential transactional communications — Order confirmations, receipts, security
          alerts — are sent under contract basis (s.25(1)(b)) and cannot be deactivated while your
          Account is active.
        </LegalP>
      </LegalSection>

      {/* 15. AUTOMATED DECISION-MAKING */}
      <LegalSection id="section-15" title="15. Automated Decision-Making &amp; Profiling">
        <LegalP>
          15.1 A-Shopper uses automated processing for the following activities, disclosed in advance
          per NDPA 2023 s.27(g): (a) Fraud detection — real-time transaction risk scoring — may
          result in Transaction blocking; (b) KYC &amp; identity screening — may result in Account
          restriction; (c) Vendor performance scoring — affects Vendor ranking; (d) Product
          recommendations — no significant legal effect; and (e) Payment risk assessment — may result
          in payment delay.
        </LegalP>
        <LegalH3>15.2 Your Rights Under NDPA 2023 s.37</LegalH3>
        <LegalP>
          Where automated processing produces a significant legal effect on you, you have the right
          to: (a) be informed; (b) request human review; (c) express your view; and (d) challenge and
          request reversal of incorrect decisions.
        </LegalP>
        <LegalP>
          15.3 Request human review by emailing{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>{' '}
          with subject &apos;Automated Decision Review&apos;. We will respond within 15 business
          days.
        </LegalP>
      </LegalSection>

      {/* 16. DPIAs */}
      <LegalSection id="section-16" title="16. Data Protection Impact Assessments (DPIAs)">
        <LegalP>
          16.1 A-Shopper conducts DPIAs before commencing any processing likely to result in a high
          risk to the rights and freedoms of individuals, as required by NDPA 2023 s.28 and GAID
          2025. DPIA trigger circumstances include:
        </LegalP>
        <LegalTable
          headers={['DPIA Trigger (NDPA 2023 s.28; GAID 2025)', 'Examples Relevant to A-Shopper']}
          rows={[
            [
              'Large-scale profiling of individuals',
              'Behavioural analytics, personalised recommendation engine, targeted advertising profiling',
            ],
            [
              'Processing of sensitive/special category data at scale',
              'Biometric identity verification, health data, ethnic/political data',
            ],
            [
              'Systematic monitoring of publicly accessible areas',
              'Geolocation tracking, platform behavioural surveillance',
            ],
            [
              'Automated decision-making with significant legal effects',
              'Fraud scoring leading to account suspension, payment risk scoring',
            ],
            [
              "Children's data processing",
              'Any processing where minors may be identified or present',
            ],
            [
              'Novel technologies or new processing purposes',
              'AI/ML system deployment, new data sharing partnerships, new analytics tools',
            ],
            [
              'Cross-border data transfers to high-risk jurisdictions',
              'Transfers to countries with materially lower data protection standards',
            ],
          ]}
        />
        <LegalP>
          16.2 Where a DPIA reveals unmitigated high risk, A-Shopper will consult the NDPC before
          commencing the relevant processing. DPIA records are maintained by the DPO and available to
          the NDPC on request.
        </LegalP>
      </LegalSection>

      {/* 17. VENDOR DATA */}
      <LegalSection id="section-17" title="17. Vendor, Seller &amp; Business User Data">
        <LegalP>
          17.1 In addition to general User data, A-Shopper processes the following for Vendors,
          Sellers, and Service Providers: business registration details including TIN (Nigeria Tax
          Act); director and beneficial ownership information; product catalogue data; performance
          metrics; financial disbursement details; and compliance records.
        </LegalP>
        <LegalP>
          17.2 Vendor performance data — ratings, review scores, fulfilment metrics — may be visible
          to Buyers as part of A-Shopper&apos;s trust and transparency framework. Individual Vendor
          data is never sold or shared for third-party commercial purposes.
        </LegalP>
      </LegalSection>

      {/* 18. USER-TO-USER */}
      <LegalSection id="section-18" title="18. User-to-User Communications &amp; Data">
        <LegalP>
          18.1 Platform messaging may be accessed by A-Shopper strictly for: (a) dispute resolution;
          (b) fraud detection and Platform security; (c) policy enforcement; and (d) legal
          compliance. A-Shopper does not conduct blanket real-time monitoring.
        </LegalP>
        <LegalP>
          18.2 You must not use Platform messaging to share third-party personal data without
          consent, arrange off-Platform Transactions, harass Users, or conduct any unlawful activity.
        </LegalP>
      </LegalSection>

      {/* 19. THIRD-PARTY LINKS */}
      <LegalSection id="section-19" title="19. Third-Party Links, Integrations &amp; Social Media">
        <LegalP>
          19.1 The Platform may link to third-party websites and services. A-Shopper is not
          responsible for their privacy practices. Please review the privacy policy of any
          third-party platform before providing personal data.
        </LegalP>
        <LegalH3>19.2 Social Login</LegalH3>
        <LegalP>
          If you register or log in using Google, Facebook, or Apple, that platform may share profile
          data with A-Shopper, governed by your settings on that platform. A-Shopper uses social
          login data only for Account creation and authentication.
        </LegalP>
      </LegalSection>

      {/* 20. INTERNATIONAL USERS */}
      <LegalSection id="section-20" title="20. International Users &amp; Cross-Jurisdictional Rights">
        <LegalP>
          20.1 A-Shopper serves Users globally and is committed to upholding data protection rights
          regardless of User location.
        </LegalP>
        <LegalH3>20.2 EU &amp; EEA Users — EU GDPR</LegalH3>
        <LegalP>
          EU GDPR applies if you are located in the EU/EEA. Additional rights include: right to
          object (Article 21); right re. automated decisions (Article 22); right to complain to your
          local supervisory authority. Cross-border transfers to Nigeria are protected by EU-approved
          SCCs.
        </LegalP>
        <LegalH3>20.3 United Kingdom Users — UK GDPR</LegalH3>
        <LegalP>
          UK GDPR applies if located in the UK. Transfers use International Data Transfer Agreements
          (IDTAs) or UK-approved SCCs. Complaints: ICO — www.ico.org.uk.
        </LegalP>
        <LegalH3>20.4 California, United States Users — CCPA/CPRA</LegalH3>
        <LegalP>
          CCPA/CPRA rights include: Right to Know; Right to Delete; Right to Correct; Right to
          Opt-Out of data sale (A-Shopper does not sell personal data); and Right to
          Non-Discrimination.
        </LegalP>
        <LegalH3>20.5 South Africa — POPIA</LegalH3>
        <LegalP>
          South African data subjects&apos; POPIA rights — including the right to object and the
          right to erasure — are honoured as supplementary protections.
        </LegalP>
        <LegalH3>20.6 Other Jurisdictions</LegalH3>
        <LegalP>
          Where other national frameworks apply — including Kenya&apos;s Data Protection Act 2019 or
          Canada&apos;s PIPEDA — A-Shopper uses reasonable endeavours to honour those rights as
          supplementary protections. The primary governing law for all A-Shopper processing is the
          Nigeria Data Protection Act 2023.
        </LegalP>
      </LegalSection>

      {/* 21. DATA MINIMISATION */}
      <LegalSection id="section-21" title="21. Data Minimisation, Purpose Limitation &amp; Accuracy">
        <LegalH3>21.1 Data Minimisation (NDPA 2023 s.24(1)(c))</LegalH3>
        <LegalP>
          A-Shopper collects only personal data that is adequate, relevant, and strictly limited to
          what is necessary for the documented purpose.
        </LegalP>
        <LegalH3>21.2 Purpose Limitation (NDPA 2023 s.24(1)(b))</LegalH3>
        <LegalP>
          Data will not be used for a new, incompatible purpose without: (a) notification to you; (b)
          a fresh lawful basis where required; and (c) opportunity to object.
        </LegalP>
        <LegalH3>21.3 Accuracy (NDPA 2023 s.24(1)(e))</LegalH3>
        <LegalP>
          A-Shopper takes reasonable steps to ensure personal data is accurate, complete, not
          misleading, and kept up to date. Corrections can be made through Account Settings or by
          contacting{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>
          .
        </LegalP>
      </LegalSection>

      {/* 22. PENALTIES */}
      <LegalSection id="section-22" title="22. Penalties for Non-Compliance">
        <LegalP>
          22.1 A-Shopper takes its obligations under NDPA 2023 seriously. The penalties for
          non-compliance are substantial, and we are committed to full compliance to protect both our
          Users and our organisation. The regulatory penalty framework under NDPA 2023 s.49 is:
        </LegalP>
        <LegalTable
          headers={['Violation Type', 'Penalty', 'Legal Basis']}
          rows={[
            [
              'Non-compliance by a DCPMI (Data Controller of Major Importance)',
              'Fine of NGN 10,000,000 OR 2% of annual gross revenue (whichever is greater)',
              'NDPA 2023 s.49',
            ],
            [
              'Non-compliance by other Data Controllers / Processors',
              'Fine of NGN 2,000,000 OR 2% of annual gross revenue (whichever is greater)',
              'NDPA 2023 s.49',
            ],
            [
              'Failure to comply with NDPC enforcement orders',
              'Additional fine of up to NGN 10,000,000 and/or up to 1 year imprisonment for principal officers',
              'NDPA 2023 s.48',
            ],
            [
              'Civil damages to affected Data Subject',
              'Compensation payable to the Data Subject for harm caused by violation',
              'NDPA 2023 s.51',
            ],
            [
              'Account for profits from violation',
              'A-Shopper required to account for and surrender profits derived from unlawful processing',
              'NDPA 2023 s.48',
            ],
            [
              'Referral to other regulators',
              'NDPC may refer matter to CBN, FCCPC, EFCC, or other authorities for sector-specific sanction',
              'NDPA 2023 s.48',
            ],
          ]}
        />
        <LegalP>
          22.2 In addition to regulatory penalties, any Data Subject who suffers harm as a result of
          A-Shopper&apos;s violation of the NDPA 2023 may seek civil damages through the courts under
          NDPA 2023 s.51.
        </LegalP>
        <LegalP>
          22.3 A-Shopper maintains appropriate compliance and governance frameworks, undergoes annual
          DCPMI audits, and cooperates fully with all NDPC investigations and enforcement activities
          to minimise the risk of violation and protect the interests of our Users.
        </LegalP>
      </LegalSection>

      {/* 23. WHISTLEBLOWER */}
      <LegalSection id="section-23" title="23. Whistleblower &amp; Internal Reporting">
        <LegalP>
          23.1 A-Shopper maintains an internal data protection reporting mechanism consistent with
          GAID 2025 and the obligations of a DCPMI. Any employee, contractor, vendor, or User who
          becomes aware of a potential data protection violation, data breach, or unlawful processing
          activity is encouraged to report it promptly.
        </LegalP>
        <LegalH3>23.2 Internal Reporting Channels</LegalH3>
        <LegalList
          items={[
            <>
              <strong>Data Protection Officer (DPO):</strong>{' '}
              <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
                privacy@a-shopper.com
              </a>{' '}
              — The primary internal channel for all data protection concerns, including suspected
              breaches, unlawful processing, or non-compliance with this Policy or NDPA 2023.
            </>,
            <>
              <strong>Compliance Team:</strong>{' '}
              <a href="mailto:compliance@a-shopper.com" className="text-primary hover:underline">
                compliance@a-shopper.com
              </a>{' '}
              — For AML, KYC, and regulatory compliance concerns including suspected violations of
              ML(PP)A 2022 or CBN regulations.
            </>,
            <>
              <strong>Legal Team:</strong>{' '}
              <a href="mailto:legal@a-shopper.com" className="text-primary hover:underline">
                legal@a-shopper.com
              </a>{' '}
              — For concerns involving potential legal exposure, regulatory proceedings, or court
              orders.
            </>,
          ]}
        />
        <LegalH3>23.3 Non-Retaliation Commitment</LegalH3>
        <LegalP>
          A-Shopper prohibits retaliation against any person who, in good faith, reports a suspected
          data protection concern through any internal or external channel. Reports made in good
          faith will not result in any adverse employment or contractual consequences.
        </LegalP>
        <LegalH3>23.4 External Reporting</LegalH3>
        <LegalP>
          Nothing in this Policy prevents any person from reporting a data protection concern
          directly to the NDPC (complaints@ndpc.gov.ng), the NFIU, the EFCC, or any other applicable
          regulatory authority, without first raising the matter internally.
        </LegalP>
        <LegalH3>23.5 Report Handling</LegalH3>
        <LegalP>
          All internal reports are logged, investigated promptly by the DPO, and escalated to senior
          management and the NDPC where required under NDPA 2023 s.40 (breach notification).
          Reporters will receive an acknowledgement within 5 business days and a substantive response
          within 30 days.
        </LegalP>
      </LegalSection>

      {/* 24. ACCESSIBILITY */}
      <LegalSection id="section-24" title="24. Accessibility">
        <LegalP>
          24.1 A-Shopper is committed to ensuring that this Privacy Policy and all data protection
          information is accessible to all Users, including those with disabilities, in compliance
          with the spirit of the NDPA 2023 and international accessibility standards.
        </LegalP>
        <LegalH3>24.2 Alternative Formats</LegalH3>
        <LegalP>
          This Privacy Policy is available in the following alternative formats upon written request
          to{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>
          :
        </LegalP>
        <LegalList
          items={[
            'Large print (minimum 18pt font);',
            'Plain text format (for screen reader compatibility);',
            'Audio description (read-aloud version available on request); and',
            'Simplified plain language summary — a shorter, jargon-free version of this Policy for Users who require easier-to-read materials.',
          ]}
        />
        <LegalH3>24.3 Language</LegalH3>
        <LegalP>
          The governing version of this Privacy Policy is in English. Where A-Shopper publishes
          translations into other languages for User convenience, the English version shall prevail
          in the event of any inconsistency.
        </LegalP>
        <LegalH3>24.4 Digital Accessibility</LegalH3>
        <LegalP>
          The A-Shopper Platform is designed with accessibility in mind, including: compliance with
          WCAG 2.1 Level AA guidelines; screen reader compatibility; keyboard navigation support; and
          adequate colour contrast ratios. Users who experience accessibility barriers on the
          Platform should contact{' '}
          <a href="mailto:support@a-shopper.com" className="text-primary hover:underline">
            support@a-shopper.com
          </a>
          .
        </LegalP>
        <LegalH3>24.5 Child-Friendly Notice</LegalH3>
        <LegalP>
          As A-Shopper is an adults-only Platform, a child-friendly version of this Privacy Policy is
          not published. In the event a minor is discovered to have accessed the Platform, the
          procedure in Section 13.3 applies immediately.
        </LegalP>
      </LegalSection>

      {/* 25. CHANGES */}
      <LegalSection id="section-25" title="25. Changes to This Privacy Policy">
        <LegalP>
          25.1 A-Shopper may update this Privacy Policy at any time to reflect changes in applicable
          law, regulatory guidance, technological practices, or Platform operations.
        </LegalP>
        <LegalH3>25.2 Material Changes</LegalH3>
        <LegalP>
          Material changes — including new data categories, new third-party sharing, or changes
          reducing your rights — will be communicated to all registered Users by email and/or
          in-Platform notification at least 14 days before the new Effective Date. Fresh consent will
          be obtained where required.
        </LegalP>
        <LegalH3>25.3 Minor Changes</LegalH3>
        <LegalP>
          Minor changes — such as clarifications or formatting corrections — will be published on the
          Platform with a revised version number and &apos;Last Updated&apos; date, without
          individual notification.
        </LegalP>
        <LegalP>
          25.4 Continued use of the Platform after the Effective Date of a revised Policy constitutes
          acceptance of the updated version. If you do not agree with material changes, you may close
          your Account before the Effective Date.
        </LegalP>
        <LegalP>
          25.5 Previous versions are archived and available on written request from{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>
          .
        </LegalP>
      </LegalSection>

      {/* 26. CONTACT & COMPLAINTS */}
      <LegalSection id="section-26" title="26. Contact Us &amp; How to Make a Complaint">
        <LegalP>
          26.1 For all questions, rights requests, accessibility requests, or concerns about this
          Policy or A-Shopper&apos;s data practices, contact our Data Protection Officer at{' '}
          <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
            privacy@a-shopper.com
          </a>
          . All contact details are consolidated in Section 1.
        </LegalP>
        <LegalH3>26.2 Response Commitment</LegalH3>
        <LegalP>
          All privacy requests acknowledged within 5 business days. Full response within 30 days.
          Complex requests: up to 90 days total with notification within the initial 30-day window.
        </LegalP>
        <LegalH3>26.3 Complaints Procedure</LegalH3>
        <LegalList
          items={[
            <>
              First, raise the concern directly with A-Shopper at{' '}
              <a href="mailto:privacy@a-shopper.com" className="text-primary hover:underline">
                privacy@a-shopper.com
              </a>
              ;
            </>,
            'If unresolved within 30 days, escalate to the NDPC under NDPA 2023 s.46 at www.ndpc.gov.ng | complaints@ndpc.gov.ng;',
            'EU/EEA Users may additionally complain to their local supervisory authority;',
            'UK Users may additionally contact the ICO at www.ico.org.uk.',
          ]}
        />
        <LegalH3>26.4 Regulatory Registration</LegalH3>
        <LegalP>
          A-Shopper is registered with the NDPC as a DCPMI under NDPA 2023 s.44 and fully cooperates
          with all NDPC investigations, audits, and enforcement activities.
        </LegalP>
      </LegalSection>

      <LegalSection title="Legal Verification Statement">
        <LegalP>
          LEGAL VERIFICATION STATEMENT (v1.0): This Privacy Policy has been prepared by A-Shopper
          Global Limited with all statutory references verified against the following legislation as
          gazetted and enacted: Nigeria Data Protection Act 2023 (NDPA 2023) — Federal Republic of
          Nigeria Official Gazette, 1 July 2023, No. 37; NDPA General Application and Implementation
          Directive 2025 (GAID 2025) — effective 19 September 2025; Money Laundering (Prevention
          &amp; Prohibition) Act 2022 (ML(PP)A 2022) s.9; Nigeria Tax Act (effective 1 January 2025);
          CBN Act 2007; CAMA 2020; FCCPA 2018; Terrorism (Prevention &amp; Prohibition) Act 2022;
          Cybercrimes Act 2015 (as amended 2024); Child Rights Act 2003; Nigeria Limitation Act.
          VERIFIED NDPA 2023 SECTION MAPPING: s.24 = Data principles; s.25 = Lawful bases (a–f); s.27
          = Information to data subject; s.28 = DPIA; s.30 = Sensitive data; s.31 = Children; s.32 =
          DPO designation; s.34 = Data subject rights (access s.34(1)(b), rectification s.34(1)(c),
          erasure s.34(1)(d), restriction s.34(1)(v)); s.35 = Consent withdrawal; s.36 = Right to
          object (s.36(3) = direct marketing); s.37 = Automated decisions; s.38 = Data portability;
          s.39 = Security obligations; s.40 = Breach notification (72-hour standard confirmed in
          gazetted text); s.41–43 = International transfers; s.44 = DCPMI registration; s.46 =
          Complaints to NDPC; s.48 = Enforcement orders; s.49 = Offences and penalties; s.51 = Civil
          remedies. BCRs excluded: NDPC has not established a BCR approval framework under NDPA 2023.
        </LegalP>
        <LegalP className="pt-4 text-xs">
          © 2026 A-Shopper Global Limited. All Rights Reserved. Governed by the laws of the Federal
          Republic of Nigeria. | Effective: 1 June 2026 |{' '}
          <a
            href="https://www.a-shopper.com/privacy"
            className="text-primary hover:underline"
          >
            https://www.a-shopper.com/privacy
          </a>
        </LegalP>
      </LegalSection>
    </div>
  );
}
