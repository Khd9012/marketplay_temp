import {
  brandRows,
  categories,
  curatedCollections,
  featuredProducts,
  type Product,
} from "@/data/catalog";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getHomepageData() {
  await wait(40);

  return {
    brandRows,
    categories,
    curatedCollections,
    featuredProducts,
  };
}

export async function getCatalogData() {
  await wait(40);

  return {
    categories,
    products: featuredProducts.concat(featuredProducts).map((product, index) => ({
      ...product,
      slug: `${product.slug}-${index}`,
    })),
  };
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await wait(30);
  return featuredProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  await wait(30);

  const exact = featuredProducts.find((product) => product.slug === slug);
  if (exact) {
    return exact;
  }

  const normalized = slug.replace(/-\d+$/, "");
  return featuredProducts.find((product) => product.slug === normalized) ?? null;
}
