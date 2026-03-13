# Priorités Sprint — Booking-Saas

> **Date**: 13/03/2024 | **Sprint**: Foundation + Core | **Deadline**: Mar 17/03 20h

---

## 🎯 Priorités Définies (Réunion #79)

### P0 — Foundation (Week-end)

| # | Feature | Fichier | Statut |
|---|---------|---------|--------|
| 1 | Édition service | `src/app/(app)/services/[id]/page.tsx` | ✅ Créé |
| 2 | Gestion créneaux | `src/app/(app)/services/[id]/slots/page.tsx` | ✅ Créé |
| 3 | Page publique | `src/app/(public)/[slug]/page.tsx` | ✅ Créé |
| 4 | Calendrier semaine | `src/components/calendar/week-view.tsx` | ✅ Créé |

### P1 — Core (Lundi)

| # | Feature | Description |
|---|---------|-------------|
| 5 | Sélection créneau | Interactif dans week-view |
| 6 | Formulaire réservation | Nom, email, téléphone |
| 7 | Création booking | Server action + DB |

### P2 — Polish (Mardi)

| # | Feature | Description |
|---|---------|-------------|
| 8 | Emails confirmation | Resend integration |
| 9 | Responsive mobile | Tests multi-device |
| 10 | Déploiement prod | Vercel production |

---

## 📊 Velocity Sprint

| Jour | Focus | Heures | Livrables |
|------|-------|--------|-----------|
| Ven | Auth + UI | 16h | Login, register, composants |
| Sam | Services + Slots | 12h | CRUD complet, gestion créneaux |
| Dim | Page publique | 12h | Calendrier, sélection |
| Lun | Réservations | 12h | Booking, formulaire |
| Mar | Polish + Ship | 12h | Emails, tests, deploy |

**Total**: 64h sur 5 jours

---

## 🏗️ Architecture Sprint

```
P0 Foundation:
├── Composants UI (Button, Input, Card) ✅
├── Server Actions (services, slots) ✅
├── Pages dashboard (liste, création, édition) ✅
├── Gestion créneaux UI ✅
└── Page publique + calendrier ✅

P1 Core:
├── Calendrier interactif ⏳
├── Formulaire réservation ⏳
├── Création booking ⏳
└── Dashboard pro bookings ⏳

P2 Polish:
├── Emails Resend ⏳
├── Responsive ⏳
└── Production deploy ⏳
```

---

## 💡 Décisions Techniques

| Décision | Choix | Raison |
|----------|-------|--------|
| Calendrier | Custom week-view | Plus léger, contrôle total |
| State management | React useState | Suffisant pour MVP |
| Emails | Resend | Simple, gratuit pour début |
| Déploiement | Vercel | Déjà configuré |

---

## ⚠️ Risques & Mitigations

| Risque | Probabilité | Mitigation |
|--------|-------------|------------|
| Complexité calendrier | Moyenne | Week-view simple, pas mois |
| Génération créneaux | Moyenne | Algo simple: slots - bookings |
| Emails spam | Faible | Resend + validation DNS |

---

## ✅ Definition of Done Sprint

- [ ] Édition service fonctionnelle
- [ ] Gestion créneaux intuitive
- [ ] Page publique accessible
- [ ] Calendrier interactif
- [ ] Réservation complète (création + email)
- [ ] Dashboard pro avec bookings
- [ ] Responsive mobile
- [ ] Déployé sur Vercel
- [ ] Tests manuels OK

---

*Priorités sprint — Code > Specs*