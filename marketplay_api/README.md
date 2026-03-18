# marketplay_api

Spring Boot 4.0.3 / Java 21 API for the MarketPlay template.

## Included

- Product list/detail API
- Wishlist toggle API
- Cart API
- PostgreSQL + Flyway
- Redis dependency for future cache/session usage
- Actuator health endpoints

## Endpoints

- `GET /api/products`
- `GET /api/products/{slug}`
- `GET /api/wishlist`
- `POST /api/wishlist/toggle`
- `GET /api/cart`
- `POST /api/cart`
- `DELETE /api/cart/{slug}`

## Run

```bash
./gradlew bootRun
```
