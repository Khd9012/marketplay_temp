# marketplay_temp

MarketPlay monorepo template for storefront, API, and mobile expansion.

## Apps

- `marketplay_fo`: Next.js storefront
- `marketplay_api`: Spring Boot 4.0 API
- `marketplay_mo`: mobile workspace placeholder

## Stack

- Frontend: Next.js 16
- API: Spring Boot 4.0.3 / Java 21
- DB: PostgreSQL
- Cache: Redis
- Infra: Docker Compose

## Quick Start

### Run with Docker

```bash
docker compose up --build
```

- Storefront: `http://localhost:9191`
- API: `http://localhost:19092/api/products`
- Actuator health: `http://localhost:19092/actuator/health`

### Run apps separately

```bash
cd marketplay_api
./gradlew bootRun
```

```bash
cd marketplay_fo
npm run dev
```
