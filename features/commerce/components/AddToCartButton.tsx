"use client";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Button } from "@mui/material";
import type { Product } from "@/data/catalog";
import useShopStore from "@/features/commerce/hooks/useShopStore";

export default function AddToCartButton({
  product,
  fullWidth = false,
  label = "장바구니 담기",
}: {
  product: Product;
  fullWidth?: boolean;
  label?: string;
}) {
  const { addToCart } = useShopStore();

  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth={fullWidth}
      startIcon={<ShoppingBagOutlinedIcon />}
      onClick={() => addToCart(product)}
    >
      {label}
    </Button>
  );
}
