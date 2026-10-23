# syntax=docker/dockerfile:1

# Eine einzige statische Seite, kein Build-Schritt: Caddy plus site/.
FROM caddy:2-alpine

ENV XDG_CONFIG_HOME=/tmp \
    XDG_DATA_HOME=/tmp

# Port 3013 liegt über 1024; die Datei-Fähigkeit des Caddy wird nicht gebraucht
# und würde bei cap_drop ALL den Start verhindern (siehe prototype.flowstate.express).
RUN apk add --no-cache libcap \
 && setcap -r /usr/bin/caddy \
 && apk del libcap

COPY Caddyfile /etc/caddy/Caddyfile
COPY site/ /srv/

EXPOSE 3013
