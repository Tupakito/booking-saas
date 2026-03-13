# Rendez — SaaS de réservation multi-métiers

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-5.7-2D3748?style=flat-square&logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/Multi--cible-3%20scénarios-green?style=flat-square" alt="Multi-cible" />
</p>

<p align="center">
  <strong>Version</strong>: 0.1.0-alpha | <strong>Statut</strong>: ⏸️ Validation 48h | <strong>Cibles</strong>: 3 scénarios
</p>

---

## 🎯 Les 3 Scénarios

| Scénario | Cible | Seuil | Statut |
|----------|-------|-------|--------|
| **GO** | 💇 Coiffeurs/Beauté | ≥ 10 pré-inscriptions | 🔥 Validation en cours |
| **PIVOT B** | 🔧 Mécaniciens | < 10 beauté | ⏸️ Landing backup prête |
| **PIVOT C** | 🏥 Ostéopathes | < 5 mécaniciens | ⏸️ 100% compatible |

**Décision finale**: Dimanche 15/03 14h

---

## 🚀 Quickstart

```bash
# 1. Cloner et installer
git clone <repo>
cd booking-saas
npm install

# 2. Configuration cible (optionnel)
# Modifier src/lib/target-config.ts
# defaultTarget: "beauty" | "mechanic" | "health"

# 3. Variables d'environnement
cp .env.example .env.local

# 4. Database
npx prisma migrate dev
npx prisma db seed

# 5. Lancer
npm run dev
```

---

## 📋 Phase 1: Validation (en cours)

| Tâche | Assigné | Deadline |
|-------|---------|----------|
| Landing beauté déployée | growth-agent | Ven 13/03 14h |
| 10 pré-inscriptions | growth-agent | Dim 15/03 12h |
| Landings backup (méca + santé) | growth-agent | Dim 15/03 12h |
| **Décision go/pivot** | chief-agent | **Dim 15/03 14h** |

---

## 🏗️ Phase 2: Build (selon scénario)

### Plan A: Beauté (5 jours)
Auth → Services → Slots → Page publique → Dashboard

### Plan B: Mécaniciens (5-7 jours)
Identique + devis optionnel

### Plan C: Ostéopathes (5 jours)
Identique, 100% compatible

---

## 🔧 Configuration Multi-cibles

```typescript
// src/lib/target-config.ts
export const defaultTarget = "beauty"; // ou "mechanic", "health"
```

Le code s'adapte automatiquement:
- ✅ Copy landing
- ✅ Champs formulaire
- ✅ Features activées

---

## 📁 Structure

```
booking-saas/
├── docs/
│   ├── pivot-plan.md           # Plan des 3 scénarios
│   ├── architecture.md         # Architecture multi-cibles
│   └── mvp-backlog.md          # Backlog adaptatif
├── src/
│   └── lib/
│       └── target-config.ts    # Configuration cible
├── prisma/
│   └── schema.prisma           # Schema compatible 3 cibles
└── README.md                   # Ce fichier
```

---

## ✅ État de préparation

| Composant | Beauté | Mécaniciens | Ostéopathes |
|-----------|--------|-------------|-------------|
| Schema DB | ✅ | ✅ 95% | ✅ 100% |
| Architecture | ✅ | ✅ | ✅ |
| Landing | ✅ | ⏳ backup | ⏳ backup |
| Build plan | ✅ | ✅ | ✅ |

---

## 📚 Documentation

- [Plan de Pivot](docs/pivot-plan.md) — Décision #42
- [Architecture](docs/architecture.md) — Multi-cibles
- [MVP Backlog](docs/mvp-backlog.md) — 3 plans de build

---

*3 scénarios préparés — 0 temps perdu — décision Dimanche 14h*