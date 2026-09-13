import Link from 'next/link';
import {
  LegalH3,
  LegalList,
  LegalP,
  LegalSection,
  LegalTable,
  LegalToc,
} from '@/components/legal/legal-primitives';

const tocItems = [
  { href: '#section-1', label: '1. About A-Shopper' },
  { href: '#section-2', label: '2. Marketplace Intermediary' },
  { href: '#section-3', label: '3. Definitions' },
  { href: '#section-4', label: '4. Document Hierarchy' },
  { href: '#section-5', label: '5. Electronic Agreement' },
  { href: '#section-6', label: '6. User Types' },
  { href: '#section-7', label: '7. Account & KYC' },
  { href: '#section-8', label: '8. AML Compliance' },
  { href: '#section-9', label: '9. Sanctions & Export' },
  { href: '#section-10', label: '10. Vendor Obligations' },
  { href: '#section-11', label: '11. Vendor Performance' },
  { href: '#section-12', label: '12. Service Providers' },
  { href: '#section-13', label: '13. Rental Services' },
  { href: '#section-14', label: '14. Bulk & Wholesale' },
  { href: '#section-15', label: '15. Prohibited Items' },
  { href: '#section-16', label: '16. User Reporting' },
  { href: '#section-17', label: '17. Non-Circumvention' },
  { href: '#section-18', label: '18. Intellectual Property' },
  { href: '#section-19', label: '19. Promoted Listings' },
  { href: '#section-20', label: '20. Consumer Protection' },
  { href: '#section-21', label: '21. Payments & Fees' },
  { href: '#section-22', label: '22. Logistics & Delivery' },
  { href: '#section-23', label: '23. Data Privacy' },
  { href: '#section-24', label: '24. Platform Security' },
  { href: '#section-25', label: '25. Feedback' },
  { href: '#section-26', label: '26. Reviews & Ratings' },
  { href: '#section-27', label: '27. User Disputes' },
  { href: '#section-28', label: '28. API Terms' },
  { href: '#section-29', label: '29. Beta Features' },
  { href: '#section-30', label: '30. Limitation of Liability' },
  { href: '#section-31', label: '31. User Indemnity' },
  { href: '#section-32', label: '32. Availability' },
  { href: '#section-33', label: '33. Third-Party Services' },
  { href: '#section-34', label: '34. Suspension & Termination' },
  { href: '#section-35', label: '35. Dormant Accounts' },
  { href: '#section-36', label: '36. Press & Endorsements' },
  { href: '#section-37', label: '37. Accessibility' },
  { href: '#section-38', label: '38. Assignment' },
  { href: '#section-39', label: '39. Force Majeure' },
  { href: '#section-40', label: '40. Modification' },
  { href: '#section-41', label: '41. Notices' },
  { href: '#section-42', label: '42. Governing Law' },
  { href: '#section-43', label: '43. Platform Disputes' },
  { href: '#section-44', label: '44. Survival' },
  { href: '#section-45', label: '45. Severability' },
  { href: '#section-46', label: '46. Waiver' },
  { href: '#section-47', label: '47. Entire Agreement' },
  { href: '#section-48', label: '48. Contact Information' },
];

