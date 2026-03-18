"use client";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useShopStore from "@/features/commerce/hooks/useShopStore";

export default function CartDrawer() {
  const {
    cartDrawerOpen,
    cartItems,
    closeCartDrawer,
    removeFromCart,
    changeQuantity,
  } = useShopStore();

  const totalPrice = cartItems.reduce((sum, item) => {
    const numeric = Number(item.product.price.replace(/[^\d]/g, ""));
    return sum + numeric * item.quantity;
  }, 0);

  return (
    <Drawer anchor="right" open={cartDrawerOpen} onClose={closeCartDrawer}>
      <Box sx={{ width: { xs: 360, sm: 420 }, p: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
          장바구니
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          담은 상품을 간단히 확인하고 결제 흐름으로 연결할 수 있는 예시입니다.
        </Typography>

        <Stack spacing={2.5}>
          {cartItems.length === 0 ? (
            <Typography color="text.secondary">아직 담긴 상품이 없습니다.</Typography>
          ) : (
            cartItems.map((item) => (
              <Box key={item.product.slug}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: 3,
                      bgcolor: item.product.accent,
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 900,
                    }}
                  >
                    {item.product.image}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: 800 }}>{item.product.title}</Typography>
                    <Typography color="text.secondary">{item.product.price}</Typography>
                  </Box>
                  <IconButton onClick={() => removeFromCart(item.product.slug)}>
                    <DeleteOutlineRoundedIcon />
                  </IconButton>
                </Stack>
                <TextField
                  type="number"
                  label="수량"
                  size="small"
                  value={item.quantity}
                  onChange={(event) =>
                    changeQuantity(item.product.slug, Number(event.target.value || 0))
                  }
                  sx={{ mt: 1.5, width: 120 }}
                  slotProps={{
                    htmlInput: {
                      min: 0,
                    },
                  }}
                />
                <Divider sx={{ mt: 2.5 }} />
              </Box>
            ))
          )}
        </Stack>

        <Box sx={{ mt: 4 }}>
          <Typography color="text.secondary">예상 결제 금액</Typography>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 900, mb: 2 }}>
            {`${totalPrice.toLocaleString("ko-KR")}원`}
          </Typography>
          <Button fullWidth variant="contained" color="primary" size="large">
            주문서로 이동
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
