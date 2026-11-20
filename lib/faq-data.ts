export type FaqItem = {
  q: string;
  a: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "buying",
    label: "Buying & Renting",
    items: [
      {
        q: "What types of equipment can I buy or rent?",
        a: "A-Shopper covers the full engineering and industrial space: power tools, hand tools, heavy machinery (excavators, loaders, generators), welding equipment, compressors, safety gear, scaffolding, and equipment rentals. If it's engineering or industrial equipment, you'll find it on A-Shopper.",
      },
      {
        q: "Can I negotiate the price with a vendor?",
        a: "Yes. You can chat directly with a vendor in-app to ask questions, negotiate pricing, or request a custom quote before you pay.",
      },
      {
        q: "How does delivery work, and what if my equipment doesn't arrive?",
        a: "Once dispatched, you can track your delivery right in the app, powered by your logistics partner's tracking system. If your equipment doesn't arrive or doesn't match the listing, you can open a dispute in-app while your payment stays protected.",
      },
      {
        q: "Is there a web version, or is everything on the mobile app?",
        a: "A-Shopper currently runs on the mobile app for iOS and Android. Download the app to browse, chat with vendors, and shop.",
      },
    ],
  },
  {
    id: "payments",
    label: "Payments & Money Protection",
    items: [
      {
        q: "When does the vendor get my money?",
        a: "Only after you confirm delivery in the app. Until then, your payment stays protected and the vendor cannot withdraw it.",
      },
      {
        q: "What if the equipment doesn't match the listing?",
        a: "You can open a dispute directly in the app. Your payment stays protected while our team reviews it, and a refund is processed if the dispute is upheld.",
      },
      {
        q: "Do I ever pay the vendor directly?",
        a: "No. All payments go through A-Shopper's Money Protection system. You should never be asked to pay a vendor outside the app.",
      },
      {
        q: "Can vendors see that payment is secured before shipping?",
        a: "Yes. Vendors are notified once your payment is secured, so they can dispatch your order with confidence, without ever accessing your funds directly.",
      },
    ],
  },
  {
    id: "vendors",
    label: "For Vendors",
    items: [
      {
        q: "How do I become a vendor on A-Shopper?",
        a: "Download the A-Shopper app, create a vendor account, set up your store profile, and complete verification. Once approved, you can list equipment for sale or rent and start chatting with buyers.",
      },
      {
        q: "Is it free to sell on A-Shopper?",
        a: "Yes. Joining as a vendor is free, there are no subscription fees. You only pay when you sell, based on the platform's transaction terms shown in the app.",
      },
      {
        q: "How do payouts work for vendors?",
        a: "When a buyer pays, funds are held with Money Protection. After you dispatch and the buyer confirms delivery, the payout is released to you. You can track order and payout status in the vendor app.",
      },
      {
        q: "Can I list both sales and rentals?",
        a: "Yes. You can publish sale listings and rental listings from the same vendor store, with photos, specs, and pricing managed directly on your phone.",
      },
      {
        q: "How do I get paid in my local currency?",
        a: "Vendor payouts are settled in your local currency where supported. Amounts and fees are shown in the app before you accept an order, so you always know what you will receive.",
      },
    ],
  },
  {
    id: "account",
    label: "Account & Support",
    items: [
      {
        q: "Do I need an account to browse equipment?",
        a: "You can explore the marketplace after installing the app. Creating an account unlocks chat, checkout, Money Protection payments, and order tracking.",
      },
      {
        q: "How do I contact support?",
        a: "Reach us in-app through support chat, or email support@ashopper.africa. For partnerships and vendor onboarding questions, use the Contact Us section on this site.",
      },
      {
        q: "Is A-Shopper available worldwide?",
        a: "A-Shopper is a global engineering marketplace. Availability of listings, delivery, and payment methods can vary by market as we expand coverage with verified vendors.",
      },
    ],
  },
];
