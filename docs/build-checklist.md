# Build Checklist — Démarrage Immédiat

> **Date**: Dim 15/03/2024 | **Heure démarrage**: 14h | **Condition**: GO validation

---

## ✅ Pré-requis (à vérifier avant 14h)

### Infrastructure
- [ ] Repo cloné sur machine dev
- [ ] Node.js ≥ 18 installé
- [ ] npm ≥ 9 installé
- [ ] Git configuré
- [ ] Accès Vercel (si déploiement)
- [ ] Accès Neon (si création DB)

### Variables d'environnement
```bash
# Créer .env.local avec:
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="openssl rand -base64 32"
NEXTAUTH_URL="http://localhost:3000"

# Optionnel:
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
RESEND_API_KEY="re_..."
```

---

## 🚀 Démarrage en 5 minutes (14h00)

### Étape 1: Setup (2 min)
```bash
# 1. Cloner si pas fait
git clone <repo> booking-saas
cd booking-saas

# 2. Checkout branche build
git checkout build-mvp

# 3. Installer dépendances
npm install
```

### Étape 2: Database (2 min)
```bash
# 4. Migrations
npx prisma migrate dev

# 5. Seed (données de test)
npx prisma db seed
```

### Étape 3: Lancer (1 min)
```bash
# 6. Démarrer
npm run dev

# 7. Vérifier
open http://localhost:3000
```

---

## 📋 Jour 1 — Auth (Lun 16/03)

### Matin (14h-18h)

| Heure | Tâche | Fichier | DoD |
|-------|-------|---------|-----|
| 14h-15h | Config NextAuth | `src/lib/auth.ts` | Providers configurés |
| 15h-16h | Page login | `src/app/login/page.tsx` | UI responsive |
| 16h-17h | Page register | `src/app/register/page.tsx` | 2 étapes |
| 17h-18h | Middleware + API | `src/middleware.ts`, `src/app/api/auth/[...nextauth]/route.ts` | Protection OK |

### Checkpoints
- [ ] 15h: Config auth validée
- [ ] 17h: Pages login/register visibles
- [ ] 18h: Test inscription → connexion → dashboard

---

## 📋 Jour 2 — Services (Mar 17/03)

| Heure | Tâche | Fichier | DoD |
|-------|-------|---------|-----|
| 14h-15h | Schema Zod | `src/server/schemas/service.ts` | Validation OK |
| 15h-17h | Server Actions | `src/server/actions/services.ts` | CRUD complet |
| 17h-19h | Pages UI | `src/app/(app)/services/*.tsx` | Liste + formulaires |

### Checkpoints
- [ ] 15h: Schema validé
- [ ] 17h: Actions testées
- [ ] 19h: CRUD fonctionnel en UI

---

## 📋 Jour 3 — Disponibilités (Mer 18/03)

| Heure | Tâche | Fichier | DoD |
|-------|-------|---------|-----|
| 14h-15h | Schema slots | `src/server/schemas/slot.ts` | Jours/plages |
| 15h-17h | Server Actions | `src/server/actions/slots.ts` | CRUD |
| 17h-20h | UI semaine | Composant calendrier | Sélection intuitive |

### Checkpoints
- [ ] 17h: Actions slots OK
- [ ] 20h: UI semaine type fonctionnelle

---

## 📋 Jour 4 — Page Publique (Jeu 19/03)

| Heure | Tâche | Fichier | DoD |
|-------|-------|---------|-----|
| 14h-16h | Route [slug] | `src/app/(public)/[slug]/page.tsx` | Résolution business |
| 16h-18h | Génération créneaux | Fonction utilitaire | Slots libres calculés |
| 18h-21h | Calendrier client | UI réservation | Sélection + formulaire |

### Checkpoints
- [ ] 18h: Créneaux générés correctement
- [ ] 21h: Réservation fonctionnelle

---

## 📋 Jour 5 — Dashboard + Emails (Ven 20/03)

| Heure | Tâche | Fichier | DoD |
|-------|-------|---------|-----|
| 14h-17h | Dashboard | `src/app/(app)/dashboard/page.tsx` | Stats + prochains RDV |
| 17h-19h | Vue calendrier | `src/app/(app)/calendar/page.tsx` | Vue semaine |
| 19h-21h | Emails | `src/lib/resend.ts`, templates | Envoi confirmation |

### Checkpoints
- [ ] 17h: Dashboard avec données
- [ ] 19h: Calendrier pro fonctionnel
- [ ] 21h: Emails envoyés

---

## 🎯 Démo Vendredi 20h

### Scénario de démo (5 min)

1. **Inscription** (1 min)
   - Register → création business → dashboard

2. **Configuration** (1 min)
   - Nouveau service (Coupe homme, 30min, 25€)
   - Disponibilités (Lun/Mar 9h-18h)

3. **Réservation client** (2 min)
   - Ouvrir `/salon-demo` en navigation privée
   - Sélectionner service + créneau
   - Réservation + email confirmation

4. **Dashboard pro** (1 min)
   - Vue nouvelle réservation
   - Calendrier avec RDV

### Critères de succès démo
- [ ] Flow complet sans erreur
- [ ] Temps total < 5 min
- [ ] Responsive mobile OK
- [ ] 0 erreur console

---

## 🚨 Escalation

| Problème | Qui | Quand |
|----------|-----|-------|
| Blocage technique > 1h | chief-agent | Immédiat |
| Retard > 2h sur planning | chief-agent | Fin de journée |
| Bug critique | dev-agent | ASAP |
| Scope creep | chief-agent | Refus systématique |

---

## Ressources

- [MVP Backlog](./mvp-backlog.md) — Stories détaillées
- [Architecture](./architecture.md) — Patterns et conventions
- [Product Strategy](./product-strategy.md) — Objectifs

---

*Checklist de démarrage — Prêt pour build immédiat*