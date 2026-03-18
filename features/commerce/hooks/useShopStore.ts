"use client";

import { useContext } from "react";
import { ShopStoreContext } from "@/features/commerce/context/ShopStoreProvider";

export default function useShopStore() {
  const context = useContext(ShopStoreContext);

  if (!context) {
    throw new Error("useShopStore must be used within ShopStoreProvider");
  }

  return context;
}
