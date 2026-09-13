"use client";

import { BadgeCheck, ShieldCheck, Star, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/components/currency-provider";
import type { ProductDetail } from "@/lib/marketplace-data";

export function ProductInfo({ product }: { product: ProductDetail }) {
  const { formatPrice } = useCurrency();
  const isRent = product.type === "rent";

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
            isRent ? "bg-foreground text-white" : "bg-primary text-primary-foreground"
          }`}
        >
          {isRent ? "For Rent" : "For Sale"}
        </span>
        <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          {product.category}
        </span>
        <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          {product.condition}
        </span>
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {product.name}
      </h1>
      <p className="mt-4 text-2xl font-bold text-primary">
        {formatPrice(product.price, isRent)}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Store className="h-4 w-4 text-primary" />
          {product.vendor}
        </span>
        <span className="inline-flex items-center gap-1.5 text-primary">
          <BadgeCheck className="h-4 w-4" />
          Verified vendor
        </span>
        <span className="inline-flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          {product.rating.toFixed(1)} ({product.reviews} reviews)
        </span>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">{product.location}</p>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {product.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/#download">Continue in the App</Button>
        <Button href="/escrow" variant="outline">
          <ShieldCheck className="h-4 w-4" />
          Money Protection
        </Button>
      </div>
    </div>
  );
}
