import { Button } from "@/components/ui/button";

export function HelpClosing() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid overflow-hidden rounded-2xl border border-border lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="bg-[#0d2744] px-8 py-10 sm:px-10 lg:px-12 lg:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Still have questions?
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Can&apos;t find what you need?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
              Reach our support team and we&apos;ll help you get unstuck.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 bg-primary-soft px-8 py-10 sm:px-10 lg:justify-end lg:px-12 lg:py-12">
            <Button href="mailto:support@ashopper.africa">Email Support</Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
