# Architecture Technique

## Overview

Booking SaaS est une application monolithique full-stack construite avec Next.js 15.

## Stack

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 15.5 | Framework React (App Router) |
| TypeScript | 5.x | Typage strict |
| Tailwind CSS | 3.4 | Styling utilitaire |
| Prisma | 6.5 | ORM base de données |
| Auth.js | 5.0 | Authentification |
| PostgreSQL | - | Base de données |

## Architecture des dossiers

```
src/
├── app/                    # App Router Next.js 15
│   ├── login/page.tsx      # Auth - Connexion
│   ├── register/page.tsx   # Auth - Inscription
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── globals.css         # Styles globaux
├── components/             # Composants React
└── lib/
    ├── prisma.ts           # Client Prisma singleton
    ├── auth.ts             # Config NextAuth (placeholder)
    └── utils.ts            # Fonctions utilitaires (cn, etc.)

prisma/
└── schema.prisma           # Schéma DB complet
```

## Modèle de données

### Relations

```
User 1-->* Business
Business 1-->* Service
Service 1-->* Availability
Business 1-->* Booking
Service 1-->* Booking
User 1-->* Booking
```

### Entités

| Entité | Description |
|--------|-------------|
| User | Utilisateur (propriétaire ou client) |
| Business | Entreprise/activité |
| Service | Service proposé (nom, prix, durée) |
| Availability | Créneaux disponibles |
| Booking | Réservation |

## Build

✅ **Build production fonctionnel** - Testé avec `next build`
- Routes statiques générées : `/`, `/login`, `/register`
- Zero vulnerability (npm audit)