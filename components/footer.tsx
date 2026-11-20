import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Help Center / FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

const BUYER_LINKS = [
  { label: "Browse Equipment", href: "/marketplace" },
  { label: "Money Protection", href: "/escrow" },
  { label: "Track Orders", href: "/#download" },
];

const VENDOR_LINKS = [
  { label: "Become a Vendor", href: "/vendors" },
  { label: "Vendor Login", href: "/#download" },
  { label: "List Equipment", href: "/vendors" },
  { label: "Vendor Resources", href: "/vendors" },
];

const SOCIALS = [
  {
    href: "https://www.facebook.com/share/18JsBXoCr7/",
    label: "Facebook",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M17.5 4h2.4l-5.3 6.1L21 20h-5.4l-3.5-4.6L7.8 20H5.4l5.7-6.5L3.5 4h5.5l3.2 4.2L17.5 4Zm-.8 14.4h1.3L7.4 5.5H6L16.7 18.4Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/ashopper.com_official/",
    label: "Instagram",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M7.1 9.3H4.3V20h2.8V9.3ZM5.7 4C4.8 4 4 4.8 4 5.8s.8 1.8 1.7 1.8 1.7-.8 1.7-1.8S6.6 4 5.7 4ZM20 20h-2.8v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H10.5V9.3h2.7v1.5h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.3V20Z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8a26 26 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
];

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0d2744]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.2fr_repeat(3,0.85fr)_1.3fr] lg:gap-8 lg:px-8 lg:py-14">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/images/ashopper-logo.png"
              alt="A Shopper"
              width={1046}
              height={351}
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>
          <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-white/70">
            Global Engineering Equipment Marketplace
          </p>
        </div>

        <FooterLinks title="Quick Links" links={QUICK_LINKS} />
        <FooterLinks title="For Buyers" links={BUYER_LINKS} />
        <FooterLinks title="For Vendors" links={VENDOR_LINKS} />

        <div>
          <h3 className="text-sm font-semibold text-white">Stay Connected</h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {SOCIALS.map(({ icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:border-primary hover:text-primary"
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-white/80">Subscribe to our newsletter</p>
          <form className="relative mt-3 max-w-xs">
            <label htmlFor="footer-email" className="sr-only">
              Your email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder="Your email address"
              className="h-11 w-full rounded-full bg-white px-4 pr-12 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="button"
              aria-label="Subscribe"
              className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary-hover"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} A Shopper Global Limited. All rights reserved.
          </p>
          <Image
            src="/images/secure-payments.png"
            alt="Visa, Mastercard, American Express, and PayPal"
            width={1000}
            height={129}
            className="h-7 w-auto max-w-full object-contain sm:h-9"
          />
        </div>
      </div>
    </footer>
  );
}
