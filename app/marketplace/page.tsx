import type { Metadata } from "next";
import { MarketplaceHero } from "@/components/marketplace/hero";
import { MarketplaceCatalog } from "@/components/marketplace/catalog";
import { DownloadBanner } from "@/components/download-banner";

export const metadata: Metadata = {
  title: "Marketplace — A-Shopper",
  description:
    "Browse engineering equipment, power tools, heavy machinery, and rentals from verified vendors on A-Shopper.",
};

type SearchParams = Promise<{
  search?: string;
  category?: string;
  type?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: string;
}>;

export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  return (
    <main>
      <MarketplaceHero />
      <MarketplaceCatalog
        filters={{
          search: params.search,
          category: params.category,
          type: params.type,
          minPrice: params.minPrice,
          maxPrice: params.maxPrice,
          sort: params.sort,
        }}
      />
      <DownloadBanner />
    </main>
  );
}
