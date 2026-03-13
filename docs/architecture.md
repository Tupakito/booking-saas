# Architecture Technique

## Overview

Booking SaaS est une application monolithique full-stack construite avec Next.js 14.

## Architecture des dossiers

```
src/
├── app/                    # App Router Next.js 14
│   ├── (auth)/            # Route group pour auth
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (dashboard)/       # Route group protégé
│   │   ├── dashboard/page.tsx
│   │   ├── services/page.tsx
│   │   ├── bookings/page.tsx
│   │   └── settings/page.tsx
│   ├── api/               # API Routes
│   │   ├── auth/[...nextauth]/route.ts
│   │   └── webhooks/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css
├── components/
│   ├── ui/                # Composants UI de base
│   ├── forms/             # Formulaires
│   └── layout/            # Layout components
└── lib/
    ├── prisma.ts          # Client Prisma singleton
    ├── auth.ts            # Config NextAuth
    └── utils.ts           # Fonctions utilitaires
```

## Modèle de données

### Relations principales

```
User 1-->* Business
Business 1-->* Service
Service 1-->* Availability
Business 1-->* Booking
Service 1-->* Booking
User 1-->* Booking
```

### Entités

- **User** : Utilisateur de la plateforme (propriétaire ou client)
- **Business** : Entreprise/activité (un user peut avoir plusieurs businesses)
- **Service** : Service proposé (nom, prix, durée)
- **Availability** : Créneaux disponibles pour un service
- **Booking** : Réservation (client + service + créneau)

## Flux d'authentification

1. **Inscription** : Credentials (email/password) ou OAuth (Google)
2. **Connexion** : Session JWT gérée par NextAuth
3. **Protection** : Middleware Next.js pour routes protégées

## API Design

- RESTful API via Next.js API Routes
- Actions serveur pour les mutations simples
- Validation avec Zod

## Sécurité

- Authentification via NextAuth v5
- CSRF protection intégrée
- Rate limiting sur les API sensibles
- Validation stricte des inputs (Zod)