"use client";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { IconButton } from "@mui/material";
import useShopStore from "@/features/commerce/hooks/useShopStore";

export default function FavoriteToggleButton({ slug }: { slug: string }) {
  const { isWishlisted, toggleWishlist } = useShopStore();
  const active = isWishlisted(slug);

  return (
    <IconButton
      onClick={() => toggleWishlist(slug)}
      sx={{
        bgcolor: active ? "rgba(240,155,85,0.18)" : "rgba(255,255,255,0.65)",
        color: active ? "secondary.dark" : "text.primary",
      }}
    >
      {active ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
    </IconButton>
  );
}
