import {
  brandRows,
  categories,
  curatedCollections,
  featuredProducts,
  type Product,
} from "@/data/catalog";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const API_URL = process.env.MARKETPLAY_API_URL || "http://localhost:19092/api";

type ApiEnvelope<T> = {
  code: string;
  message: string;
  data: T;
};

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 30 },
      headers: {
        "Content-Type": "application/json",
        "X-Customer-Id": "demo-user",
      },
    });

    if (!response.ok) {
      return null;
    }

    const result = (await response.json()) as ApiEnvelope<T>;
    return result.data;
  } catch {
    return null;
  }
}

export async function getHomepageData() {
  const apiProducts = await fetchJson<Product[]>("/products");

  return {
    brandRows,
    categories,
    curatedCollections,
    featuredProducts: apiProducts ?? featuredProducts,
  };
}

export async function getCatalogData() {
  const apiProducts = await fetchJson<Product[]>("/products");
  const products = apiProducts ?? featuredProducts;

  return {
    categories,
    products: products.concat(products).map((product, index) => ({
      ...product,
      slug: `${product.slug}-${index}`,
    })),
  };
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const apiProducts = await fetchJson<Product[]>("/products");
  if (apiProducts) {
    return apiProducts;
  }

  await wait(30);
  return featuredProducts;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const normalized = slug.replace(/-\d+$/, "");
  const apiProduct = await fetchJson<Product>(`/products/${normalized}`);
  if (apiProduct) {
    return apiProduct;
  }

  const exact = featuredProducts.find((product) => product.slug === slug);
  if (exact) {
    return exact;
  }

  return featuredProducts.find((product) => product.slug === normalized) ?? null;
}
