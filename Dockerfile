# syntax=docker/dockerfile:1

# Mehrstufiger Build. Die Bauwerkzeuge bleiben in den frühen Stufen zurück; im
# Laufzeit-Image liegt am Ende nur, was der Server tatsächlich ausführt.
#
# Node 22 ist die aktuelle LTS-Reihe. Node 20 ist seit April 2026 aus der
# Wartung und bekommt keine Sicherheitsaktualisierungen mehr.

# ---------------------------------------------------------------------------
# Stufe 1: alle Abhängigkeiten, reproduzierbar aus der Lockdatei.
# ---------------------------------------------------------------------------
FROM node:22-alpine AS abhaengigkeiten
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# ---------------------------------------------------------------------------
# Stufe 2: Next bauen.
#
# Eine dritte Stufe für die Produktionsabhängigkeiten braucht es hier nicht:
# `output: "standalone"` legt in .next/standalone bereits einen Server samt der
# node_modules ab, die er wirklich anfasst.
# ---------------------------------------------------------------------------
FROM node:22-alpine AS bau
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=abhaengigkeiten /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------------------------------------------------------------------------
# Stufe 3: Laufzeit.
# ---------------------------------------------------------------------------
FROM node:22-alpine AS laufzeit
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Ein eigener, unprivilegierter Benutzer. Nichts hier muss als root laufen.
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Die Anwendungsdateien gehören bewusst root und sind für nextjs nur lesbar:
# Der Server hat keinen Grund, sich selbst zu überschreiben.
COPY --from=bau /app/public ./public
COPY --from=bau /app/.next/standalone ./
COPY --from=bau /app/.next/static ./.next/static

# Der Bildoptimierer von Next legt seinen Zwischenspeicher unter .next/cache ab.
# Das Dateisystem ist im Betrieb schreibgeschützt (siehe docker-compose.yaml);
# compose hängt dort ein tmpfs ein, und dieses Verzeichnis ist der Haken dafür.
RUN mkdir -p .next/cache && chown nextjs:nodejs .next/cache

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
