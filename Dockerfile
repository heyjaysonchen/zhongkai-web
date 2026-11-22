FROM oven/bun:1.4.2 AS bun

FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun
COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

COPY . .
# Optional public values embedded in the browser bundle.
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
# Lovable defaults to a Cloudflare Worker. Build a standalone Node server for Docker.
RUN NITRO_PRESET=node-server npm run build

FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=8113
COPY --from=build /app/.output ./.output
USER node
EXPOSE 8113/tcp
CMD ["node", ".output/server/index.mjs"]
