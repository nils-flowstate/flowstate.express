# flowstate.express

Offene Willkommensseite von Flowstate Express: „Hier entsteht etwas Magisches.
Unseren Gefühlen Farbe verleihen.“ Mit Weg zum Prototyp unter
<https://prototype.flowstate.express>.

## Aufbau

```
site/index.html      die Seite (CSS inline, keine Skripte)
site/assets/         Schriften (Fraunces, DM Sans, Caveat) und Logo, lokal
Caddyfile            Caddy im Container, Port 3013, Sicherheitskopfzeilen
Dockerfile           Caddy plus site/
compose.yaml         Container flowstate-express im Netz proxy, Port 127.0.0.1:3013
docker/              Kopie des Bausteins für den zentralen Caddy
```

## Lokal ansehen

```bash
docker compose up --build   # nur wenn kein Branch offen ist, sonst lk test
curl -I http://127.0.0.1:3013/
```

## Live-Gang (gebündelt mit dem Prototyp-Umzug)

1. Prototyp-Branch live (Container `prototype-flowstate-express` liefert dann
   `prototype.flowstate.express` aus).
2. Zentralen Caddy ändern: `flowstate.express` auf `flowstate-express:3013`,
   `prototype.flowstate.express` auf `prototype-flowstate-express:3006`,
   `prototyp.flowstate.express` auf `prototype.` umleiten (Sicherung,
   `caddy validate`, Reload).
3. `lk einrichten` für beide Projekte.