export function TermsContent() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 pb-20 sm:px-6 lg:px-8">
      <LegalToc items={tocItems} />

      <LegalP className="text-xs">
        Last Updated: January 2026 · Version 1.0 · Language: English (Governing) · Jurisdiction:
        Federal Republic of Nigeria (Global Application)
      </LegalP>

      <LegalP>
        KINDLY READ THESE TERMS &amp; CONDITIONS CAREFULLY BEFORE USING THE A-SHOPPER PLATFORM. BY
        ACCESSING, REGISTERING, OR USING THE PLATFORM IN ANY CAPACITY INCLUDING AS A BUYER, SELLER,
        SERVICE PROVIDER, RENTER, DEVELOPER, OR GUEST; YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS.
        IF YOU DO NOT AGREE, YOU MUST NOT ACCESS OR USE THE PLATFORM.
      </LegalP>

      {/* 1 */}
      <LegalSection id="section-1" title="1. About A-Shopper Global Limited and the Platform">
        <LegalP>
          1.1 A-Shopper Global Limited (&quot;A-Shopper&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;) is a company incorporated under the laws of the Federal Republic of
          Nigeria, operating a dynamic engineering tools e-commerce marketplace connecting Nigerian,
          African and Global businesses with verified suppliers, manufacturers, and distributors,
          powered by proprietary technology, data systems, and logistics infrastructure.
        </LegalP>
        <LegalP>
          1.2 The Platform supports the following commerce models:
        </LegalP>
        <LegalList
          items={[
            <>
              <strong className="text-foreground">Business-to-Business (B2B):</strong> businesses
              procuring engineering tools and equipment from verified vendors;
            </>,
            <>
              <strong className="text-foreground">Business-to-Consumer (B2C):</strong> businesses
              selling directly to individual end-users;
            </>,
            <>
              <strong className="text-foreground">Consumer-to-Consumer (C2C):</strong> individuals
              buying and selling tools and equipment among themselves;
            </>,
            <>
              <strong className="text-foreground">Service-to-Service:</strong> professionals and
              businesses exchanging engineering-related services; and
            </>,
            <>
              <strong className="text-foreground">Rental Commerce:</strong> listing, renting, and
              managing engineering tools, equipment, and assets.
            </>,
          ]}
        />
        <LegalP>
          1.3 These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the
          A-Shopper website, mobile application, APIs, and all related services (collectively, the
          &quot;Platform&quot;).
        </LegalP>
        <LegalP>
          1.4 By registering, accessing, or using the Platform in any capacity, you enter into a
          legally binding agreement with A-Shopper Global Limited. These Terms should be read
          alongside our{' '}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          , Cookie Policy, and any role-specific terms applicable to your User type.
        </LegalP>
      </LegalSection>

      {/* 2 */}
      <LegalSection id="section-2" title="2. Platform as Marketplace Intermediary">
        <LegalP>
          2.1 A-Shopper operates as a technology marketplace intermediary, providing the
          infrastructure, systems, and tools that enable Users to connect, transact, and do
          business. A-Shopper is NOT a party to any transaction between Users unless explicitly
          stated otherwise.
        </LegalP>
        <LegalP>2.2 A-Shopper does NOT:</LegalP>
        <LegalList
          items={[
            'Own, manufacture, supply, stock, or warehouse any product listed on the Platform;',
            'Employ, engage, or supervise any Service Provider on the Platform;',
            'Own or maintain any equipment, tool, or asset listed for rental;',
            'Make representations or warranties about the quality, safety, legality, or suitability of any Listing; or',
            "Act as a commercial agent, reseller, or distributor of any Vendor's products.",
          ]}
        />
        <LegalP>
          2.3 Each Transaction is a direct contract between the Buyer and the Vendor, Service
          Provider, or Renter. A-Shopper facilitates the Transaction but is not contractually
          responsible for its performance, quality, or outcome.
        </LegalP>
        <LegalP>
          2.4 A-Shopper&apos;s involvement is limited to: (a) providing Platform infrastructure; (b)
          facilitating payment and escrow; (c) providing dispute facilitation; and (d) enforcing
          Platform policies.
        </LegalP>
        <LegalP>
          2.5 Nothing in these Terms creates any agency, partnership, joint venture, employment, or
          franchise relationship between A-Shopper and any User.
        </LegalP>
      </LegalSection>

      {/* 3 */}
      <LegalSection id="section-3" title="3. Definition and Interpretation">
        <LegalP>3.1 In these Terms, the following definitions apply:</LegalP>
        <LegalList
          items={[
            <>&quot;Account&quot; means a registered user account on the Platform;</>,
            <>
              &quot;AML&quot; means Anti-Money Laundering obligations under the Money Laundering
              (Prevention and Prohibition) Act 2022;
            </>,
            <>
              &quot;Buyer&quot; means any User purchasing products, services, or rentals through the
              Platform;
            </>,
            <>
              &quot;Chargeback&quot; means a reversal of a payment transaction initiated by a
              User&apos;s bank or card issuer;
            </>,
            <>
              &quot;Commission&quot; means the fee charged by A-Shopper on completed Transactions, as
              published on the Platform;
            </>,
            <>
              &quot;Content&quot; means all text, images, listings, descriptions, data, reviews,
              ratings, and material uploaded to the Platform;
            </>,
            <>
              &quot;Cookie Policy&quot; means A-Shopper&apos;s policy governing cookies and tracking
              technologies, available on the Platform;
            </>,
            <>
              &quot;Dispute&quot; means any disagreement, claim, or complaint arising between Users
              or between a User and A-Shopper;
            </>,
            <>
              &quot;Escrow&quot; means the secure holding of Transaction funds by A-Shopper pending
              fulfilment and release conditions;
            </>,
            <>
              &quot;Intellectual Property&quot; means all patents, copyrights, trademarks, trade
              secrets, software, designs, and proprietary technology owned by A-Shopper;
            </>,
            <>
              &quot;KYC&quot; means Know Your Customer identity verification procedures required
              under applicable law;
            </>,
            <>
              &quot;Listing&quot; means a product, service, or rental published on the Platform by a
              Vendor or Service Provider;
            </>,
            <>
              &quot;Order&quot; means a confirmed purchase, service booking, or rental agreement
              initiated through the Platform;
            </>,
            <>
              &quot;Platform&quot; means the A-Shopper website, mobile app, APIs, and all associated
              digital services;
            </>,
            <>
              &quot;Prohibited Items&quot; means products, services, or content that are illegal,
              restricted, or prohibited under these Terms or applicable law;
            </>,
            <>
              &quot;Promoted Listing&quot; means a Listing for which the Vendor has paid for enhanced
              visibility or placement on the Platform;
            </>,
            <>
              &quot;Rental&quot; means the temporary use of a tool, equipment, or asset listed on the
              Platform for a rental fee;
            </>,
            <>
              &quot;Sanctions&quot; means trade, financial, or economic sanctions administered by any
              applicable authority including the UN, US OFAC, EU, or Nigerian authorities;
            </>,
            <>
              &quot;Service Provider&quot; means a User offering engineering-related professional
              services on the Platform;
            </>,
            <>
              &quot;Transaction&quot; means any completed or attempted purchase, service engagement,
              or rental through the Platform;
            </>,
            <>
              &quot;User&quot; means any individual or entity accessing or using the Platform;
            </>,
            <>
              &quot;Vendor&quot; or &quot;Seller&quot; means a verified supplier, manufacturer,
              distributor, or individual listing products on the Platform; and
            </>,
            <>
              &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot; means A-Shopper Global Limited.
            </>,
          ]}
        />
        <LegalP>
          3.2 References to any statute include all amendments and re-enactments. &quot;Including&quot;
          is not limiting. Headings are for convenience only. In case of conflict between translated
          versions of these Terms, the English version governs.
        </LegalP>
      </LegalSection>

      {/* 4 */}
      <LegalSection id="section-4" title="4. Document Hierarchy and Incorporated Terms">
        <LegalP>
          4.1 These Terms form the master agreement between you and A-Shopper. The following
          additional documents are incorporated into these Terms by reference and together form the
          complete agreement between the Parties:
        </LegalP>
        <LegalList
          items={[
            <>
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              : governing the collection, use, and protection of personal data;
            </>,
            <>
              Cookie Policy: governing the use of cookies and tracking technologies;
            </>,
            'Vendor Agreement: additional terms applicable to Vendors and Sellers;',
            'Service Provider Terms: additional terms applicable to Service Providers;',
            'Rental Terms: additional terms applicable to rental transactions;',
            'Escrow Policy: governing the holding and release of Transaction funds;',
            'Refund Policy: governing refund eligibility, timelines, and processes; and',
            'Bulk Transaction Dispute Policy: governing disputes arising from bulk and wholesale orders.',
          ]}
        />
        <LegalH3>4.2 Document Hierarchy</LegalH3>
        <LegalP>
          In the event of a conflict or inconsistency between these Terms and any incorporated
          document, the following order of precedence applies:
        </LegalP>
        <LegalList
          items={[
            '(i) These Terms and Conditions (highest authority);',
            '(ii) Role-specific terms (Vendor Agreement, Service Provider Terms, Rental Terms);',
            '(iii) Operational policies (Escrow Policy, Refund Policy, Bulk Transaction Dispute Policy); and',
            <>
              (iv){' '}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{' '}
              and Cookie Policy.
            </>,
          ]}
        />
        <LegalP>
          4.3 All incorporated documents are published on the Platform at{' '}
          <a
            href="https://www.a-shopper.com"
            className="text-primary hover:underline"
          >
            www.a-shopper.com
          </a>{' '}
          and may be updated from time to time in accordance with Clause 41.
        </LegalP>
      </LegalSection>

      {/* 5 */}
      <LegalSection id="section-5" title="5. Electronic Agreement and Consent">
        <LegalP>
          5.1 By clicking &quot;I Agree&quot;, ticking an acceptance checkbox, completing
          registration, or accessing or using the Platform in any way, you confirm that you have
          read, understood, and agreed to be legally bound by these Terms.
        </LegalP>
        <LegalP>
          5.2 This electronic acceptance constitutes a valid and binding electronic signature under
          the Cybercrimes (Prohibition, Prevention, etc.) Act 2015 and all applicable Nigerian
          electronic transaction law.
        </LegalP>
        <LegalP>
          5.3 You consent to receiving communications from A-Shopper electronically, including by
          email, in-Platform notification, and push notification, and agree that such communications
          satisfy any legal requirement for written notice.
        </LegalP>
        <LegalP>
          5.4 A-Shopper may record your acceptance of these Terms, including IP address, timestamp,
          and device information, as evidence of your agreement.
        </LegalP>
      </LegalSection>

      {/* 6 */}
      <LegalSection id="section-6" title="6. User Types and Platform Access">
        <LegalP>6.1 The Platform serves the following categories of Users:</LegalP>
        <LegalTable
          headers={['User Type', 'Description', 'Commerce Model']}
          rows={[
            [
              'Buyer',
              'Individual or business purchasing engineering tools or services',
              'B2C / B2B / C2C',
            ],
            [
              'Seller / Vendor',
              'Verified supplier, manufacturer, or distributor listing products',
              'B2B / B2C / C2C',
            ],
            [
              'Service Provider',
              'Professional or business offering engineering-related services',
              'Service-to-Service',
            ],
            [
              'Renter',
              'Individual or business listing or renting tools, equipment, or assets',
              'Rental Commerce',
            ],
            [
              'Reseller',
              'Intermediary purchasing in bulk for onward sale to end users',
              'B2B / B2C',
            ],
            [
              'Guest User',
              'Visitor browsing the Platform without a registered account',
              'View Only',
            ],
          ]}
        />
        <LegalP>
          6.2 Each User type is subject to these Terms and any additional role-specific terms as
          published on the Platform from time to time.
        </LegalP>
        <LegalP>
          6.3 A-Shopper reserves the right to classify, reclassify, or limit User access at its sole
          discretion.
        </LegalP>
      </LegalSection>

      {/* 7 */}
      <LegalSection
        id="section-7"
        title="7. Account Registration, Eligibility and KYC"
      >
        <LegalP>
          7.1 To access the full features of the Platform, you must register for an Account. By
          registering, you confirm that:
        </LegalP>
        <LegalList
          items={[
            'a. You are at least 18 years of age and have the legal capacity to enter into a binding contract;',
            'b. You are registering on your own behalf or are duly authorised to bind a legal entity;',
            'c. All information provided is true, accurate, current, and complete; and',
            'd. You will promptly update your Account information to keep it current.',
          ]}
        />
        <LegalH3>7.2 Minors</LegalH3>
        <LegalP>
          The Platform is strictly not intended for persons under the age of 18. If A-Shopper becomes
          aware that a minor has registered, the Account will be immediately suspended and all
          associated Transactions reversed where possible. Parents or guardians who become aware of
          minor usage must notify A-Shopper at{' '}
          <a href="mailto:support@ashopper.com" className="text-primary hover:underline">
            support@ashopper.com
          </a>{' '}
          immediately.
        </LegalP>
        <LegalH3>7.3 KYC Verification</LegalH3>
        <LegalP>
          A-Shopper reserves the right, and in certain cases is legally required, to conduct identity
          and business verification (KYC) before activating full Platform access. You agree to
          provide documents including: government-issued photo identification; proof of address;
          business registration documents; and any additional documentation required for AML
          compliance.
        </LegalP>
        <LegalP>
          7.4 Failure to complete KYC within a reasonable timeframe may result in Account suspension
          or limitation of Platform features.
        </LegalP>
        <LegalP>
          7.5 You are solely responsible for maintaining the confidentiality of your Account
          credentials. Notify A-Shopper immediately of any unauthorised use.
        </LegalP>
        <LegalP>
          7.6 You may not create multiple Accounts without A-Shopper&apos;s prior written consent.
        </LegalP>
      </LegalSection>

      {/* 8 */}
      <LegalSection
        id="section-8"
        title="8. Anti-Money Laundering (AML) and Financial Crime Compliance"
      >
        <LegalP>
          8.1 By using the Platform, you represent and warrant that: (a) you are not a Politically
          Exposed Person (PEP), sanctioned individual, or entity on any Nigerian, UN, US OFAC, or EU
          sanctions list; (b) all funds used are from legitimate and lawful sources; (c) you are not
          using the Platform to launder money, finance terrorism, or facilitate any other financial
          crime; and (d) all Transactions reflect genuine commercial activity.
        </LegalP>
        <LegalP>
          8.2 A-Shopper reserves the right to: freeze or delay Transactions pending AML
          investigation; request documentation to verify source of funds; report suspicious
          transactions to the Nigerian Financial Intelligence Unit (NFIU) without prior notice; and
          terminate Accounts associated with financial crime.
        </LegalP>
        <LegalP>
          8.3 A-Shopper is not liable for any loss arising from the freezing, withholding, or
          reporting of funds where financial crime is reasonably suspected.
        </LegalP>
        <LegalP>
          8.4 Transactions above amounts specified by the CBN or NFIU guidelines may trigger
          mandatory enhanced due diligence and reporting obligations.
        </LegalP>
      </LegalSection>

      {/* 9 */}
      <LegalSection id="section-9" title="9. Sanctions and Export Controls Compliance">
        <LegalP>
          9.1 You must not use the Platform if you are: (a) located in or subject to comprehensive
          sanctions; (b) listed on any Nigerian, UN, US, or EU sanctions or restricted parties list;
          or (c) acting on behalf of any sanctioned entity.
        </LegalP>
        <LegalP>
          9.2 The export or re-export of any engineering tool, equipment, or technology purchased
          through the Platform may be subject to Nigerian and international export control laws.
          Buyers are solely responsible for obtaining required export or import licences.
        </LegalP>
        <LegalP>
          9.3 A-Shopper reserves the right to decline, block, or reverse any Transaction that may
          violate applicable sanctions or export control laws, without liability.
        </LegalP>
      </LegalSection>

      {/* 10 */}
      <LegalSection id="section-10" title="10. Vendor and Seller Obligations">
        <LegalP>
          10.1 To list products or services, Vendors must complete A-Shopper&apos;s Vendor
          Verification process and maintain: accurate and non-misleading Listings; all required
          licences and regulatory approvals; sufficient stock to fulfil Orders; compliance with
          applicable product safety standards; and timely responses within A-Shopper&apos;s
          stipulated timeframes.
        </LegalP>
        <LegalH3>10.2 Product Standards Compliance</LegalH3>
        <LegalP>
          Vendors must ensure compliance with: Standards Organisation of Nigeria (SON) certification
          requirements; NAFDAC requirements where applicable; NESREA environmental standards; and all
          applicable international product safety standards for the relevant product category.
        </LegalP>
        <LegalP>
          10.3 Vendors warrant all listed products are genuine, not counterfeit, not stolen, legally
          sourced, and compliant with all applicable laws. Counterfeit goods will result in immediate
          Account termination and referral to relevant authorities.
        </LegalP>
        <LegalP>
          10.4 Vendors must honour confirmed Orders. Unilateral cancellations without cause and
          proper notice may attract platform penalties.
        </LegalP>
        <LegalH3>10.5 Product Recalls</LegalH3>
        <LegalP>
          If a product listed on the Platform is subject to a safety recall, the Vendor must
          immediately notify A-Shopper and assist in contacting affected Buyers.
        </LegalP>
      </LegalSection>

      {/* 11 */}
      <LegalSection id="section-11" title="11. Vendor Performance Standards">
        <LegalP>
          11.1 All Vendors on the Platform must meet the following minimum performance standards on
          a rolling 90-day basis:
        </LegalP>
        <LegalTable
          headers={['Metric', 'Minimum Standard', 'Consequence of Breach']}
          rows={[
            [
              'Seller Rating',
              'Minimum 3.5 out of 5.0 (rolling 90 days)',
              'Warning, then suspension',
            ],
            [
              'Order Fulfilment Rate',
              'Minimum 90% of confirmed Orders fulfilled',
              'Account review, suspension',
            ],
            [
              'Response Time',
              'Within 24 hours of Buyer enquiry',
              'Performance warning',
            ],
            [
              'Dispute Resolution Rate',
              'Maximum 10% of Transactions disputed',
              'Probationary status',
            ],
            [
              'Cancellation Rate',
              'Maximum 5% of confirmed Orders cancelled',
              'Warning, then restriction',
            ],
          ]}
        />
        <LegalP>
          11.2 A-Shopper will notify Vendors of performance issues and provide a reasonable period to
          improve before taking action, except in cases of severe or repeated breaches.
        </LegalP>
        <LegalP>
          11.3 Vendors placed on probationary status may have their Listings restricted, promoted
          listings paused, or Account features limited until performance improves.
        </LegalP>
        <LegalP>
          11.4 Repeated failure to meet minimum performance standards may result in permanent Account
          suspension and removal from the Platform.
        </LegalP>
        <LegalP>
          11.5 A-Shopper reserves the right to revise performance thresholds with reasonable notice
          to Vendors.
        </LegalP>
      </LegalSection>

      {/* 12 */}
      <LegalSection id="section-12" title="12. Service Provider Obligations">
        <LegalP>
          12.1 Service Providers must: be qualified and competent to deliver the services offered;
          provide accurate descriptions, pricing, timelines, and qualification details; maintain all
          professional licences and regulatory approvals; deliver services with reasonable skill,
          care, and diligence; and obtain and maintain adequate professional indemnity or liability
          insurance.
        </LegalP>
        <LegalP>
          12.2 A-Shopper is a marketplace intermediary and is not liable for the quality, safety,
          timeliness, or outcome of any service delivered through the Platform.
        </LegalP>
      </LegalSection>

      {/* 13 */}
      <LegalSection id="section-13" title="13. Rental Services">
        <LegalP>
          13.1 Renters must treat all rented items with reasonable care and return them in the same
          condition, subject to fair wear and tear.
        </LegalP>
        <LegalP>
          13.2 Owners listing items warrant that all items are safe, functional, and accurately
          described.
        </LegalP>
        <LegalP>
          13.3 Rental fees, periods, deposits, and return conditions are as confirmed at the time of
          booking.
        </LegalP>
        <LegalP>
          13.4 Renters are fully liable for any damage, loss, or theft beyond fair wear and tear.
          A-Shopper may facilitate cost recovery from deposited funds or through legal means.
        </LegalP>
        <LegalP>
          13.5 Security deposits for high-value rentals will be held in escrow and released upon
          satisfactory return.
        </LegalP>
        <LegalP>
          13.6 A-Shopper reserves the right to impose additional verification or insurance
          requirements for high-value rentals.
        </LegalP>
      </LegalSection>

      {/* 14 */}
      <LegalSection id="section-14" title="14. Bulk and Wholesale Transactions (B2B)">
        <LegalP>
          14.1 Bulk and wholesale Transactions are subject to these additional terms:
        </LegalP>
        <LegalList
          items={[
            'a. Minimum order quantities, bulk pricing, and wholesale rates are subject to Vendor confirmation;',
            'b. Bulk Orders above thresholds set by A-Shopper may require additional KYC or escrow arrangements;',
            "c. Volume discounts must be confirmed in writing through the Platform's Order system;",
            "d. Bulk Order cancellations may attract cancellation fees per the Vendor's stated policy; and",
            "e. Returns on bulk Orders are governed by A-Shopper's Bulk Transaction Dispute Policy.",
          ]}
        />
        <LegalP>
          14.2 A-Shopper is not liable for loss arising from a Vendor&apos;s failure to honour bulk
          pricing commitments made outside the Platform.
        </LegalP>
      </LegalSection>

      {/* 15 */}
      <LegalSection id="section-15" title="15. Prohibited Items, Services and Conduct">
        <LegalH3>15.1 Prohibited Items and Services</LegalH3>
        <LegalList
          items={[
            'Counterfeit, stolen, or unlawfully obtained goods;',
            'Weapons, ammunition, explosives, or dual-use items requiring special export licences;',
            'Hazardous, toxic, or radioactive materials without proper certification;',
            'Pirated software, unlicensed intellectual property, or fraudulent goods;',
            'Items prohibited under Nigerian law or the laws of the destination country; and',
            'Any product or service A-Shopper determines to be inappropriate, dangerous, or harmful.',
          ]}
        />
        <LegalH3>15.2 Prohibited Conduct</LegalH3>
        <LegalList
          items={[
            'Creating false, misleading, or fraudulent Listings or Accounts;',
            'Manipulating or incentivising reviews, ratings, or feedback;',
            'Using the Platform for money laundering, fraud, or any financial crime;',
            "Circumventing A-Shopper's payment system to transact off-Platform;",
            'Harassing, threatening, or abusing other Users or A-Shopper staff;',
            'Uploading malware, viruses, or harmful code to the Platform;',
            'Scraping or extracting Platform data without written authorisation;',
            'Impersonating any person, business, or A-Shopper; and',
            'Using the Platform in any manner that violates applicable law.',
          ]}
        />
      </LegalSection>

      {/* 16 */}
      <LegalSection id="section-16" title="16. User Reporting Mechanism">
        <LegalP>
          16.1 A-Shopper maintains a reporting mechanism to enable Users to report violations,
          prohibited content, counterfeit goods, fraud, and misconduct on the Platform.
        </LegalP>
        <LegalP>16.2 To report a violation, Users may:</LegalP>
        <LegalList
          items={[
            'a. Use the "Report" button available on each Listing and User profile;',
            <>
              b. Submit a report via email to{' '}
              <a href="mailto:report@ashopper.com" className="text-primary hover:underline">
                report@ashopper.com
              </a>
              ; or
            </>,
            <>
              c. Contact A-Shopper&apos;s Customer Support team at{' '}
              <a href="mailto:support@ashopper.com" className="text-primary hover:underline">
                support@ashopper.com
              </a>
              .
            </>,
          ]}
        />
        <LegalP>
          16.3 All reports must include: (a) a description of the alleged violation; (b) the URL or
          Listing ID of the relevant content; (c) the reporter&apos;s contact details; and (d) any
          supporting evidence available.
        </LegalP>
        <LegalP>
          16.4 A-Shopper will acknowledge all reports within 2 business days and will investigate all
          credible reports within 10 business days of receipt.
        </LegalP>
        <LegalP>
          16.5 A-Shopper will take action where a report is substantiated, which may include removing
          the offending Listing, suspending the reported Account, or referring the matter to relevant
          authorities.
        </LegalP>
        <LegalP>
          16.6 A-Shopper will protect the identity of reporters where reasonably practicable.
          Submitting a false or malicious report is a breach of these Terms and may result in Account
          suspension.
        </LegalP>
        <LegalP>
          16.7 By actively encouraging Users to report violations, A-Shopper does not assume a duty
          to identify all violations and is not liable for violations that are not reported to it.
        </LegalP>
      </LegalSection>

      {/* 17 */}
      <LegalSection id="section-17" title="17. Non-Circumvention">
        <LegalP>
          17.1 Users are strictly prohibited from circumventing A-Shopper&apos;s Platform and payment
          systems to conduct Transactions directly off-Platform with other Users they have met
          through the Platform.
        </LegalP>
        <LegalP>
          17.2 You must not: (a) request or provide payment details outside the Platform for
          completing a Transaction initiated on the Platform; (b) arrange delivery in exchange for
          payment made outside the Platform; (c) use the Platform solely to source contacts then
          transact off-Platform to avoid Commission; or (d) encourage any other User to transact
          outside the Platform.
        </LegalP>
        <LegalP>
          17.3 This prohibition applies for twelve (12) months after first contact between two Users
          through the Platform.
        </LegalP>
        <LegalP>
          17.4 Breach of this Clause may result in: immediate Account suspension or termination;
          forfeiture of escrow funds or Account balance; a charge equal to the Commission A-Shopper
          would have earned; and legal action for damages.
        </LegalP>
      </LegalSection>

      {/* 18 */}
      <LegalSection id="section-18" title="18. Intellectual Property Rights">
        <LegalP>
          18.1 All Intellectual Property on the Platform, including the A-Shopper brand, logo,
          trademarks, software, algorithms, platform design, source code, and proprietary processes,
          is owned exclusively by A-Shopper Global Limited.
        </LegalP>
        <LegalP>
          18.2 Users are granted a limited, non-exclusive, non-transferable, revocable licence to
          access and use the Platform solely for its intended purpose. No other rights are granted.
        </LegalP>
        <LegalP>
          18.3 By uploading Content, you grant A-Shopper a worldwide, royalty-free, non-exclusive
          licence to use, reproduce, display, distribute, and adapt such Content for Platform
          operation and promotion.
        </LegalP>
        <LegalP>
          18.4 You warrant that all Content you upload is original, does not infringe any third-party
          rights, and you have the right to grant the above licence.
        </LegalP>
        <LegalH3>18.5 IP Infringement Notice and Takedown</LegalH3>
        <LegalP>
          If you believe any Listing or Content infringes your intellectual property rights, submit a
          takedown notice to{' '}
          <a href="mailto:legal@ashopper.com" className="text-primary hover:underline">
            legal@ashopper.com
          </a>{' '}
          including: your name, contact details, and proof of rights ownership; a description of the
          infringing content and its location; a good faith statement; and a declaration that the
          information is accurate. A-Shopper will investigate within 10 business days.
        </LegalP>
      </LegalSection>

      {/* 19 */}
      <LegalSection id="section-19" title="19. Promoted and Sponsored Listings">
        <LegalP>
          19.1 A-Shopper may offer Vendors the opportunity to purchase enhanced visibility or
          placement for their Listings through Promoted Listings. The following terms apply:
        </LegalP>
        <LegalList
          items={[
            'a. Promoted Listings are clearly identified as such on the Platform with an appropriate label;',
            'b. A-Shopper does not endorse or guarantee the quality of any Promoted Listing by virtue of its promotion;',
            'c. Vendors purchasing Promoted Listings must ensure the promoted content complies with all applicable Listing standards under these Terms;',
            "d. Payment for Promoted Listings is non-refundable unless the promotion was unable to run due to A-Shopper's fault; and",
            'e. A-Shopper reserves the right to reject, remove, or discontinue any Promoted Listing that violates these Terms, without refund.',
          ]}
        />
        <LegalP>
          19.2 A-Shopper does not permit competitors to use Promoted Listings to advertise against
          specific named competitors on the Platform.
        </LegalP>
        <LegalP>
          19.3 Pricing, formats, and availability of Promoted Listings are as published on the
          Platform and may be updated from time to time.
        </LegalP>
        <LegalP>
          19.4 Where a Promoted Listing turns out to be fraudulent, counterfeit, or in breach of
          these Terms, the Vendor is solely liable. A-Shopper&apos;s liability is limited to a refund
          of the promotion fee paid for that specific Listing.
        </LegalP>
      </LegalSection>

      {/* 20 */}
      <LegalSection id="section-20" title="20. Consumer Protection Rights">
        <LegalH3>20.1 Nigerian Consumers</LegalH3>
        <LegalP>
          Under the FCCPA 2018, Nigerian consumers have the right to: accurate and non-misleading
          product information; return defective or incorrectly described goods; safe products meeting
          applicable Nigerian safety standards; fair and transparent pricing without hidden charges;
          and escalate unresolved complaints to the Federal Competition and Consumer Protection
          Commission (FCCPC).
        </LegalP>
        <LegalH3>20.2 International Consumers</LegalH3>
        <LegalP>
          Where the laws of a consumer&apos;s jurisdiction provide mandatory consumer rights,
          including the European Union&apos;s 14-day right of withdrawal, A-Shopper will use
          reasonable endeavours to honour such rights in respect of Transactions where A-Shopper is
          directly involved.
        </LegalP>
        <LegalH3>20.3 Returns and Refunds</LegalH3>
        <LegalP>
          Buyers may return goods that are materially different from the Listing description,
          defective or damaged upon delivery, or not fit for the purpose described. Returns must be
          reported within 48 hours of delivery for standard goods and within 7 days for equipment or
          bulk orders. Refund timelines are governed by A-Shopper&apos;s Refund Policy.
        </LegalP>
        <LegalP>
          20.4 These provisions do not limit any additional statutory rights you may have under
          applicable local law.
        </LegalP>
      </LegalSection>

      {/* 21 */}
      <LegalSection id="section-21" title="21. Payments, Fees and Financial Transactions">
        <LegalP>
          21.1 All Transactions on the Platform must be processed through A-Shopper&apos;s secure
          payment infrastructure. By initiating a Transaction, you authorise A-Shopper to process
          payment on your behalf.
        </LegalP>
        <LegalH3>21.2 Platform Commission</LegalH3>
        <LegalP>
          A-Shopper charges a Commission on completed Transactions. Current rates are published on
          the Platform and may be updated with reasonable advance notice.
        </LegalP>
        <LegalH3>21.3 Additional Fees</LegalH3>
        <LegalP>
          A-Shopper may charge additional fees including listing fees, subscription fees, premium
          placement fees, and transaction processing fees. All applicable fees are published on the
          Platform before a User commits to any paid feature.
        </LegalP>
        <LegalH3>21.4 Pricing</LegalH3>
        <LegalP>
          All prices are in Nigerian Naira (NGN) unless otherwise stated. For international
          Transactions, currency conversion applies at prevailing exchange rates. Currency
          fluctuation risk is borne by the User.
        </LegalP>
        <LegalP>
          21.4.1 Notwithstanding clause 21.4 above, transactions can still be made in designated
          international currency.
        </LegalP>
        <LegalH3>21.5 Payment Methods</LegalH3>
        <LegalP>
          A-Shopper accepts payment through approved methods displayed on the Platform. Third-party
          payment processor terms apply.
        </LegalP>
        <LegalH3>21.6 Split Payment</LegalH3>
        <LegalP>
          A-Shopper may allow for split payments by buyer where the first payment shall be made
          immediately when placing order and subsequently after vendor has confirmed order, before
          delivery takes place.
        </LegalP>
        <LegalH3>21.7 Escrow</LegalH3>
        <LegalP>
          For eligible Transactions, payment is held in escrow until the Buyer confirms satisfactory
          receipt. Funds not claimed within 90 days may be subject to dormancy procedures.
        </LegalP>
        <LegalH3>21.8 Automated Notification for Payment</LegalH3>
        <LegalP>
          A-Shopper shall send an automated notification of payment to buyer via email upon
          completion of transaction by buyer.
        </LegalP>
        <LegalH3>21.9 Chargeback Policy</LegalH3>
        <LegalP>
          If you initiate a chargeback without first following A-Shopper&apos;s Dispute Resolution
          process, A-Shopper may: suspend or terminate your Account; dispute the chargeback using
          Transaction evidence; and recover any reversed funds plus a chargeback administration fee.
        </LegalP>
        <LegalH3>21.10 Taxes</LegalH3>
        <LegalP>
          You are solely responsible for all applicable taxes including VAT, withholding tax, and
          import duties.
        </LegalP>
        <LegalH3>21.11 Fraud</LegalH3>
        <LegalP>
          A-Shopper reserves the right to freeze funds, reverse Transactions, or suspend Accounts
          where fraud is suspected, without prior notice.
        </LegalP>
      </LegalSection>

      {/* 22 */}
      <LegalSection id="section-22" title="22. Logistics, Delivery and Fulfilment">
        <LegalP>
          22.1 Delivery is the primary responsibility of the Vendor except where A-Shopper provides
          integrated logistics services.
        </LegalP>
        <LegalP>
          22.2 Delivery timelines are estimates only. A-Shopper is not liable for delays caused by
          third-party logistics providers, customs, force majeure, or Vendor delays.
        </LegalP>
        <LegalP>
          22.3 Buyers must inspect deliveries upon receipt. Damage, shortage, or discrepancy must be
          reported within 48 hours of delivery.
        </LegalP>
        <LegalP>
          22.4 For international shipments, Buyers are responsible for import duties, customs fees,
          and destination-country regulatory compliance.
        </LegalP>
        <LegalP>
          22.5 Risk of loss passes to the Buyer upon delivery to the designated address, unless
          otherwise agreed in writing.
        </LegalP>
      </LegalSection>

      {/* 23 */}
      <LegalSection id="section-23" title="23. Data Privacy, Cookies and NDPR Compliance">
        <LegalP>
          23.1 By using the Platform, you consent to A-Shopper collecting and processing your
          personal data in accordance with our{' '}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </LegalP>
        <LegalP>
          23.2 A-Shopper will not sell your personal data. Data may be shared with verified
          third-party providers solely for Platform operation.
        </LegalP>
        <LegalH3>23.3 Cookies</LegalH3>
        <LegalP>
          The Platform uses cookies and similar tracking technologies. By using the Platform, you
          consent to our use of cookies as described in the{' '}
          <a
            href="/cookies"
            className="text-primary hover:underline"
          >
            Cookie Policy
          </a>
          . You may manage cookie preferences through your browser or Account settings.
        </LegalP>
        <LegalH3>23.4 Your Rights</LegalH3>
        <LegalP>
          You have the right to access, correct, delete, restrict, or port your personal data.
          Contact:{' '}
          <a href="mailto:privacy@ashopper.com" className="text-primary hover:underline">
            privacy@ashopper.com
          </a>
          .
        </LegalP>
        <LegalP>
          23.5 International Users consent to the transfer of their data to Nigeria for processing
          in accordance with Nigerian data protection law.
        </LegalP>
      </LegalSection>

      {/* 24 */}
      <LegalSection id="section-24" title="24. Platform Security Obligations">
        <LegalH3>24.1 A-Shopper&apos;s Security Commitments</LegalH3>
        <LegalP>
          A-Shopper is committed to maintaining reasonable and industry-appropriate security measures
          to protect the Platform and User data, including:
        </LegalP>
        <LegalList
          items={[
            'a. Encryption of sensitive data, including payment information and personal data, in transit and at rest;',
            'b. Regular security assessments and penetration testing of the Platform;',
            'c. Access controls limiting internal access to User data to authorised personnel only;',
            'd. Incident response procedures to detect, contain, and remediate security breaches; and',
            'e. Prompt notification to affected Users in the event of a data breach affecting their personal data, in compliance with the NDPA 2023.',
          ]}
        />
        <LegalH3>24.2 User Security Responsibilities</LegalH3>
        <LegalP>Users are responsible for:</LegalP>
        <LegalList
          items={[
            'a. Keeping their Account credentials, passwords, and two-factor authentication codes secure and confidential;',
            'b. Using strong, unique passwords and enabling two-factor authentication where available;',
            'c. Ensuring their devices and browsers are updated and protected against malware; and',
            'd. Notifying A-Shopper immediately of any suspected unauthorised access to their Account.',
          ]}
        />
        <LegalP>
          24.3 A-Shopper will never ask for your password via email, phone, or any channel outside
          the Platform&apos;s secure login flow. If you receive such a request, treat it as
          fraudulent and report it immediately to{' '}
          <a href="mailto:support@ashopper.com" className="text-primary hover:underline">
            support@ashopper.com
          </a>
          .
        </LegalP>
        <LegalP>
          24.4 Notwithstanding A-Shopper&apos;s security measures, no digital system is completely
          immune to security threats. A-Shopper does not guarantee absolute security and is not
          liable for losses arising from security incidents that could not have been reasonably
          prevented.
        </LegalP>
      </LegalSection>

      {/* 25 */}
      <LegalSection id="section-25" title="25. User Feedback and Suggestions">
        <LegalP>
          25.1 A-Shopper welcomes feedback, ideas, feature requests, and suggestions from Users to
          help improve the Platform.
        </LegalP>
        <LegalP>
          25.2 By submitting any feedback, suggestion, idea, or recommendation to A-Shopper through
          any channel, including email, in-Platform forms, surveys, or direct communication, you
          hereby:
        </LegalP>
        <LegalList
          items={[
            'a. Irrevocably assign to A-Shopper all rights, title, and interest in such feedback, including all intellectual property rights, at no cost to A-Shopper;',
            'b. Acknowledge that A-Shopper may use, implement, modify, or discard such feedback entirely at its own discretion without obligation to you; and',
            'c. Confirm that you are not submitting any feedback that contains confidential or proprietary information belonging to a third party.',
          ]}
        />
        <LegalP>
          25.3 A-Shopper is not obligated to acknowledge, respond to, compensate, or credit any User
          for submitted feedback, regardless of whether A-Shopper chooses to use it.
        </LegalP>
      </LegalSection>

      {/* 26 */}
      <LegalSection id="section-26" title="26. User Content, Reviews and Ratings">
        <LegalP>
          26.1 All Content must be honest, accurate, and based on genuine experience.
        </LegalP>
        <LegalP>
          26.2 A-Shopper prohibits: false or defamatory reviews; incentivised reviews; content
          infringing third-party rights; and content that is obscene, offensive, or unlawful.
        </LegalP>
        <LegalP>
          26.3 A-Shopper reserves the right to remove violating Content without notice or liability
          and does not endorse User-generated Content.
        </LegalP>
      </LegalSection>

      {/* 27 */}
      <LegalSection id="section-27" title="27. Dispute Resolution Between Users">
        <LegalP>
          27.1 In the event of a Transaction dispute: (a) parties should first attempt direct
          resolution within 72 hours; (b) if unresolved, either party may escalate to A-Shopper&apos;s
          Dispute Resolution Centre; (c) A-Shopper will issue a determination within 10 business
          days; and (d) A-Shopper&apos;s escrow determination is final and binding within the escrow
          system.
        </LegalP>
        <LegalP>
          27.2 A-Shopper is a neutral facilitator and is not liable for dispute outcomes between
          Users.
        </LegalP>
      </LegalSection>

      {/* 28 */}
      <LegalSection id="section-28" title="28. API Terms">
        <LegalP>
          28.1 A-Shopper uses a third party API and is subject to the terms and conditions of the
          third party API WHICH MAY BE PUBLISHED BY A-Shopper (if needs be).
        </LegalP>
      </LegalSection>

      {/* 29 */}
      <LegalSection id="section-29" title="29. Beta Features and Early Access">
        <LegalP>
          29.1 Beta features are provided on an as-is basis with no warranty. They may be unstable,
          incomplete, or discontinued at any time without notice.
        </LegalP>
        <LegalP>
          29.2 A-Shopper&apos;s liability for any loss arising from Beta features is excluded to the
          maximum extent permitted by law.
        </LegalP>
        <LegalP>
          29.3 Feedback on Beta features may be used by A-Shopper to improve the Platform without
          compensation to the User.
        </LegalP>
      </LegalSection>

      {/* 30 */}
      <LegalSection id="section-30" title="30. Limitation of Liability">
        <LegalP>
          30.1 THE PLATFORM IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS WITHOUT WARRANTIES OF ANY
          KIND, EXPRESS OR IMPLIED.
        </LegalP>
        <LegalP>
          30.2 A-Shopper does not warrant that the Platform will be uninterrupted or error-free; that
          all Listings are accurate; that products or services will meet expectations; or that the
          Platform will always be accessible.
        </LegalP>
        <LegalH3>30.3 Tiered Liability Cap</LegalH3>
        <LegalP>
          A-Shopper&apos;s aggregate liability to any User shall not exceed the amounts set out
          below:
        </LegalP>
        <LegalTable
          headers={['User Category', 'Liability Cap', 'Basis']}
          rows={[
            [
              'B2C Consumer (Individual)',
              'NGN 500,000 or 3 months fees paid, whichever is lower',
              'Consumer protection principle',
            ],
            [
              'B2B Buyer (Business)',
              'NGN 5,000,000 or 3 months fees paid, whichever is lower',
              'Commercial transaction scale',
            ],
            [
              'Vendor / Seller',
              'NGN 10,000,000 or total commissions paid, whichever is lower',
              'Platform integrity exposure',
            ],
            [
              'Service Provider',
              'NGN 5,000,000 or total fees earned, whichever is lower',
              'Service liability basis',
            ],
            [
              'Renter (High-Value)',
              'Full replacement value as declared in the Listing',
              'Asset protection',
            ],
          ]}
        />
        <LegalP>
          30.4 A-Shopper shall not be liable for any indirect, incidental, special, consequential, or
          punitive damages, including loss of profit, data, or business, arising from use of the
          Platform.
        </LegalP>
        <LegalP>
          30.5 Nothing in these Terms limits A-Shopper&apos;s liability for death or personal injury
          caused by its negligence, or for fraud or fraudulent misrepresentation.
        </LegalP>
      </LegalSection>

      {/* 31 */}
      <LegalSection id="section-31" title="31. User Indemnity">
        <LegalP>
          31.1 You agree to indemnify and hold harmless A-Shopper Global Limited, its directors,
          officers, employees, and partners from all claims, losses, liabilities, damages, costs, and
          expenses arising from: (a) your use of the Platform; (b) your breach of these Terms; (c)
          your Content; (d) your violation of any applicable law or third-party rights; or (e) any
          Transaction you enter into through the Platform.
        </LegalP>
      </LegalSection>

      {/* 32 */}
      <LegalSection id="section-32" title="32. Platform Availability and Maintenance">
        <LegalP>
          32.1 A-Shopper aims for continuous Platform availability but does not guarantee
          uninterrupted access. The Platform may be temporarily unavailable due to maintenance,
          upgrades, or circumstances beyond A-Shopper&apos;s control.
        </LegalP>
        <LegalP>
          32.2 A-Shopper will provide reasonable advance notice of planned maintenance. A-Shopper is
          not liable for loss resulting from downtime or technical failure.
        </LegalP>
      </LegalSection>

      {/* 33 */}
      <LegalSection id="section-33" title="33. Third-Party Services and Integrations">
        <LegalP>
          33.1 The Platform may integrate or link to third-party services. A-Shopper does not control
          these services and is not responsible for their content, availability, or practices.
        </LegalP>
        <LegalP>
          33.2 Your use of third-party services is subject to those third parties&apos; own terms and
          privacy policies.
        </LegalP>
      </LegalSection>

      {/* 34 */}
      <LegalSection id="section-34" title="34. Account Suspension and Termination">
        <LegalP>
          34.1 A-Shopper may suspend or terminate any Account, with or without notice, for: breach of
          these Terms; fraudulent or illegal activity; inaccurate Account information; persistent
          unresolved disputes; inactivity exceeding 12 months; or any reason necessary to protect
          Platform integrity.
        </LegalP>
        <LegalP>
          34.2 Upon termination, pending Orders must be fulfilled or cancelled per A-Shopper&apos;s
          policies. Escrow funds are disbursed per the Escrow Policy.
        </LegalP>
        <LegalP>
          34.3 You may close your Account at any time by contacting{' '}
          <a href="mailto:support@ashopper.com" className="text-primary hover:underline">
            support@ashopper.com
          </a>
          . Closure does not extinguish outstanding obligations.
        </LegalP>
      </LegalSection>

      {/* 35 */}
      <LegalSection id="section-35" title="35. Dormant Account Policy">
        <LegalP>
          35.1 An Account is considered dormant if there has been no login, Transaction, or Platform
          activity for a continuous period of twelve (12) months.
        </LegalP>
        <LegalP>
          35.2 A-Shopper will notify the Account holder by email at least 30 days before taking any
          action on a dormant Account.
        </LegalP>
        <LegalP>35.3 Following the notice period, A-Shopper may:</LegalP>
        <LegalList
          items={[
            'a. Suspend or deactivate the dormant Account;',
            'b. Remove or delist any active Listings associated with the dormant Account;',
            "c. Transfer any unclaimed escrow funds to A-Shopper's dormant funds reserve, in compliance with applicable Nigerian law; and",
            "d. Retain or delete Account data in accordance with A-Shopper's data retention policy and the NDPA 2023.",
          ]}
        />
        <LegalP>
          35.4 Users may reactivate a dormant Account by contacting{' '}
          <a href="mailto:support@ashopper.com" className="text-primary hover:underline">
            support@ashopper.com
          </a>
          , subject to re-verification of identity and KYC documents where required.
        </LegalP>
        <LegalP>
          35.5 A-Shopper is not liable for any loss arising from the deactivation of a dormant
          Account where proper notice was given.
        </LegalP>
      </LegalSection>

      {/* 36 */}
      <LegalSection id="section-36" title="36. No Press Release and Endorsements Restriction">
        <LegalP>
          36.1 Users must not, without A-Shopper&apos;s prior written consent:
        </LegalP>
        <LegalList
          items={[
            'a. Issue any press release, public statement, or media communication that references A-Shopper, the Platform, or any commercial relationship with A-Shopper;',
            "b. Use A-Shopper's name, logo, trademarks, or branding in any advertising, marketing material, or promotional content;",
            "c. Imply or suggest that A-Shopper endorses, recommends, or is affiliated with the User's business, products, or services; or",
            'd. Reference their presence on the A-Shopper Platform in any way that could mislead the public about the nature of the relationship between the User and A-Shopper.',
          ]}
        />
        <LegalP>
          36.2 Notwithstanding Clause 36.1, Vendors may state that their products are &quot;available
          on A-Shopper&quot; or &quot;listed on{' '}
          <a
            href="https://www.a-shopper.com"
            className="text-primary hover:underline"
          >
            www.a-shopper.com
          </a>
          &quot; in a factual and accurate manner, without implying any endorsement.
        </LegalP>
        <LegalP>
          36.3 Breach of this Clause may result in Account suspension and legal action to protect
          A-Shopper&apos;s brand and reputation.
        </LegalP>
      </LegalSection>

      {/* 37 */}
      <LegalSection id="section-37" title="37. Accessibility">
        <LegalP>
          37.1 A-Shopper is committed to making the Platform accessible to as wide a range of Users
          as possible, including Users with disabilities.
        </LegalP>
        <LegalP>
          37.2 A-Shopper works towards compliance with applicable accessibility standards, including
          the Web Content Accessibility Guidelines (WCAG), to the extent reasonably practicable.
        </LegalP>
        <LegalP>
          37.3 If you experience accessibility barriers while using the Platform or require the Terms
          and Conditions or any other document in an alternative format, please contact A-Shopper at{' '}
          <a href="mailto:support@ashopper.com" className="text-primary hover:underline">
            support@ashopper.com
          </a>{' '}
          and we will use reasonable efforts to accommodate your request.
        </LegalP>
      </LegalSection>

      {/* 38 */}
      <LegalSection id="section-38" title="38. Assignment">
        <LegalP>
          38.1 You may not assign, transfer, or sub-licence your Account or any rights under these
          Terms without A-Shopper&apos;s prior written consent.
        </LegalP>
        <LegalP>
          38.2 A-Shopper may freely assign these Terms, in whole or in part, to any affiliate,
          successor entity, or business acquirer without your consent, subject to written notice.
          Your rights under these Terms will be preserved on assignment.
        </LegalP>
      </LegalSection>

      {/* 39 */}
      <LegalSection id="section-39" title="39. Force Majeure">
        <LegalP>
          39.1 A-Shopper shall not be liable for any failure or delay caused by events beyond its
          reasonable control, including acts of God, natural disasters, war, civil unrest, government
          action, cyber-attacks, power outages, or telecommunications failures.
        </LegalP>
        <LegalP>
          39.2 A-Shopper will notify Users as soon as practicable and use reasonable efforts to
          resume normal operations.
        </LegalP>
      </LegalSection>

      {/* 40 */}
      <LegalSection id="section-40" title="40. Modification to Terms and Platform">
        <LegalP>
          40.1 A-Shopper reserves the right to modify these Terms at any time. Updated Terms will be
          posted on the Platform with a revised Last Updated date and version number.
        </LegalP>
        <LegalP>
          40.2 For material changes, A-Shopper will notify registered Users by email or in-Platform
          notification at least 14 days before changes take effect.
        </LegalP>
        <LegalP>
          40.3 Continued use of the Platform after the effective date of changes constitutes
          acceptance of the updated Terms.
        </LegalP>
        <LegalP>
          40.4 A-Shopper may modify, suspend, or discontinue any Platform feature at any time without
          liability.
        </LegalP>
      </LegalSection>

      {/* 41 */}
      <LegalSection id="section-41" title="41. Notices">
        <LegalP>
          41.1 Any formal legal notice from A-Shopper to a User will be sent to the email address
          registered on the User&apos;s Account or published on the Platform. Notice is deemed
          received: (a) immediately upon sending if sent by email during normal business hours; (b)
          on the next business day if sent after business hours; or (c) upon posting on the Platform
          for general notices applicable to all Users.
        </LegalP>
        <LegalP>
          41.2 Any formal legal notice from a User to A-Shopper must be sent in writing to{' '}
          <a href="mailto:legal@ashopper.com" className="text-primary hover:underline">
            legal@ashopper.com
          </a>{' '}
          or by registered post to A-Shopper Global Limited&apos;s registered office in Nigeria.
        </LegalP>
        <LegalP>
          41.3 Notices sent by registered post are deemed received five (5) business days after
          posting within Nigeria and ten (10) business days after posting for international
          correspondence.
        </LegalP>
        <LegalP>
          41.4 It is the User&apos;s responsibility to maintain an accurate and active email address
          on their Account. A-Shopper is not liable for any loss arising from a User&apos;s failure
          to receive notice due to an outdated or inactive email address.
        </LegalP>
      </LegalSection>

      {/* 42 */}
      <LegalSection id="section-42" title="42. Governing Law, Jurisdiction and Governing Language">
        <LegalP>
          42.1 These Terms are governed by and construed in accordance with the laws of the Federal
          Republic of Nigeria, including the Federal Competition and Consumer Protection Act 2018,
          the NDPA 2023, the Cybercrimes Act 2015, the Money Laundering (Prevention and Prohibition)
          Act 2022, and all other applicable Nigerian legislation.
        </LegalP>
        <LegalP>
          42.2 These Terms shall be enforced to the extent permitted by applicable local law.
          Mandatory consumer rights under applicable local law are not excluded.
        </LegalP>
        <LegalP>
          42.3 The Parties submit to the non-exclusive jurisdiction of Nigerian courts for any matter
          not referred to arbitration.
        </LegalP>
        <LegalH3>42.4 Governing Language</LegalH3>
        <LegalP>
          These Terms are drafted in English. In the event of any conflict between the English
          version and any translated version, the English version shall prevail.
        </LegalP>
      </LegalSection>

      {/* 43 */}
      <LegalSection id="section-43" title="43. Dispute Resolution Between Platform and Users">
        <LegalP>
          43.1 Negotiation: Any dispute between you and A-Shopper shall be referred first to
          good-faith negotiation through A-Shopper&apos;s support channels within 14 days of written
          notice.
        </LegalP>
        <LegalP>
          43.2 Mediation: If unresolved, the dispute shall be referred to mediation in Lagos,
          Nigeria, before a mutually agreed mediator within 30 days.
        </LegalP>
        <LegalP>
          43.3 Arbitration: If mediation fails, the dispute shall be resolved by binding arbitration
          under the Arbitration and Mediation Act 2023, with the seat of arbitration in Lagos,
          conducted in English, before a sole arbitrator. Failing agreement on appointment, the
          Chartered Institute of Arbitrators (Nigeria Branch) shall appoint.
        </LegalP>
        <LegalP>
          43.4 Class Action Waiver: All claims shall be brought individually and not as part of any
          class or representative action, to the extent permitted by law.
        </LegalP>
        <LegalP>
          43.5 A-Shopper may seek emergency injunctive or equitable relief from any court at any time
          without first pursuing the above steps.
        </LegalP>
      </LegalSection>

      {/* 44 */}
      <LegalSection id="section-44" title="44. Survival of Obligations">
        <LegalP>
          44.1 The following Clauses shall survive the termination, expiry, or cancellation of these
          Terms or a User&apos;s Account and shall continue to bind the relevant parties indefinitely
          or for the periods specified:
        </LegalP>
        <LegalList
          items={[
            'a. Clause 15 (Intellectual Property Rights): survives indefinitely;',
            'b. Clause 17 (Non-Circumvention): survives for twelve (12) months from Cessation;',
            'c. Clause 23 (Data Privacy): survives for the duration of A-Shopper\'s data retention obligations under the NDPA 2023;',
            'd. Clause 25 (User Feedback and Suggestions): survives indefinitely;',
            'e. Clause 30 (Limitation of Liability): survives indefinitely;',
            'f. Clause 31 (User Indemnity): survives indefinitely;',
            'g. Clause 36 (No Press Release and Endorsement Restriction): survives for two (2) years from Cessation;',
            'h. Clause 41 (Notices): survives for the duration of any ongoing dispute;',
            'i. Clause 42 (Governing Law): survives indefinitely;',
            'j. Clause 43 (Dispute Resolution): survives indefinitely; and',
            'k. Clause 45 (Severability) and Clause 46 (Waiver): survive indefinitely.',
          ]}
        />
        <LegalP>
          44.2 Termination of these Terms or a User&apos;s Account does not affect any rights,
          obligations, liabilities, or Transactions that arose before the date of termination.
        </LegalP>
      </LegalSection>

      {/* 45 */}
      <LegalSection id="section-45" title="45. Severability">
        <LegalP>
          If any provision is held invalid or unenforceable, it shall be modified to the minimum
          extent necessary to render it valid. All remaining provisions continue in full force and
          effect.
        </LegalP>
      </LegalSection>

      {/* 46 */}
      <LegalSection id="section-46" title="46. Waiver">
        <LegalP>
          No failure or delay by A-Shopper in enforcing any right shall constitute a waiver. No
          single exercise of any right shall preclude further exercise of that or any other right.
        </LegalP>
      </LegalSection>

      {/* 47 */}
      <LegalSection id="section-47" title="47. Entire Agreement">
        <LegalP>
          These Terms, together with all documents incorporated by reference under Clause 4,
          constitute the entire agreement between you and A-Shopper Global Limited regarding your use
          of the Platform and supersede all prior understandings and arrangements.
        </LegalP>
      </LegalSection>

      {/* 48 */}
      <LegalSection id="section-48" title="48. Contact Information">
        <LegalTable
          headers={['Contact', 'Details']}
          rows={[
            ['Company', 'A-Shopper Global Limited'],
            [
              'General Enquiries',
              <a
                key="info"
                href="mailto:info@ashopper.com"
                className="text-primary hover:underline"
              >
                info@ashopper.com
              </a>,
            ],
            [
              'Customer Support',
              <a
                key="support"
                href="mailto:support@ashopper.com"
                className="text-primary hover:underline"
              >
                support@ashopper.com
              </a>,
            ],
            [
              'Data Privacy',
              <a
                key="privacy"
                href="mailto:privacy@ashopper.com"
                className="text-primary hover:underline"
              >
                privacy@ashopper.com
              </a>,
            ],
            [
              'Legal / IP',
              <a
                key="legal"
                href="mailto:legal@ashopper.com"
                className="text-primary hover:underline"
              >
                legal@ashopper.com
              </a>,
            ],
            [
              'AML / Compliance',
              <a
                key="compliance"
                href="mailto:compliance@ashopper.com"
                className="text-primary hover:underline"
              >
                compliance@ashopper.com
              </a>,
            ],
            [
              'Report Violations',
              <a
                key="report"
                href="mailto:report@ashopper.com"
                className="text-primary hover:underline"
              >
                report@ashopper.com
              </a>,
            ],
            [
              'Website',
              <a
                key="website"
                href="https://www.a-shopper.com"
                className="text-primary hover:underline"
              >
                www.a-shopper.com
              </a>,
            ],
          ]}
        />
      </LegalSection>

      <LegalP>
        By accessing or using the A-Shopper Platform, you confirm that you have read, understood, and
        agree to be legally bound by these Terms and Conditions.
      </LegalP>

      <LegalP className="text-xs">
        © 2026 A-Shopper Global Limited. All Rights Reserved.{' '}
        <a href="https://www.a-shopper.com" className="text-primary hover:underline">
          https://www.a-shopper.com
        </a>
      </LegalP>
    </div>
  );
}
