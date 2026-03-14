```markdown
# Booking SaaS - Rendez

Plateforme de réservation en ligne pour professionnels.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Build de production (testé en local)
npm run build

# Démarrer le serveur
npm start
```

## ✅ Build Vercel - FONCTIONNEL

Le projet est configuré pour Vercel avec :
- `output: 'standalone'` dans next.config.js
- Structure App Router à la racine
- **Build testé et fonctionnel en local**

```bash
npm run build
# ✓ Compiled successfully
# ✓ Generating static pages (5/5)
# ✓ Finalizing page optimization
```

## 📁 Structure du projet

```
booking-saas/
├── app/                          # App Router Next.js 14
│   ├── (dashboard)/              # Groupe de routes dashboard
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Page dashboard pro
│   │   └── layout.tsx            # Layout avec navigation
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts      # API auth
│   ├── globals.css               # Styles globaux
│   ├── layout.tsx                # Layout racine
│   └── page.tsx                  # Landing page
├── components/
│   └── ui/                       # Composants UI (shadcn-like)
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   ├── prisma.ts                 # Client Prisma
│   └── utils.ts                  # Utilitaires
├── prisma/
│   └── schema.prisma             # Schéma de base de données
├── .env.example                  # Variables d'environnement
├── next.config.js                # Config Next.js (standalone)
├── package.json                  # Dépendances (à la racine)
├── postcss.config.js             # Config PostCSS
├── tsconfig.json                 # Config TypeScript
└── vercel.json                   # Config Vercel
```

## 🛠 Stack technique

- **Framework**: Next.js 14.2.5 (App Router)
- **Langage**: TypeScript 5.9.3
- **UI**: Composants React custom (inline styles)
- **Base de données**: Prisma 6.5.0 + PostgreSQL
- **Auth**: NextAuth v5 (Auth.js)

## 📝 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Développement |
| `npm run build` | Build de production |
| `npm start` | Serveur de production |
| `npm run lint` | Linter |

## ⚙️ Configuration Vercel

Le fichier `vercel.json` est configuré avec :
- `buildCommand`: npm run build
- `outputDirectory`: .next
- `framework`: nextjs
- `installCommand`: npm install

## 🔧 Variables d'environnement

Copier `.env.example` vers `.env` et configurer :
- `DATABASE_URL` - URL PostgreSQL
- `NEXTAUTH_SECRET` - Clé secrète JWT (min 32 caractères)
- `NEXTAUTH_URL` - URL de l'application

## 📄 Licence

Propriétaire - Tous droits réservés
```