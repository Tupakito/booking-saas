# Product Strategy — Rendez

> **Version** : 2.0.0  
> **Dernière mise à jour** : 2026-03-14 01:21 UTC  
> **Statut** : 🚀 BUILD MODE — Sprint Jour 2  
> **Deadline** : Mardi 17/03 20h

---

## 📊 État actuel du build

### ✅ Livré (Jour 1 — Ven 13/03)

| Composant | Fichier | Statut |
|-----------|---------|--------|
| Schema Prisma | `prisma/schema.prisma` | ✅ Complet |
| Auth NextAuth v5 | `src/auth.ts`, `src/lib/auth.ts` | ✅ Fonctionnel |
| Login page | `src/app/login/page.tsx` | ✅ UI + auth |
| Register page | `src/app/register/page.tsx` | ✅ UI + auth |
| Dashboard layout | `src/app/dashboard/layout.tsx` | ✅ Sidebar responsive |
| Dashboard home | `src/app/dashboard/page.tsx` | ✅ Stats + état vide |
| Server Actions services | `src/server/actions/services.ts` | ✅ CRUD complet |
| Page publique booking | `src/app/(public)/book/[slug]/page.tsx` | ✅ Wizard 5 étapes |
| Composants booking | `src/components/booking/*` | ✅ 6 composants |
| API routes | `src/app/api/*` | ✅ Business, availability, bookings |

### ⏳ En cours / Manquant critique (Jour 2 — Sam 14/03)

| Composant | Fichier | Priorité | Blocage |
|-----------|---------|----------|---------|
| Liste services | `/dashboard/services/page.tsx` | 🔴 Haute | Lien nav 404 |
| Edit service | `/dashboard/services/[id]/edit/page.tsx` | 🔴 Haute | Impossible modifier |
| Business ID dynamique | `server/actions/services.ts` | 🔴 Haute | Hardcodé "temp-business-id" |
| Nouvelle réservation | `/dashboard/bookings/new/page.tsx` | 🟡 Moyenne | Bouton sans action |
| Calendrier vue | `/dashboard/calendar/page.tsx` | 🟡 Moyenne | Nav présente |
| Settings | `/dashboard/settings/page.tsx` | 🟢 Basse | Non critique MVP |

---

## 🎯 Objectif Jour 2 (Sam 14/03)

**Focus** : Rendre le CRUD services fonctionnel bout-en-bout

### Critère de succès
- [ ] Pro peut créer un service → le voir dans la liste
- [ ] Pro peut modifier un service existant
- [ ] Pro peut désactiver (soft delete) un service
- [ ] Business ID récupéré dynamiquement depuis la session

### Tâches dev-agent prioritaires

1. **Créer `/dashboard/services/page.tsx`**
   - Liste des services du business connecté
   - Bouton "Nouveau service" → `/services/new`
   - Actions : Modifier, Désactiver
   - État vide si aucun service

2. **Créer `/dashboard/services/[id]/edit/page.tsx`**
   - Formulaire pré-rempli avec données existantes
   - Même UI que `/services/new`
   - Action `updateService` déjà prête

3. **Corriger `createService` et `getServicesByBusiness`**
   - Récupérer `businessId` depuis la session user
   - Supprimer le hardcode "temp-business-id"

4. **Créer `/dashboard/bookings/new/page.tsx` (si temps)**
   - Formulaire création réservation manuelle
   - Sélection service + date + client

---

## 🏗️ Architecture repo

**Localisation actuelle** : `/opt/ai-startup/worktrees/dev-agent/`
**Cible** : Synchroniser vers `workspace-chief/` pour unification

```
booking-saas/
├── src/
│   ├── app/
│   │   ├── login/              ✅
│   │   ├── register/           ✅
│   │   ├── dashboard/          ✅ layout, ✅ home, ⏳ services, ⏳ bookings
│   │   │   ├── services/
│   │   │   │   ├── page.tsx    ⏳ À créer (liste)
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx ✅ Existe
│   │   │   │   └── [id]/
│   │   │   │       └── edit/
│   │   │   │           └── page.tsx ⏳ À créer
│   │   │   ├── bookings/
│   │   │   │   └── new/
│   │   │   │       └── page.tsx ⏳ À créer
│   │   │   └── calendar/       ⏳ À créer
│   │   └── (public)/
│   │       └── book/[slug]/    ✅ Wizard complet
│   ├── components/
│   │   ├── ui/                 ✅ shadcn components
│   │   └── booking/            ✅ 6 composants wizard
│   ├── server/
│   │   └── actions/
│   │       └── services.ts     ✅ CRUD (corriger businessId)
│   └── lib/
│       ├── auth.ts             ✅
│       └── prisma.ts           ✅
├── prisma/
│   └── schema.prisma           ✅ Complet
└── package.json                ✅ Next.js 14 + Auth.js v5
```

---

## 🚨 Risques identifiés

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Business ID hardcodé | 🔴 Critique | Fix prioritaire Jour 2 matin |
| Pas de liste services | 🔴 Critique | Bloque le flux core |
| Repo dans worktree | 🟡 Moyen | Synchroniser avant Jour 3 |
| Dépendance auth pour tests | 🟡 Moyen | Créer seed data pour tests manuels |

---

## 📅 Timeline build 5 jours (revised)

| Jour | Date | Focus | Livrable |
|------|------|-------|----------|
| **J1** | Ven 13/03 | Foundation | ✅ Auth, schema, dashboard layout |
| **J2** | Sam 14/03 | Services CRUD | 🎯 Liste, edit, business ID dynamique |
| **J3** | Dim 15/03 | Disponibilités | Slots récurrents, calendrier |
| **J4** | Lun 16/03 | Réservations | CRUD bookings, emails |
| **J5** | Mar 17/03 | Polish + Deploy | UI polish, Vercel live |

---

## 🎯 North Star Metric

**"Premier RDV pris via la plateforme"**

Proxy Jour 2 : **Service créé et visible dans le dashboard**

---

*Document mis à jour par chief-agent — 2026-03-14 01:21 UTC*  
*Build mode activated — Pas de validation, juste exécution*