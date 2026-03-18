import EastRoundedIcon from "@mui/icons-material/EastRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ProductCard from "@/components/ProductCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import AddToCartButton from "@/features/commerce/components/AddToCartButton";
import FavoriteToggleButton from "@/features/commerce/components/FavoriteToggleButton";
import { getFeaturedProducts, getProductBySlug } from "@/lib/api/catalog";

export async function generateStaticParams() {
  const featuredProducts = await getFeaturedProducts();
  return featuredProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const featuredProducts = await getFeaturedProducts();
  const product = (await getProductBySlug(slug)) ?? featuredProducts[0];

  return (
    <>
      <SiteHeader />
      <Box component="main">
        <Container maxWidth="xl" sx={{ py: { xs: 4, md: 7 } }}>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  minHeight: 560,
                  p: 4,
                  display: "flex",
                  alignItems: "flex-end",
                  background: product.accent,
                }}
              >
                <Typography variant="h1" sx={{ fontSize: { xs: 88, md: 140 } }}>
                  {product.image}
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography variant="overline" sx={{ color: "secondary.dark", fontWeight: 800 }}>
                    {product.category}
                  </Typography>
                  <Typography variant="h2">{product.title}</Typography>
                  <Stack direction="row" spacing={0.75} alignItems="center">
                    <StarRoundedIcon sx={{ color: "secondary.main" }} />
                    <Typography sx={{ fontWeight: 700 }}>{product.rating}</Typography>
                    <Typography color="text.secondary">리뷰 124</Typography>
                  </Stack>
                </Stack>

                <Typography variant="h4" color="primary" sx={{ fontWeight: 900 }}>
                  {product.price}
                </Typography>

                <Typography color="text.secondary" sx={{ fontSize: 17, lineHeight: 1.8 }}>
                  {product.summary}. 브랜드 소개, 배송 정보, 옵션, 소재 설명 등 실제 운영에 필요한
                  상품 상세 영역을 이 자리에 붙이면 됩니다.
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {product.tags.map((tag) => (
                    <Chip key={tag} label={tag} />
                  ))}
                </Stack>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button variant="contained" color="primary" size="large">
                    바로 구매
                  </Button>
                  <AddToCartButton product={product} label="장바구니 담기" />
                  <FavoriteToggleButton slug={product.slug} />
                </Stack>

                <Card sx={{ p: 3, bgcolor: "#fff8f1" }}>
                  <Typography sx={{ fontWeight: 800, mb: 1 }}>배송 안내</Typography>
                  <Typography color="text.secondary">
                    평일 오후 2시 이전 주문 시 당일 출고. 제주/도서산간 지역은 추가 배송비가
                    적용될 수 있습니다.
                  </Typography>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mb: 8 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Card sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Product Story
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  상세 페이지는 상단 비주얼, 구매 정보, 스토리 블록, 추천 상품으로 나누면
                  쇼핑몰 템플릿으로 쓰기 좋습니다. 여기서는 컴포넌트 기반 구조만 잡아두고,
                  실제 데이터 연결은 이후 프로젝트에서 교체할 수 있게 단순한 데이터 파일로
                  분리해두었습니다.
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Stack spacing={1.25}>
                  <Typography sx={{ fontWeight: 700 }}>소재</Typography>
                  <Typography color="text.secondary">우드, 알루미늄, 패브릭 마감</Typography>
                  <Typography sx={{ fontWeight: 700, mt: 2 }}>추천 포인트</Typography>
                  <Typography color="text.secondary">
                    공간을 과하게 채우지 않으면서 브랜드 무드를 만들 수 있는 미니멀 아이템
                  </Typography>
                </Stack>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ p: 3.5, height: "100%" }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  함께 보면 좋은 상품
                </Typography>
                <Stack spacing={2}>
                  {featuredProducts.slice(1, 4).map((item) => (
                    <Stack key={item.slug} direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 76,
                          height: 76,
                          borderRadius: 3,
                          bgcolor: item.accent,
                          display: "grid",
                          placeItems: "center",
                          fontWeight: 900,
                        }}
                      >
                        {item.image}
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
                        <Typography color="text.secondary">{item.price}</Typography>
                      </Box>
                    </Stack>
                  ))}
                  <Button endIcon={<EastRoundedIcon />}>추천 상품 더 보기</Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h4" sx={{ mb: 3 }}>
            Related Picks
          </Typography>
          <Grid container spacing={3}>
            {featuredProducts.slice(0, 3).map((item) => (
              <Grid key={item.slug} size={{ xs: 12, md: 4 }}>
                <ProductCard product={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <SiteFooter />
    </>
  );
}
