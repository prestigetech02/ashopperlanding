import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { HeroTypedWord } from "@/components/hero-typed-word";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div aria-hidden className="hero-mesh pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-16 pb-6 text-center sm:px-6 sm:pt-24 sm:pb-8 lg:px-8 lg:pt-28">
        <h1 className="max-w-5xl text-[2.35rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#102018] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          The World&apos;s First Global B2B
          <br />
          Engineering <HeroTypedWord /> Marketplace
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#6b7280] sm:text-lg">
          Buy, Sell, and Rent Engineering Equipment Globally
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#download"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Download A-Shopper
            <Download className="h-4 w-4" strokeWidth={2.4} />
          </Link>
          <Link
            href="/vendors"
            className="inline-flex items-center gap-2 rounded-lg border border-[#d7dbe2] bg-white px-5 py-3 text-sm font-semibold text-[#1f2937] transition-colors hover:bg-muted"
          >
            Become a vendor
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
          </Link>
        </div>

        <Image
          src="/images/Global Trade Network Map (1).png"
          alt="Global trade network linking buyers and vendors across countries"
          width={1774}
          height={887}
          priority
          className="mt-12 h-auto w-full max-w-6xl sm:mt-16"
        />
      </div>
    </section>
  );
}
