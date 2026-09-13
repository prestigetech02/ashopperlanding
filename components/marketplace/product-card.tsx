"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Store } from "lucide-react";
import { useCurrency } from "@/components/currency-provider";
import type { PlaceholderProduct } from "@/lib/marketplace-data";

export function ProductCard({ product }: { product: PlaceholderProduct }) {
  const { formatPrice } = useCurrency();
  const isRent = product.type === "rent";

  return (
    <Link
      href={`/marketplace/${product.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-primary/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
            isRent ? "bg-foreground text-white" : "bg-primary text-primary-foreground"
          }`}
        >
          {isRent ? "For Rent" : "For Sale"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 text-base font-bold text-primary">
          {formatPrice(product.price, isRent)}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="inline-flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
            <Store className="h-3.5 w-3.5 shrink-0 text-primary" />
            <span className="truncate">{product.vendor}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            {product.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}
