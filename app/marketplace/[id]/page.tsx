import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/marketplace/product-detail";
import { DownloadBanner } from "@/components/download-banner";
import { getProductById, getRelatedProducts } from "@/lib/marketplace-data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product — A-Shopper" };
  return {
    title: `${product.name} — A-Shopper`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = getRelatedProducts(product.id, product.category);

  return (
    <main>
      <section className="bg-background">
        <ProductDetailView product={product} related={related} />
      </section>
      <DownloadBanner />
    </main>
  );
}
