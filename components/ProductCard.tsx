"use client";

import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import type { Product } from "@/data/catalog";
import AddToCartButton from "@/features/commerce/components/AddToCartButton";
import FavoriteToggleButton from "@/features/commerce/components/FavoriteToggleButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          height: 280,
          p: 2.5,
          background: product.accent,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
        >
        <Box>
          <Typography
            variant="overline"
            sx={{ color: "text.secondary", fontWeight: 700, letterSpacing: "0.12em" }}
          >
            {product.category}
          </Typography>
          <Typography variant="h3" sx={{ lineHeight: 1, mt: 1 }}>
            {product.image}
          </Typography>
        </Box>
        <FavoriteToggleButton slug={product.slug} />
      </Box>
      <CardHeader
        title={
          <Link href={`/products/${product.slug}`}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              {product.title}
            </Typography>
          </Link>
        }
        subheader={product.summary}
        sx={{ pb: 1 }}
      />
      <CardContent sx={{ pt: 0 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap", gap: 1 }}>
          {product.tags.map((tag) => (
            <Typography
              key={tag}
              variant="caption"
              sx={{
                px: 1.25,
                py: 0.75,
                borderRadius: 999,
                bgcolor: "rgba(29,77,79,0.08)",
                color: "text.secondary",
                fontWeight: 700,
              }}
            >
              {tag}
            </Typography>
          ))}
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="primary" sx={{ fontWeight: 900 }}>
            {product.price}
          </Typography>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <StarRoundedIcon sx={{ color: "#f09b55", fontSize: 18 }} />
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {product.rating}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 2.5 }}>
          <AddToCartButton product={product} fullWidth />
          <Button href={`/products/${product.slug}`} variant="outlined" fullWidth>
            상세 보기
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
