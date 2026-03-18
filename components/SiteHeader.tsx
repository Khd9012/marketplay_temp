"use client";

import Link from "next/link";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar,
  Badge,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import useShopStore from "@/features/commerce/hooks/useShopStore";

const menuItems = ["New In", "Collections", "Best", "Story", "Gift"];

export default function SiteHeader() {
  const { cartCount, wishlistCount, openCartDrawer } = useShopStore();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(21, 32, 35, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: 2, py: 1.5 }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ minWidth: 220 }}>
            <IconButton
              sx={{
                display: { xs: "inline-flex", md: "none" },
                bgcolor: "rgba(29,77,79,0.08)",
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Link href="/">
              <Typography variant="h5" sx={{ fontWeight: 900 }}>
                MarketPlay
              </Typography>
            </Link>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" }, flex: 1, justifyContent: "center" }}
          >
            {menuItems.map((item) => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "auto" }}>
            <IconButton sx={{ bgcolor: "rgba(29,77,79,0.08)" }}>
              <SearchRoundedIcon />
            </IconButton>
            <IconButton sx={{ bgcolor: "rgba(29,77,79,0.08)" }}>
              <Badge badgeContent={wishlistCount} color="secondary">
                <FavoriteBorderRoundedIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{ bgcolor: "rgba(29,77,79,0.08)" }} onClick={openCartDrawer}>
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{ bgcolor: "rgba(29,77,79,0.08)" }}>
              <PersonOutlineRoundedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
