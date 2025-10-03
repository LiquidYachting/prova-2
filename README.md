# Liqüid Yachting — Web (Next.js 14 + Tailwind)

## 🚀 Desenvolupament local
```bash
npm install
npm run dev
```

Obre http://localhost:3000

## 🌐 i18n
Està configurat `next.config.js` amb les locales: `ca` (per defecte), `es`, `en`, `fr`.

## 📨 Formulari de contacte
El formulari envia a Formspree. Pots canviar l'endpoint via `.env.local`:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xqaybned
```

## 🧩 Estructura
- `app/` pàgines (Home, Catalog, Services, Buy-Sell, About, Contact)
- `data/boats.json` dades de demo
- `app/api/boats/[slug]/pdf` endpoint demo de dossier
- `public/` imatges (posa-hi les teves)

## ☁️ Deploy
- **Vercel**: importa el repo, variables d'entorn si cal i desplega.
- **SiteGround**: build i servir `.next` amb Node 18.

## 🔒 SEO/Seguretat (pendents)
Sitemap, robots, schema.org, WAF Cloudflare i optimitzacions es poden afegir en següents commits.
