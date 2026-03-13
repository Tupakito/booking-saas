# Architecture MVP — Rendez

> **Version**: 1.1.0 | **Statut**: 🏗️ Prêt pour build | **Mise à jour**: 13/03/2024

---

## 🎯 Contexte

Suite à la décision #37, l'architecture est **prête pour implémentation** mais le build est **en attente de validation marché** (48h).

- **Si validation GO** (≥10 pré-inscriptions) → Build démarre Lun 16/03
- **Si validation NO-GO** → Pivot ou ajustement avant build

---

## Vue d'ensemble

```mermaid
┌─────────────────────────────────────────┐
│           Landing (marketing)           │
│    🔍 VALIDATION EN COURS (48h)         │
└─────────────────────────────────────────┘
                    │
                    ▼ (si GO)
┌─────────────────────────────────────────┐
│           Auth (NextAuth v5)            │
│    ⏸️ PRÊT — Implémentation Lun 16/03   │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│         Dashboard Pro (app)             │
│  ┌─────────┐ ┌─────────┐ ┌──────────┐ │
│  │ Services│ │Calendar │ │ Settings │ │
│  │   CRUD  │ │  View   │ │ + Stripe │ │
│  └─────────┘ └─────────┘ └──────────┘ │
│         ⏸️ PRÊT — J2-J5                │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│      Page Publique Réservation          │
│   /[slug] → Calendrier → Confirmation   │
│         ⏸️ PRÊT — J4                   │
└─────────────────────────────────────────┘
```

---

## Stack confirmée

| Couche | Technologie | Statut |
|--------|-------------|--------|
| Frontend | Next.js 14 App Router | ✅ Prêt |
| Styling | Tailwind CSS + shadcn/ui | ✅ Prêt |
| Backend | Next.js Server Actions | ✅ Prêt |
| Database | PostgreSQL (Neon) | ✅ Prêt |
| ORM | Prisma | ✅ Prêt |
| Auth | Auth.js v5 | ⏸️ Implémentation J1 |
| Email | Resend | ⏸️ Implémentation J5 |
| Payment | Stripe Connect | ⏸️ S2 uniquement |
| Hosting | Vercel | ✅ Prêt |

---

## Modèle de données

### Schéma Prisma — ✅ COMPLET

Le schéma est finalisé et prêt :

```
✅ users, accounts, sessions, verificationtokens (Auth)
✅ businesses (Profil pro avec slug unique)
✅ services (Prestations)
✅ slots (Disponibilités récurrentes)
✅ bookings (Réservations)
✅ enums: BookingStatus, PaymentStatus
```

Voir [prisma/schema.prisma](../prisma/schema.prisma)

---

## Flux utilisateurs (spécifications)

### 1. Onboarding Pro (objectif: < 5 min)

```
Landing → Register (email/password) → Création Business (nom, slug)
→ Dashboard → Ajouter Service → Définir Disponibilités
→ Page publique prête
```

### 2. Réservation Client (objectif: < 3 min)

```
Accès /[slug] → Sélection Service → Choix date
→ Calendrier avec créneaux disponibles → Sélection créneau
→ Formulaire (nom, email) → Confirmation + email
```

---

## Structure des fichiers (prévue)

```
src/
├── app/
│   ├── (app)/                    # Dashboard (auth requis)
│   │   ├── layout.tsx            # Layout avec sidebar
│   │   ├── dashboard/            # Vue d'ensemble
│   │   ├── services/             # CRUD prestations
│   │   └── calendar/             # Vue calendrier
│   │
│   ├── (public)/                 # Pages publiques
│   │   └── [slug]/               # Page réservation
│   │
│   ├── login/                    # Page login
│   ├── register/                 # Page register
│   └── api/                      # API routes
│       ├── auth/[...nextauth]/   # NextAuth
│       └── register/             # API inscription
│
├── components/                   # Composants React
├── lib/                          # Configs
├── server/                       # Server Actions + schemas
└── middleware.ts                 # Protection routes
```

---

## Conventions de code (à suivre)

### Naming
- Fichiers: `kebab-case.tsx`
- Composants: `PascalCase`
- Server Actions: suffixe `Action`
- Fonctions: `camelCase`

### Patterns
1. **Server Components par défaut**
2. **Server Actions pour mutations**
3. **Zod pour validation**
4. **Colocation** (fichiers liés proches)

---

## Planning implémentation

| Jour | Date | Focus | Livrable |
|------|------|-------|----------|
| J1 | Lun 16/03 | Auth | Login/register fonctionnels |
| J2 | Mar 17/03 | Services | CRUD prestations |
| J3 | Mer 18/03 | Disponibilités | UI créneaux |
| J4 | Jeu 19/03 | Page publique | `/[slug]`, calendrier |
| J5 | Ven 20/03 | Dashboard + Emails | Vue réservations, notifications |

---

## Risques techniques

| Risque | Probabilité | Mitigation |
|--------|-------------|------------|
| NextAuth v5 instable (beta) | Moyenne | Tests exhaustifs J1, fallback v4 si bloquant |
| Conflits réservation (race) | Faible | Transactions Prisma, row locking |
| Performance calendrier | Faible | Indexes DB, pagination si besoin |
| Complexité slots | Moyenne | Librairie date-fns, pas de custom complexe |

---

## Décisions reportées (S2+)

| Feature | Raison |
|---------|--------|
| Paiement Stripe | Complexité Connect, mode démo suffisant S1 |
| SMS | Coût, email prioritaire |
| Multi-employés | MVP cible indépendants solo |
| Analytics | Pas critique pour démo |

---

## Prochaines étapes

1. **Attendre validation** (Dim 15/03 14h)
2. **Si GO** → Démarrage build Lun 16/03 14h
3. **Daily check-ins** → 18h chaque jour
4. **Démo finale** → Ven 20/03 16h

---

*Architecture prête — en attente du feu vert pour construction*