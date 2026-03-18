import { Box, Button, Card, Chip, Container, Grid, Stack, TextField } from "@mui/material";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getCatalogData } from "@/lib/api/catalog";

export default async function ProductsPage() {
  const { categories, products } = await getCatalogData();

  return (
    <>
      <SiteHeader />
      <Box component="main">
        <Container maxWidth="xl" sx={{ py: { xs: 4, md: 7 } }}>
          <SectionHeading
            eyebrow="Catalog"
            title="상품 리스트 페이지 예시"
            description="필터, 검색, 정렬 바를 두고 아래에 카드 그리드를 배치한 전형적인 쇼핑몰 카탈로그 레이아웃입니다."
          />

          <Card sx={{ p: 3, mb: 4 }}>
            <Stack spacing={2}>
              <TextField placeholder="브랜드명, 상품명으로 검색" fullWidth />
              <Stack direction={{ xs: "column", md: "row" }} spacing={1.5} justifyContent="space-between">
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {categories.map((category) => (
                    <Chip key={category} label={category} clickable />
                  ))}
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Button variant="outlined">최신순</Button>
                  <Button variant="outlined">인기순</Button>
                  <Button variant="contained">추천순</Button>
                </Stack>
              </Stack>
            </Stack>
          </Card>

          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid key={product.slug} size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <SiteFooter />
    </>
  );
}
