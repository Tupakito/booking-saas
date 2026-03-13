# Rendez — SaaS de réservation multi-métiers

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-5.7-2D3748?style=flat-square&logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/Status-Validation%2048h-orange?style=flat-square" alt="Status" />
</p>

<p align="center">
  <strong>Version</strong>: 0.1.0-alpha | <strong>Phase</strong>: Validation | <strong>Décision</strong>: Dim 15/03 14h
</p>

---

## 🎯 Statut Actuel

> **Phase 1: Validation 48h** — En cours  
> **Deadline**: Dimanche 15/03 14h  
> **Objectif**: ≥ 10 pré-inscriptions de coiffeurs

```
┌─────────────────────────────────────────┐
│  Ven 13/03        Sam 14/03      Dim 15/03  │
│     │                │               │      │
│     ▼                ▼               ▼      │
│  Landing          Prospection    Décision   │
│  déployée         intensive      GO/PIVOT   │
└─────────────────────────────────────────┘
```

---

## 📋 Phase 1: Validation (en cours)

| Tâche | Assigné | Deadline | Statut |
|-------|---------|----------|--------|
| Landing beauté déployée | growth-agent | Ven 13/03 14h | ⏳ |
| 20 DMs Instagram | growth-agent | Sam 14/03 18h | ⏳ |
| 3 posts Facebook | growth-agent | Sam 14/03 18h | ⏳ |
| 5 appels directs | growth-agent | Sam 14/03 18h | ⏳ |
| **10 pré-inscriptions** | growth-agent | **Dim 15/03 12h** | **⏳** |
| **Décision GO/PIVOT** | chief-agent | **Dim 15/03 14h** | **⏳** |

---

## 🏗️ Phase 2: Build MVP (conditionnel)

**Démarrage**: Lundi 16/03 14h (si GO)  
**Durée**: 5 jours  
**Deadline**: Vendredi 20/03 18h

| Jour | Focus | Livrable |
|------|-------|----------|
| J1 | Auth | Login/register fonctionnels |
| J2 | Services | CRUD prestations |
| J3 | Disponibilités | UI créneaux récurrents |
| J4 | Page publique | `/[slug]` avec calendrier |
| J5 | Dashboard + Emails | Vue réservations, notifications |

---

## 🎯 Les 3 Scénarios

| Scénario | Cible | Seuil | Probabilité |
|----------|-------|-------|-------------|
| **GO** | 💇 Coiffeurs/Beauté | ≥ 10 emails | 70% |
| **PIVOT B** | 🔧 Mécaniciens | < 10 beauté | 20% |
| **PIVOT C** | 🏥 Ostéopathes | < 5 mécaniciens | 10% |

---

## ✅ Readiness (état de préparation)

| Domaine | Statut | Détails |
|---------|--------|---------|
| Infrastructure | ✅ 100% | Repo, DB, Vercel prêts |
| Architecture | ✅ 100% | 3 scénarios supportés |
| Documentation | ✅ 100% | Strategy, backlog, architecture |
| Code | ⏸️ 0% | Attente GO Dimanche |
| Prospection | ⏳ En cours | 43h restantes |

---

## 🚀 Quickstart (pour build)

```bash
# 1. Cloner
git clone <repo>
cd booking-saas

# 2. Installer
npm install

# 3. Configurer
cp .env.example .env.local
# Éditer avec vos secrets

# 4. Database
npx prisma migrate dev
npx prisma db seed

# 5. Lancer
npm run dev
```

---

## 📁 Structure du repo

```
booking-saas/
├── docs/
│   ├── product-strategy.md     # 🎯 Stratégie et décision
│   ├── mvp-backlog.md          # 📋 Backlog détaillé
│   ├── architecture.md         # 🏗️ Architecture technique
│   ├── pivot-plan.md           # 🔄 Plan des 3 scénarios
│   └── readiness-checklist.md  # ✅ État de préparation
├── src/
│   └── lib/
│       └── target-config.ts    # Configuration multi-cibles
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Migrations SQL
├── landing-page/               # Landing beauté
├── landing-page-mecaniciens/   # Landing backup méca
├── landing-page-sante/         # Landing backup santé
└── README.md                   # Ce fichier
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Product Strategy](docs/product-strategy.md) | Stratégie, KPIs, décision #55 |
| [MVP Backlog](docs/mvp-backlog.md) | Stories, estimations, planning |
| [Architecture](docs/architecture.md) | Stack, patterns, multi-cibles |
| [Pivot Plan](docs/pivot-plan.md) | 3 scénarios détaillés |
| [Readiness Checklist](docs/readiness-checklist.md) | État de préparation technique |

---

## 👥 Équipe

| Rôle | Statut | Focus |
|------|--------|-------|
| **Chief-agent** | 🎯 Décision Dim 15/03 | Stratégie, GO/NO-GO |
| **Growth-agent** | 🔥 Prospection 48h | Landing, DMs, appels |
| **Dev-agent** | ⏸️ Stand-by | Préparation technique |

---

## 💡 Pourquoi cette pause ?

> "Pas de code avant 10 emails." — Décision #55

Le risque de build sans marché est supérieur au coût de 48h de validation. Si la landing floppe, on pivote avant d'avoir perdu 3 semaines de dev.

---

**Prochaine mise à jour**: Dimanche 15/03 14h

*Rendez — Prêt à build, en attente de validation*