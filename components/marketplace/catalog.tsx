import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { ProductCard } from "@/components/marketplace/product-card";
import {
  MARKETPLACE_CATEGORIES,
  filterPlaceholderProducts,
  type MarketplaceFilters,
} from "@/lib/marketplace-data";

const inputClass =
  "h-11 w-full rounded-xl border border-border bg-white px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring";

const CATEGORY_OPTIONS = [
  { value: "all", label: "All categories" },
  ...MARKETPLACE_CATEGORIES.map((category) => ({ value: category, label: category })),
];

const TYPE_OPTIONS = [
  { value: "all", label: "Sale & Rent" },
  { value: "sale", label: "For Sale" },
  { value: "rent", label: "For Rent" },
];

const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

export function MarketplaceCatalog({ filters }: { filters: MarketplaceFilters }) {
  const products = filterPlaceholderProducts(filters);
  const hasFilters = Boolean(
    filters.search ||
      (filters.category && filters.category !== "all") ||
      filters.type === "sale" ||
      filters.type === "rent" ||
      filters.minPrice ||
      filters.maxPrice ||
      (filters.sort && filters.sort !== "newest")
  );

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:pb-16">
        <form
          action="/marketplace"
          method="get"
          className="rounded-2xl border border-border bg-background p-4 sm:p-5"
        >
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_repeat(5,minmax(0,0.85fr))_auto]">
            <label className="relative min-w-0">
              <span className="sr-only">Search</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                name="search"
                defaultValue={filters.search ?? ""}
                placeholder="Search equipment, tools, machinery..."
                className={`${inputClass} pl-9`}
              />
            </label>

            <Select
              name="category"
              defaultValue={filters.category || "all"}
              options={CATEGORY_OPTIONS}
              ariaLabel="Category"
            />

            <Select
              name="type"
              defaultValue={
                filters.type === "sale" || filters.type === "rent" ? filters.type : "all"
              }
              options={TYPE_OPTIONS}
              ariaLabel="Sale or rent"
            />

            <input
              type="number"
              name="minPrice"
              min={0}
              defaultValue={filters.minPrice ?? ""}
              placeholder="Min price"
              className={inputClass}
            />

            <input
              type="number"
              name="maxPrice"
              min={0}
              defaultValue={filters.maxPrice ?? ""}
              placeholder="Max price"
              className={inputClass}
            />

            <Select
              name="sort"
              defaultValue={filters.sort || "newest"}
              options={SORT_OPTIONS}
              ariaLabel="Sort"
            />

            <Button type="submit" className="h-11 px-6">
              Filter
            </Button>
          </div>
        </form>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {products.length} listing{products.length === 1 ? "" : "s"}
          </p>
          {hasFilters && (
            <Link href="/marketplace" className="text-sm font-medium text-primary hover:text-primary-hover">
              Clear filters
            </Link>
          )}
        </div>

        {products.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-border bg-background px-6 py-16 text-center">
            <p className="font-semibold text-foreground">No listings match your filters</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search, category, or price range.
            </p>
          </div>
        ) : (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
