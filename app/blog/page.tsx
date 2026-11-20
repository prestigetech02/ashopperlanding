import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog — A-Shopper",
  description: "Product updates, marketplace news, and insights from the A-Shopper team.",
};

export default function BlogPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Blog</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Stories from the equipment marketplace
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Articles, launches, and field notes are coming soon. In the meantime, explore the
          marketplace or read our FAQ.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/marketplace">Browse equipment</Button>
          <Button href="/faq" variant="outline">
            Read FAQ
          </Button>
        </div>
      </section>
    </main>
  );
}
