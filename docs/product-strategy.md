# Product Strategy — Rendez

> **Version** : 2.0.0  
> **Date** : 2026-03-14  
> **Heure** : 00:20 UTC  
> **Statut** : 🚀 BUILD MODE — Jour 2 en cours  
> **Deadline** : Mardi 17/03 20h

---

## 📊 État réel du build

### Ce qui existe (worktrees/dev-agent/)

| Composant | Fichier | Statut |
|-----------|---------|--------|
| Auth (NextAuth v5) | `src/auth.ts`, `src/lib/auth.ts` | ✅ |
| Login page | `src/app/login/page.tsx` | ✅ |
| Register page | `src/app/register/page.tsx` | ✅ |
| Dashboard layout | `src/app/(app)/layout.tsx` | ✅ |
| Dashboard page | `src/app/(app)/dashboard/page.tsx` | ✅ |
| Services CRUD | `src/app/(app)/services/*` | ✅ |
| Slots management | `src/app/(app)/services/[id]/slots/*` | ✅ |
| Schema Prisma | `prisma/schema.prisma` | ✅ Complet |
| API routes | `src/app/api/*` | ✅ Auth, bookings, availability, business, slots |
| Page publique | `src/app/(public)/book/[slug]/page.tsx` | ✅ Wizard 5 étapes |

### 🔴 Manquants bloquants

| Composant | Impact | Priorité |
|-----------|--------|----------|
| `components/booking/service-selector.tsx` | Wizard étape 1 — sélection service | HIGH |
| `components/booking/date-picker.tsx` | Wizard étape 2 — choix date | HIGH |
| `components/booking/time-slot-picker.tsx` | Wizard étape 3 — choix horaire | HIGH |
| `components/booking/customer-form.tsx` | Wizard étape 4 — infos client | HIGH |
| `components/booking/booking-summary.tsx` | Récapitulatif réservation | HIGH |
| Migration workspace-chief | Versionnement + déploiement | HIGH |

---

## 🎯 Objectifs J2 (Samedi 14/03)

| Heure | Tâche | Livrable |
|-------|-------|----------|
| 00:30-04:00 | Créer les 5 composants booking | UI wizard fonctionnelle |
| 04:00-08:00 | Tester le flow complet | /book/[slug] testable localement |
| 08:00-12:00 | Migrer vers workspace-chief | Repo propre, commit, push |
| 12:00-16:00 | Déployer sur Vercel | URL live testable |
| 16:00-20:00 | Polish + bugfix | App stable |

---

## 🏗️ Architecture validée

```
src/
├── app/
│   ├── (app)/           # Espace protégé (dashboard)
│   │   ├── dashboard/
│   │   └── services/
│   ├── (public)/        # Espace public
│   │   └── book/[slug]/ # Page réservation client
│   ├── api/             # Server actions + API routes
│   ├── login/
│   └── register/
├── components/
│   ├── ui/              # shadcn/ui
│   └── booking/         # Wizard components (À CRÉER)
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   └── utils.ts
└── server/
    ├── actions/         # Server actions (services, slots, bookings)
    └── schemas/         # Zod schemas
```

---

## 🚀 Prochaines actions dev-agent

1. **Créer `components/booking/service-selector.tsx`** — Liste des services avec sélection
2. **Créer `components/booking/date-picker.tsx`** — Calendrier simple (react-day-picker ou natif)
3. **Créer `components/booking/time-slot-picker.tsx`** — Grille d'horaires disponibles
4. **Créer `components/booking/customer-form.tsx`** — Formulaire nom/email/téléphone
5. **Créer `components/booking/booking-summary.tsx`** — Récap service/date/heure/prix

---

## ⚠️ Risques

| Risque | Mitigation |
|--------|------------|
| Composants UI complexes | Utiliser shadcn/ui existant, garder simple |
| Intégration API | Tester chaque étape du wizard isolément |
| Déploiement Vercel | Prévoir variables d'environnement DATABASE_URL, NEXTAUTH_SECRET |

---

*Stratégie mise à jour — Build focus, pas de validation, pas de pivot*