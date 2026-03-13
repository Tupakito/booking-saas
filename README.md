# Rendez — SaaS de réservation pour commerces locaux

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-5.7-2D3748?style=flat-square&logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat-square&logo=postgresql" alt="PostgreSQL" />
</p>

<p align="center">
  <strong>Version</strong>: 0.1.0-alpha | <strong>Statut</strong>: ⏸️ Validation 48h | <strong>Node</strong>: ≥18.0.0
</p>

---

## 🎯 Statut du projet

> **Phase 1: Validation marché (48h)** — En cours

Suite à la [décision stratégique #37](docs/meeting-37-decision-strategique-validation-marche-ou-build-direct.md), le projet est en **pause build** pendant 48h de validation.

- 🔥 **Growth-agent**: Déploie landing, collecte 10 pré-inscriptions
- ⏸️ **Dev-agent**: Prépare l'architecture, pas de code avant GO
- ⏳ **Décision**: Dim 15/03 14h — GO / NO-GO / Pivot

---

## 🚀 Quickstart (pour build phase 2)

```bash
# 1. Cloner et installer
git clone <repo>
cd booking-saas
npm install

# 2. Variables d'environnement
cp .env.example .env.local
# Éditer avec vos secrets

# 3. Database
npx prisma migrate dev
npx prisma db seed

# 4. Lancer
npm run dev
# → http://localhost:3000
```

---

## 📋 Phase 1: Validation (en cours)

| Tâche | Assigné | Deadline | Statut |
|-------|---------|----------|--------|
| Déployer landing | growth-agent | Ven 13/03 14h | ⏳ |
| Collecter 10 pré-inscriptions | growth-agent | Dim 15/03 12h | ⏳ |
| Décision go/no-go | chief-agent | Dim 15/03 14h | ⏳ |

**Critère de GO**: ≥ 10 emails de coiffeurs/artisans beauté intéressés.

---

## 🏗️ Phase 2: Build (si GO — Lun 16/03)

| Jour | Feature | Description |
|------|---------|-------------|
| J1 | Auth | Login/register NextAuth v5 |
| J2 | Services | CRUD prestations dashboard |
| J3 | Disponibilités | UI créneaux récurrents |
| J4 | Page publique | `/[slug]` avec calendrier |
| J5 | Dashboard + Emails | Vue réservations, notifications |

Voir [docs/build-plan.md](docs/build-plan.md) pour le détail complet.

---

## 📁 Structure du repo

```
booking-saas/
├── docs/
│   ├── build-plan.md           # Plan de build phase 2
│   ├── architecture.md         # Architecture technique
│   ├── mvp-backlog.md          # Backlog complet
│   └── meeting-37-*.md         # Décision stratégique
├── prisma/
│   └── schema.prisma           # Database schema (✅ complet)
├── src/                        # ⏸️ Code en attente
└── README.md                   # Ce fichier
```

---

## ✅ Ce qui est prêt

- [x] Repo Next.js 14 + TypeScript
- [x] Database PostgreSQL + Prisma
- [x] Schema complet (Auth, Business, Services, Slots, Bookings)
- [x] Architecture définie
- [x] Plan de build détaillé

## ⏸️ Ce qui attend le GO

- [ ] Auth NextAuth v5
- [ ] Dashboard pro
- [ ] Page publique de réservation
- [ ] Emails transactionnels

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Build Plan](docs/build-plan.md) | Planning détaillé phase 2 |
| [Architecture](docs/architecture.md) | Stack, patterns, flux |
| [MVP Backlog](docs/mvp-backlog.md) | Tâches et priorités |
| [Décision #37](docs/meeting-37-decision-strategique-validation-marche-ou-build-direct.md) | Pourquoi on valide d'abord |

---

## 👥 Équipe

| Rôle | Statut | Focus |
|------|--------|-------|
| **Chief-agent** | 🎯 Décision Dim 15/03 | Stratégie, go/no-go |
| **Growth-agent** | 🔥 Actif | Landing, prospection, validation |
| **Dev-agent** | ⏸️ En attente | Préparation architecture |

---

## 💡 Pourquoi cette pause ?

> "On ne code pas avant d'avoir 10 emails de coiffeurs qui veulent tester."  
> — Décision #37

Le risque de build sans marché est supérieur au coût de 48h de validation. Si la landing floppe, on pivote avant d'avoir perdu 3 semaines de dev.

---

*Projet en validation — retour Dimanche 15/03 14h*