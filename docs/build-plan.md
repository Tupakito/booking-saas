# Plan de Build — Phase 2 (Si Validation GO)

> **Statut**: ⏸️ En attente validation | **Démarrage**: Lun 16/03 14h (si GO) | **Deadline**: Ven 20/03 18h

---

## Condition de démarrage

**≥ 10 pré-inscriptions collectées** par growth-agent d'ici Dim 15/03 12h.

Si condition remplie → GO immédiat Lundi 14h.
Si condition non remplie → Pivot ou ajustement (décision chief).

---

## Planning détaillé (5 jours)

### Jour 1 — Lun 16/03 : Auth Finalisation

**Objectif**: Login/register 100% fonctionnel, sessions sécurisées

| Tâche | Description | Livrable | Heure |
|-------|-------------|----------|-------|
| B1.1 | Finaliser config NextAuth v5 | `src/lib/auth.ts` | 14h-16h |
| B1.2 | Page login responsive | `src/app/login/page.tsx` | 16h-17h |
| B1.3 | Page register + création business | `src/app/register/page.tsx` | 17h-18h |
| B1.4 | Middleware protection /app/* | `src/middleware.ts` | 18h-19h |

**Definition of Done**:
- [ ] Inscription email fonctionnelle
- [ ] Connexion Google fonctionnelle
- [ ] Middleware redirige vers /login si non auth
- [ ] Session accessible dans Server Actions

---

### Jour 2 — Mar 17/03 : CRUD Services

**Objectif**: Dashboard pro pour gérer les prestations

| Tâche | Description | Livrable | Heure |
|-------|-------------|----------|-------|
| B2.1 | Schema validation Zod | `src/server/schemas/service.ts` | 14h-15h |
| B2.2 | Server Actions CRUD | `src/server/actions/services.ts` | 15h-17h |
| B2.3 | Liste services (table) | `src/app/(app)/services/page.tsx` | 17h-18h |
| B2.4 | Formulaire création/édition | `src/app/(app)/services/[id]/page.tsx` | 18h-20h |

**Definition of Done**:
- [ ] Créer un service (nom, durée, prix, description)
- [ ] Modifier un service
- [ ] Supprimer (soft delete)
- [ ] Liste avec statut actif/inactif

---

### Jour 3 — Mer 18/03 : Gestion Disponibilités

**Objectif**: Définir les créneaux récurrents par service

| Tâche | Description | Livrable | Heure |
|-------|-------------|----------|-------|
| B3.1 | Schema validation slots | `src/server/schemas/slot.ts` | 14h-15h |
| B3.2 | Server Actions slots | `src/server/actions/slots.ts` | 15h-16h |
| B3.3 | UI semaine type | Composant sélection jours/plages | 16h-18h |
| B3.4 | Sauvegarde et affichage | Intégration page service | 18h-20h |

**Definition of Done**:
- [ ] Sélection jours de la semaine
- [ ] Ajout plages horaires (début/fin)
- [ ] Suppression plage
- [ ] Visualisation récapitulative

---

### Jour 4 — Jeu 19/03 : Page Publique

**Objectif**: URL unique `/[slug]` avec calendrier de réservation

| Tâche | Description | Livrable | Heure |
|-------|-------------|----------|-------|
| B4.1 | Route dynamique [slug] | `src/app/(public)/[slug]/page.tsx` | 14h-15h |
| B4.2 | Affichage services | Liste avec prix/durée | 15h-16h |
| B4.3 | Génération créneaux disponibles | Fonction calcul | 16h-18h |
| B4.4 | Calendrier + sélection créneau | UI client | 18h-20h |
| B4.5 | Formulaire réservation | Nom, email, téléphone | 20h-21h |

**Definition of Done**:
- [ ] Page accessible via `/salon-marie`
- [ ] Sélection service
- [ ] Calendrier avec créneaux libres
- [ ] Formulaire réservation
- [ ] Création booking en DB (mode démo S1)

---

### Jour 5 — Ven 20/03 : Dashboard + Emails

**Objectif**: Vue pro des réservations et emails transactionnels

| Tâche | Description | Livrable | Heure |
|-------|-------------|----------|-------|
| B5.1 | Vue liste réservations | `src/app/(app)/calendar/page.tsx` | 14h-16h |
| B5.2 | Vue calendrier semaine | Composant calendrier | 16h-17h |
| B5.3 | Config Resend | `src/lib/resend.ts` | 17h-18h |
| B5.4 | Template email confirmation | HTML responsive | 18h-19h |
| B5.5 | Envoi automatique post-booking | Trigger Server Action | 19h-20h |

**Definition of Done**:
- [ ] Liste des réservations à venir
- [ ] Vue calendrier avec rendez-vous
- [ ] Email de confirmation envoyé au client
- [ ] Email de notification envoyé au pro

---

## Structure des dossiers (préparée)

```
src/
├── app/
│   ├── (app)/                    # Dashboard protégé
│   │   ├── layout.tsx            # Layout avec sidebar
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Vue d'ensemble
│   │   ├── services/
│   │   │   ├── page.tsx          # Liste services
│   │   │   ├── new/
│   │   │   │   └── page.tsx      # Création service
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Édition service
│   │   └── calendar/
│   │       └── page.tsx          # Vue calendrier
│   │
│   ├── (public)/                 # Pages publiques
│   │   └── [slug]/
│   │       └── page.tsx          # Page réservation client
│   │
│   ├── login/
│   │   └── page.tsx              # Login
│   ├── register/
│   │   └── page.tsx              # Register
│   └── api/
│       ├── auth/[...nextauth]/
│       │   └── route.ts          # NextAuth API
│       └── register/
│           └── route.ts          # API inscription
│
├── components/
│   ├── ui/                       # shadcn/ui
│   ├── forms/                    # Formulaires réutilisables
│   └── calendar/                 # Composants calendrier
│
├── lib/
│   ├── auth.ts                   # Config NextAuth
│   ├── prisma.ts                 # Client Prisma
│   ├── resend.ts                 # Config email
│   └── utils.ts                  # Helpers
│
├── server/
│   ├── actions/                  # Server Actions
│   │   ├── auth.ts
│   │   ├── services.ts
│   │   ├── slots.ts
│   │   └── bookings.ts
│   └── schemas/                  # Zod validations
│       ├── service.ts
│       ├── slot.ts
│       └── booking.ts
│
└── middleware.ts                 # Protection routes
```

---

## Dépendances externes

| Service | Usage | Config requise |
|---------|-------|----------------|
| Neon | PostgreSQL | `DATABASE_URL` |
| NextAuth | Authentification | `NEXTAUTH_SECRET`, `NEXTAUTH_URL` |
| Google OAuth | Login social | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` |
| Resend | Emails | `RESEND_API_KEY` |
| Vercel | Hosting | Connecté au repo |

---

## Points de vigilance

1. **Pas de feature creep** — Scope figé, pas de "et si on ajoutait..."
2. **Mobile-first** — Toutes les pages doivent être responsive
3. **Pas de tests automatisés S1** — Tests manuels uniquement (gain de temps)
4. **Pas de Stripe S1** — Paiement en mode démo uniquement
5. **Daily check-in** — 18h chaque jour, blocage = escalation immédiate

---

## Livrable final Ven 20/03

- [ ] Démo interne 16h
- [ ] Un coiffeur peut s'inscrire, créer ses services, recevoir une réservation
- [ ] Temps onboarding < 5 min
- [ ] Temps création service < 2 min
- [ ] Temps réservation client < 3 min

---

**Ready to build — en attente du GO Dimanche 14h**