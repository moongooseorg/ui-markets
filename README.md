# ticker-tracker

An Angular v20 standalone app that displays grouped market ticker data (TradingView widgets) on a
single responsive page. Designed to be embedded, chromeless, inside the `ui-shell` via an
`<iframe>` at the `/ticker-tracker` path prefix. It carries no header or navigation of its own; the
shell provides all chrome.

## Development

Requires Node 20.19+ or 22.12+.

```bash
npm install
npm start        # ng serve -> http://localhost:4200
npm run build    # production build -> dist/ticker-tracker/browser
```

## Structure

- `src/app/market-view/*` — the single page: iterates ticker groups
- `src/app/tradingview/ticker-multi.*` — embeds a TradingView tickers widget for a group
- `src/app/tickers.config.ts` — the ticker groups/symbols (edit here to change content)
- `src/app/theme.service.ts` — reads the shared `theme` localStorage key (same origin as the shell) and applies it

## Theme

The app is same-origin with the shell behind the reverse proxy, so it reads the shell's `theme`
value from `localStorage` on load and themes the widgets accordingly.

## Docker

Multi-stage build (Node → nginx), served on port **8080** internally. The image is built with
`--base-href=/ticker-tracker/` so assets resolve behind the proxy's path prefix.

```bash
docker build -t ticker-tracker .
docker run -p 8083:8080 ticker-tracker
```

## Deployment

`.github/workflows/build-deploy.yml` builds a `linux/arm64` image, pushes it to GHCR, and deploys
via `docker-compose.yml` (contract: `APP_NAME`, `IMAGE`, `HOST_PORT` → `8080`). Host port **8083**.
The reverse proxy routes `PathPrefix(/ticker-tracker)` to this host port (see
`docker-reverse-proxy/dynamic/ticker-tracker.yml`).
