import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Divider sx={{ mb: 5 }} />
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
              MarketPlay
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 360 }}>
              브랜드 셀렉션과 에디토리얼 감도를 함께 담은 쇼핑몰 템플릿입니다.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 700 }}>Shop</Typography>
              <Typography color="text.secondary">New In</Typography>
              <Typography color="text.secondary">Collections</Typography>
              <Typography color="text.secondary">Gift</Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 700 }}>About</Typography>
              <Typography color="text.secondary">Brand Story</Typography>
              <Typography color="text.secondary">Journal</Typography>
              <Typography color="text.secondary">Support</Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography color="text.secondary">hello@marketplay.co.kr</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
