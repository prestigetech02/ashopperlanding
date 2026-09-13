"use client";

import { useEffect, useId, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, Store, X } from "lucide-react";
import { useCurrency } from "@/components/currency-provider";
import { useSearch } from "@/components/search-provider";
import { filterPlaceholderProducts } from "@/lib/marketplace-data";

const RESULT_LIMIT = 8;

export function SearchModal() {
  const { open, query, setQuery, closeSearch } = useSearch();
  const { formatPrice } = useCurrency();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  const results = useMemo(
    () => filterPlaceholderProducts({ search: query }).slice(0, RESULT_LIMIT),
    [query]
  );

  const totalMatches = useMemo(
    () => filterPlaceholderProducts({ search: query }).length,
    [query]
  );

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeSearch]);

  if (!open) return null;

  const goToMarketplace = () => {
    const params = new URLSearchParams();
    const trimmed = query.trim();
    if (trimmed) params.set("search", trimmed);
    closeSearch();
    router.push(params.size ? `/marketplace?${params}` : "/marketplace");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 py-16 sm:px-6 sm:py-24">
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 bg-[#1b365d]/45"
        onClick={closeSearch}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[min(36rem,calc(100vh-5rem))] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-background"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3 sm:px-5">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            id={titleId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                goToMarketplace();
              }
            }}
            placeholder="Search equipment, tools, machinery..."
            className="h-11 min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
            autoComplete="off"
          />
          <button
            type="button"
            aria-label="Close"
            onClick={closeSearch}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {query.trim() === "" ? (
            <p className="px-5 py-8 text-sm text-muted-foreground">
              Start typing to search listings from verified vendors.
            </p>
          ) : results.length === 0 ? (
            <div className="px-5 py-8">
              <p className="text-sm font-medium text-foreground">No matches for “{query.trim()}”</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try another keyword, or browse the full marketplace.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-border py-1">
              {results.map((product) => {
                const isRent = product.type === "rent";
                return (
                  <li key={product.id}>
                    <Link
                      href={`/marketplace/${product.id}`}
                      onClick={closeSearch}
                      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted sm:px-5"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                        <Image
                          src={product.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-foreground">
                          {product.name}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1.5 truncate text-xs text-muted-foreground">
                          <Store className="h-3.5 w-3.5 shrink-0 text-primary" />
                          {product.vendor} · {product.category}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-sm font-bold text-primary">
                          {formatPrice(product.price, isRent)}
                        </p>
                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                          {isRent ? "Rent" : "Sale"}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-4 py-3 sm:px-5">
          <button
            type="button"
            onClick={goToMarketplace}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover"
          >
            {query.trim()
              ? `View ${totalMatches} result${totalMatches === 1 ? "" : "s"} in marketplace`
              : "Browse marketplace"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
