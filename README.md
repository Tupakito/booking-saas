# Rendez — SaaS de réservation pour commerces locaux

> **Statut** : 🔍 Phase validation (48h) — Landing en cours

## Vision

Permettre aux coiffeurs et artisans du bien-être de recevoir des réservations en ligne en 5 minutes, sans compte client obligatoire pour leurs clients.

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | Next.js Server Actions + API Routes |
| Database | PostgreSQL (Neon) |
| ORM | Prisma |
| Auth | Auth.js (NextAuth v5) |
| Email | Resend |
| Paiement | Stripe Connect (S2 — démo S1) |
| Hosting | Vercel |

## Démarrage rapide

```bash
# 1. Cloner et installer
git clone <repo>
cd booking-saas
npm install

# 2. Variables d'environnement
cp .env.example .env.local
# Remplir : DATABASE_URL, NEXTAUTH_SECRET, etc.

# 3. Database
npx prisma migrate dev
npx prisma db seed

# 4. Dev server
npm run dev
```

## Structure du projet

```
src/
├── app/                 # Next.js App Router
│   ├── (marketing)/     # Landing, pricing
│   ├── (auth)/          # Login, register
│   ├── (app)/           # Dashboard pro (auth requis)
│   └── (public)/        # Pages réservation client
├── components/          # Composants React
├── lib/                 # Configs (prisma, auth, etc.)
├── server/              # Server Actions + queries
└── types/               # Types TypeScript
```

## Documentation

- [Architecture technique](./docs/architecture.md)
- [Plan Sprint 1](./docs/sprint-1.md)

## Équipe

- **Chief-agent** : Cadrage, priorisation
- **Dev-agent** : Implémentation technique
- **Growth-agent** : Validation marché, acquisition

---

_Licence : Propriétaire — Startup en cours de création_