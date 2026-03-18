import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline } from "@mui/material";
import ThemeRegistry from "@/components/ThemeRegistry";
import CartDrawer from "@/features/commerce/components/CartDrawer";
import ShopStoreProvider from "@/features/commerce/context/ShopStoreProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarketPlay Template",
  description: "Shopping mall style Next.js template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeRegistry>
            <ShopStoreProvider>
              <CssBaseline />
              {children}
              <CartDrawer />
            </ShopStoreProvider>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
