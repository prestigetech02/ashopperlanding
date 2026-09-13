import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import { ProductInfo } from "@/components/marketplace/product-info";
import { ProductCard } from "@/components/marketplace/product-card";
import { ProductGallery } from "@/components/marketplace/product-gallery";
import type { ProductDetail, PlaceholderProduct } from "@/lib/marketplace-data";

const STEPS = [
  {
    number: "01",
    title: "Open the app",
    body: "Listings on the web are for browsing. Download A-Shopper to continue.",
  },
  {
    number: "02",
    title: "Chat with the vendor",
    body: "Ask about condition, specs, rental term, and delivery before you commit.",
  },
  {
    number: "03",
    title: "Pay with Money Protection",
    body: "Funds are held until you confirm the equipment has arrived as listed.",
  },
];

export function ProductDetailView({
  product,
  related,
}: {
  product: ProductDetail;
  related: PlaceholderProduct[];
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Link
        href="/marketplace"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to marketplace
      </Link>

      <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {product.specs.map((spec) => (
          <div key={spec.label} className="rounded-2xl border border-border bg-background p-5">
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {spec.label}
            </p>
            <p className="mt-1.5 text-sm font-bold text-foreground">{spec.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 overflow-hidden rounded-2xl border border-border bg-background sm:grid-cols-3">
        <div className="border-border p-6 max-sm:border-b sm:border-r">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <h2 className="mt-4 text-base font-bold text-foreground">Money Protection</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Optional at checkout. Your payment is held until you confirm delivery in the app.
          </p>
        </div>
        <div className="border-border p-6 max-sm:border-b sm:border-r">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Truck className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <h2 className="mt-4 text-base font-bold text-foreground">Dispatch & tracking</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The vendor updates order status in-app from dispatch through arrival.
          </p>
        </div>
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Continue in the app
          </p>
          <ol className="mt-4 grid gap-3">
            {STEPS.map((step) => (
              <li key={step.number} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                  {step.number}
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{step.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            More in {product.category}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
            Related equipment
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.id}>
                <ProductCard product={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
