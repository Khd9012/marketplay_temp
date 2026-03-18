"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/catalog";

type CartLine = {
  product: Product;
  quantity: number;
};

type ShopStoreValue = {
  cartItems: CartLine[];
  wishlist: string[];
  cartCount: number;
  wishlistCount: number;
  cartDrawerOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  changeQuantity: (slug: string, nextQuantity: number) => void;
  toggleWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
};

const STORAGE_KEY = "marketplay-shop-store";

export const ShopStoreContext = createContext<ShopStoreValue | null>(null);

export default function ShopStoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cartItems, setCartItems] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return;
    }

    try {
      const parsed = JSON.parse(saved) as { cartItems?: CartLine[]; wishlist?: string[] };
      setCartItems(parsed.cartItems ?? []);
      setWishlist(parsed.wishlist ?? []);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cartItems,
        wishlist,
      }),
    );
  }, [cartItems, wishlist]);

  const value = useMemo<ShopStoreValue>(
    () => ({
      cartItems,
      wishlist,
      cartCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      wishlistCount: wishlist.length,
      cartDrawerOpen,
      addToCart: (product) => {
        setCartItems((current) => {
          const found = current.find((line) => line.product.slug === product.slug);
          if (!found) {
            return [...current, { product, quantity: 1 }];
          }

          return current.map((line) =>
            line.product.slug === product.slug
              ? { ...line, quantity: line.quantity + 1 }
              : line,
          );
        });
        setCartDrawerOpen(true);
      },
      removeFromCart: (slug) => {
        setCartItems((current) => current.filter((line) => line.product.slug !== slug));
      },
      changeQuantity: (slug, nextQuantity) => {
        if (nextQuantity <= 0) {
          setCartItems((current) => current.filter((line) => line.product.slug !== slug));
          return;
        }

        setCartItems((current) =>
          current.map((line) =>
            line.product.slug === slug ? { ...line, quantity: nextQuantity } : line,
          ),
        );
      },
      toggleWishlist: (slug) => {
        setWishlist((current) =>
          current.includes(slug)
            ? current.filter((item) => item !== slug)
            : [...current, slug],
        );
      },
      isWishlisted: (slug) => wishlist.includes(slug),
      openCartDrawer: () => setCartDrawerOpen(true),
      closeCartDrawer: () => setCartDrawerOpen(false),
    }),
    [cartDrawerOpen, cartItems, wishlist],
  );

  return <ShopStoreContext.Provider value={value}>{children}</ShopStoreContext.Provider>;
}
