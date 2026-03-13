# Booking-Saas — Build Sprint 0 🚀

<p align="center">
  <img src="https://img.shields.io/badge/Sprint-0-brightgreen?style=flat-square" alt="Sprint 0" />
  <img src="https://img.shields.io/badge/Status-Building-blue?style=flat-square" alt="Building" />
  <img src="https://img.shields.io/badge/Deadline-Mar%2017%2020h-red?style=flat-square" alt="Deadline" />
</p>

<p align="center">
  <strong>Décision fondateur #69</strong>: Pas de pivot • Build direct • MVP Mardi 17/03 20h
</p>

---

## 🎯 Sprint 0 — Foundation (5 jours)

```
Ven 13/03          Sam 14/03          Dim 15/03          Lun 16/03          Mar 17/03
   │                  │                  │                  │                  │
   ▼                  ▼                  ▼                  ▼                  ▼
┌────────┐        ┌────────┐        ┌────────┐        ┌────────┐        ┌────────┐
│  AUTH  │───────▶│SERVICES│───────▶│ SLOTS  │───────▶│ PUBLIC │───────▶│BOOKINGS│
│  ✅    │        │  ⏳    │        │  ⏳    │        │  ⏳    │        │  ⏳    │
└────────┘        └────────┘        └────────┘        └────────┘        └────────┘
                                                                               │
                                                                               ▼
                                                                        ┌────────┐
                                                                        │ DEPLOY │
                                                                        │  🎯    │
                                                                        └────────┘
```

---

## ✅ Livrés Aujourd'hui (Ven 13/03)

| Feature | Fichier | Statut |
|---------|---------|--------|
| Landing page | `src/app/page.tsx` | ✅ |
| Login page | `src/app/login/page.tsx` | ✅ |
| Register page | `src/app/register/page.tsx` | ✅ |
| API Register | `src/app/api/register/route.ts` | ✅ |
| Auth config | `src/lib/auth.ts` | ✅ |
| NextAuth API | `src/app/api/auth/[...nextauth]/route.ts` | ✅ |
| Middleware | `src/middleware.ts` | ✅ |
| Dashboard layout | `src/app/(app)/layout.tsx` | ✅ |

---

## 🚀 Démarrage

```bash
# 1. Clone & install
git clone <repo> booking-saas
cd booking-saas
npm install

# 2. Env
cp .env.example .env.local
# Éditer DATABASE_URL

# 3. Database
npx prisma migrate dev --name init
npx prisma generate

# 4. Dev
npm run dev
```

---

## 📋 Sprint Backlog

### J1 — Auth (Aujourd'hui) ✅ DONE
- [x] Landing page
- [x] Login / Register
- [x] NextAuth config
- [x] Middleware protection
- [x] Dashboard layout

### J2 — Services (Demain)
- [ ] CRUD services
- [ ] UI dashboard
- [ ] Formulaires

### J3 — Slots (Dimanche)
- [ ] Disponibilités récurrentes
- [ ] UI semaine type

### J4 — Page Publique (Lundi)
- [ ] Route `/[slug]`
- [ ] Calendrier client
- [ ] Réservation

### J5 — Bookings + Emails (Mardi)
- [ ] Création réservation
- [ ] Emails confirmation
- [ ] Déploiement prod

---

## 🎯 MVP Mardi 17/03 20h

**Fonctionnel**:
- Inscription / connexion
- Création services
- Définition disponibilités
- Page publique de réservation
- Dashboard pro
- Emails de confirmation

**URL**: https://booking-saas.vercel.app

---

**Status**: 🏗️ Sprint 0 Jour 1 — Auth complète

*Booking-Saas — Build mode, pas de pivot*