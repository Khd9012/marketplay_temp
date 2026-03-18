import EastRoundedIcon from "@mui/icons-material/EastRounded";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getHomepageData } from "@/lib/api/catalog";

const perks = [
  { icon: <LocalShippingOutlinedIcon />, text: "7만원 이상 무료배송" },
  { icon: <VerifiedRoundedIcon />, text: "셀렉트 브랜드 정품 보장" },
  { icon: <WorkspacePremiumRoundedIcon />, text: "회원 전용 리워드 적립" },
];

export default async function HomePage() {
  const { brandRows, categories, curatedCollections, featuredProducts } = await getHomepageData();

  return (
    <>
      <SiteHeader />
      <Box component="main">
        <Container maxWidth="xl" sx={{ py: { xs: 4, md: 7 } }}>
          <Grid container spacing={3} sx={{ mb: 8 }}>
            <Grid size={{ xs: 12, lg: 7 }}>
              <Card
                sx={{
                  minHeight: 520,
                  p: { xs: 3, md: 5 },
                  background:
                    "linear-gradient(135deg, rgba(29,77,79,1) 0%, rgba(38,98,100,1) 65%, rgba(240,155,85,0.85) 100%)",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Stack spacing={3} sx={{ maxWidth: 560 }}>
                  <Chip
                    label="Spring Collection 2026"
                    sx={{
                      alignSelf: "flex-start",
                      bgcolor: "rgba(255,255,255,0.15)",
                      color: "white",
                    }}
                  />
                  <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 74 } }}>
                    일상에 감도를 더하는
                    <br />
                    셀렉트 마켓
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: 18 }}>
                    `arayo_www`처럼 섹션이 많은 구조를 참고하되, 쇼핑몰 템플릿으로 가볍게
                    재조합한 데모입니다.
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Button
                      href="/products"
                      variant="contained"
                      color="secondary"
                      endIcon={<EastRoundedIcon />}
                    >
                      상품 둘러보기
                    </Button>
                    <Button
                      href="/products/atelier-speaker"
                      variant="outlined"
                      sx={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
                    >
                      대표 상품 보기
                    </Button>
                  </Stack>
                </Stack>

                <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ pt: 4 }}>
                  {perks.map((perk) => (
                    <Card
                      key={perk.text}
                      sx={{
                        flex: 1,
                        p: 2,
                        bgcolor: "rgba(255,255,255,0.12)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow: "none",
                      }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar sx={{ bgcolor: "rgba(255,255,255,0.16)" }}>{perk.icon}</Avatar>
                        <Typography sx={{ fontWeight: 700 }}>{perk.text}</Typography>
                      </Stack>
                    </Card>
                  ))}
                </Stack>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, lg: 5 }}>
              <Stack spacing={3} sx={{ height: "100%" }}>
                <Card sx={{ p: 3.5, flex: 1, bgcolor: "#fff7ef" }}>
                  <Typography variant="overline" sx={{ color: "secondary.dark", fontWeight: 800 }}>
                    Curated Picks
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1, mb: 1.5 }}>
                    오늘의 감도 높은 추천
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    기획전, 세트 제안, 시즌성 배너 같은 블록을 단정하게 얹기 좋은 영역입니다.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {categories.map((item) => (
                      <Chip key={item} label={item} variant="outlined" />
                    ))}
                  </Stack>
                </Card>

                <Card sx={{ p: 3.5, flex: 1, bgcolor: "#f4f0e8" }}>
                  <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 800 }}>
                    Brand Focus
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 1, mb: 2 }}>
                    미니멀 브랜드 셀렉션
                  </Typography>
                  <Stack spacing={1.25}>
                    {brandRows.map((brand) => (
                      <Stack
                        key={brand}
                        direction="row"
                        justifyContent="space-between"
                        sx={{
                          py: 1.25,
                          borderBottom: "1px solid rgba(21,32,35,0.08)",
                        }}
                      >
                        <Typography sx={{ fontWeight: 700 }}>{brand}</Typography>
                        <Typography color="text.secondary">Featured</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          <SectionHeading
            eyebrow="Featured"
            title="베스트셀러로 보는 템플릿 메인 상품 섹션"
            description="카드형 상품 리스트와 배지, 가격, 평점 영역을 컴포넌트로 정리해 CSS 부담을 줄였습니다."
          />
          <Grid container spacing={3} sx={{ mb: 10 }}>
            {featuredProducts.map((product) => (
              <Grid key={product.slug} size={{ xs: 12, sm: 6, xl: 3 }}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>

          <SectionHeading
            eyebrow="Collections"
            title="기획전과 스토리 섹션"
            description="메인 중간에는 기획전, 브랜드 스토리, 시즌 추천 블록을 섞어 쇼핑몰답게 리듬을 만들었습니다."
          />
          <Grid container spacing={3} sx={{ mb: 10 }}>
            {curatedCollections.map((collection, index) => (
              <Grid key={collection.title} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    p: 3.5,
                    minHeight: 240,
                    background:
                      index === 0
                        ? "linear-gradient(180deg, #f4ebe2 0%, #fffdf9 100%)"
                        : index === 1
                          ? "linear-gradient(180deg, #e8f0ed 0%, #fffdf9 100%)"
                          : "linear-gradient(180deg, #eef1f6 0%, #fffdf9 100%)",
                  }}
                >
                  <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 700 }}>
                    Editorial {index + 1}
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 1.5, mb: 1.5 }}>
                    {collection.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    {collection.description}
                  </Typography>
                  <Button href="/products" color="primary" endIcon={<EastRoundedIcon />}>
                    더 보기
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Card
            sx={{
              p: { xs: 3, md: 4.5 },
              background: "linear-gradient(135deg, #152023 0%, #203338 100%)",
              color: "white",
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="h3" sx={{ mb: 1.5 }}>
                  멤버십 제안 배너도 바로 붙일 수 있게
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.72)" }}>
                  쿠폰, 앱 유도, 첫 구매 혜택, 뉴스레터 CTA 같은 요소를 넣기 좋은 하단 배너입니다.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="flex-end">
                  <Button variant="contained" color="secondary">
                    회원 가입
                  </Button>
                  <Button variant="outlined" sx={{ color: "white", borderColor: "rgba(255,255,255,0.36)" }}>
                    앱 다운로드
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
      <SiteFooter />
    </>
  );
}
