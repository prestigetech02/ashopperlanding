import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Policies — A-Shopper",
  description: "Read A-Shopper terms, privacy policy, and cookie policy.",
};

const POLICIES = [
  {
    title: "Terms & Conditions",
    body: "The rules for using A-Shopper as a buyer or vendor.",
    href: "/terms",
  },
  {
    title: "Privacy Policy",
    body: "How we collect, use, and protect your personal data.",
    href: "/privacy",
  },
  {
    title: "Cookie Policy",
    body: "What cookies we use and how you can manage them.",
    href: "/cookies",
  },
];

export default function PoliciesPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Policies</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          Clear rules for a trusted marketplace
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Review the legal documents that govern how A-Shopper works for buyers and vendors.
        </p>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {POLICIES.map((policy) => (
            <li key={policy.href}>
              <Link
                href={policy.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 sm:p-7"
              >
                <h2 className="text-lg font-semibold text-foreground sm:text-xl">{policy.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {policy.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read policy
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
