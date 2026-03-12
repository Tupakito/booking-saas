# Architecture MVP — Rendez

## Vue d'ensemble

```mermaid
┌─────────────────────────────────────────┐
│           Landing (marketing)           │
│    Pré-inscription, pricing, contact    │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│           Auth (NextAuth)               │
│    Email + Google OAuth                 │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│         Dashboard Pro (app)             │
│  ┌─────────┐ ┌─────────┐ ┌──────────┐ │
│  │ Services│ │Calendar │ │ Settings │ │
│  │   CRUD  │ │  View   │ │ + Stripe │ │
│  └─────────┘ └─────────┘ └──────────┘ │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│      Page Publique Réservation          │
│   /[slug] → Calendrier → Confirmation   │
│   (Paiement en mode démo S1)            │
└─────────────────────────────────────────┘
```

## Stack détaillée

### Frontend
- **Next.js 14** avec App Router
- **TypeScript** strict (`strict: true`)
- **Tailwind CSS** pour le styling
- **shadcn/ui** pour les composants de base (boutons, inputs, calendrier)

### Backend
- **Server Actions** pour les mutations (CRUD, réservations)
- **API Routes** uniquement pour les webhooks (Stripe S2)
- **Middleware** Next.js pour la protection des routes

### Database
- **PostgreSQL** via Neon (serverless)
- **Prisma** comme ORM avec migrations versionnées

### Auth
- **Auth.js (NextAuth v5)** avec adapter Prisma
- Providers : Credentials (email/password) + Google OAuth
- Sessions JWT côté client, vérification côté serveur

### Email
- **Resend** pour les emails transactionnels
- Templates : confirmation réservation (client + pro)

### Paiement (S2)
- **Stripe Connect Express** pour onboarding marchands
- **Stripe Checkout** pour paiement client
- Webhook pour confirmation automatique

## Modèle de données

### Entités principales

```
User (pro)
├── Business (1:1)
│   ├── slug (unique, URL publique)
│   ├── name, description
│   └── stripeAccountId (nullable)
├── Services (1:n)
│   ├── name, duration (min), price (cents)
│   ├── isActive
│   └── slots (disponibilités)
├── Slots (disponibilités récurrentes)
│   ├── dayOfWeek (0-6)
│   ├── startTime, endTime
│   └── serviceId
└── Bookings (réservations)
    ├── customerName, customerEmail
    ├── startTime, endTime
    ├── status (PENDING, CONFIRMED, CANCELLED)
    └── serviceId
```

### Schéma Prisma

Voir [prisma/schema.prisma](../prisma/schema.prisma)

## Flux utilisateurs

### 1. Onboarding Pro

```
1. Landing → CTA "Créer mon compte"
2. Register (email/Google)
3. Compléter profil business (nom, slug)
4. (S1 optionnel) Lien Stripe Connect onboarding
5. Dashboard → Ajouter premier service
```

### 2. Configuration Services

```
Dashboard > Services > "Nouveau service"
├── Nom (ex: "Coupe homme")
├── Durée (ex: 30 min)
├── Prix (ex: 25€)
└── Disponibilités
    ├── Lundi: 09:00-12:00, 14:00-18:00
    ├── Mardi: 09:00-12:00, 14:00-18:00
    └── etc.
```

### 3. Réservation Client (S1 — mode démo)

```
1. Client reçoit lien /[slug] (ex: rendez.co/salon-marie)
2. Sélectionne service
3. Choisit date → calendrier affiche créneaux disponibles
4. Sélectionne créneau
5. Remplit nom + email
6. (S1) "Confirmer" → réservation enregistrée, email envoyé
   (S2) Redirection Stripe Checkout → paiement → confirmation
```

## Conventions de code

### Structure des fichiers

```
src/
├── app/
│   ├── (marketing)/        # Groupe sans layout auth
│   ├── (auth)/             # Layout minimal auth
│   ├── (app)/              # Layout dashboard avec sidebar
│   │   ├── dashboard/
│   │   ├── services/
│   │   ├── calendar/
│   │   └── settings/
│   └── (public)/           # Pages réservation publique
│       └── [slug]/
├── components/
│   ├── ui/                 # shadcn/ui (boutons, inputs...)
│   ├── forms/              # Formulaires métier
│   └── calendar/           # Composants calendrier
├── lib/
│   ├── prisma.ts           # Singleton Prisma
│   ├── auth.ts             # Config Auth.js
│   └── utils.ts            # Helpers (cn, formatters)
├── server/
│   ├── actions/            # Server Actions
│   │   ├── auth.ts
│   │   ├── services.ts
│   │   ├── slots.ts
│   │   └── bookings.ts
│   └── queries/            # Requêtes complexes
└── types/                  # Types globaux
```

### Naming

- **Fichiers** : `kebab-case.tsx`
- **Composants** : `PascalCase`
- **Fonctions** : `camelCase`
- **Server Actions** : suffixe `Action` (ex: `createServiceAction`)
- **Types** : `PascalCase` avec suffixe explicite

### Patterns

1. **Server Components par défaut** — `'use client'` uniquement pour interactivité
2. **Server Actions pour mutations** — Pas d'API routes sauf webhooks
3. **Colocation** — Fichiers liés proches (`page.tsx`, `actions.ts`, `schema.ts`)
4. **Validation** — Zod pour tous les inputs (forms + Server Actions)

## Sécurité

- **Auth** : Middleware Next.js protège routes `/app/*`
- **CSRF** : Géré automatiquement par Server Actions
- **SQL Injection** : Prisma query builder (safe by default)
- **XSS** : React escape automatique + validation inputs Zod

## Performance (S1)

- **Database** : Indexes sur `Business.slug`, `Booking.startTime`, `Slot.dayOfWeek`
- **Rendering** : Server Components par défaut, streaming où pertinent
- **Images** : Next.js Image component avec optimisation

## Roadmap technique

| Sprint | Focus | Livrables clés |
|--------|-------|----------------|
| S1 | MVP Core | Auth, services, dispos, page publique, emails |
| S2 | Paiement | Stripe Connect, Checkout, webhooks, vrai paiement |
| S3 | Fidélisation | Rappels SMS, sync calendriers, multi-employés |
| S4 | Scale | Analytics, optimisations, internationalisation |

## Décisions reportées

| Sujet | Décision | Raison |
|-------|----------|--------|
| Paiement S1 | Mode démo uniquement | Complexité Stripe Connect, validation marché prioritaire |
| SMS | S2 | Coût, priorité email pour S1 |
| Multi-employés | S3 | MVP cible indépendants solo |
| Mobile app | Non | PWA si besoin futur |