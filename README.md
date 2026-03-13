# Rendez — 3 Plans B Prêts

<p align="center">
  <img src="https://img.shields.io/badge/Plan%20A-Rendez%20(Validation)-orange?style=flat-square" alt="Plan A" />
  <img src="https://img.shields.io/badge/Plan%20B-3%20options-blue?style=flat-square" alt="Plan B" />
  <img src="https://img.shields.io/badge/Décision-Dim%2015%2F03%2014h-red?style=flat-square" alt="Decision" />
</p>

<p align="center">
  <strong>Status</strong>: Plan A en cours | <strong>Plans B</strong>: Prêts | <strong>Pivot</strong>: 1-3 jours selon option
</p>

---

## 🎯 Situation

```
Plan A: Rendez (Coiffeurs)          Plans B (si abandon Dimanche)
     │                                    │
     ▼                                    ▼
Validation 48h                    ┌────────┬────────┬────────┐
En cours...                       │ Admin  │FeedBack│ Consult│
     │                            │Freelance│Restau│   RDV  │
     ▼                            └────────┴────────┴────────┘
Dim 14h: GO / ABANDON                        │
     │                                       │
     ├─ GO ───► Build MVP                    ├─ Consult ───► 1 jour pivot
     │                                        ├─ Admin ─────► 2-3 jours
     └─ ABANDON ───► Plan B                  └─ FeedBack ──► 3-4 jours
```

---

## 📋 Plans B Disponibles

| Plan | Problème | Cible | Pivot | Réutilisation |
|------|----------|-------|-------|---------------|
| **Admin Freelance** | Admin chronophage | Freelances tech | 2-3 jours | 60% |
| **FeedBack** | Perde clients | Restaurants | 3-4 jours | 40% |
| **Consult** ⭐ | RDV consultants | Consultants | **1 jour** | **100%** |

---

## 🚀 Pivot Technique

### Option Rapide: Consult (Recommandée dev)

```bash
# 1 jour pour pivot complet
./scripts/pivot-to-consult.sh

# Puis manuel:
# - Modifier seed data
# - Adapter landing copy
# - Deploy
```

**Avantage**: 100% réutilisation, 0 risque technique, validation 48h possible immédiatement.

### Option Complète: Admin ou FeedBack

Voir [pivot-technical-guide.md](docs/pivot-technical-guide.md) pour détail.

---

## 📁 Documentation Plans B

| Document | Description |
|----------|-------------|
| [Pivot Technical Guide](docs/pivot-technical-guide.md) | Guide réutilisation code |
| [Comparaison Plans B](docs/nouveau-projet-comparison.md) | Tableau comparatif |
| [Brief Admin](docs/nouveau-projet-brief.md) | Chief-agent version |
| [Script Pivot Consult](scripts/pivot-to-consult.sh) | Automatisation 1 jour |

---

## ⏰ Timeline Pivot (si ABANDON Dimanche 14h)

| Heure | Action | Plan |
|-------|--------|------|
| Dim 14h | Décision ABANDON | - |
| Dim 18h | Début pivot | Consult: rebranding |
| Lun 14h | Suite pivot | Consult: landing |
| Mar 14h | **Fin pivot** | Consult: déployé |
| Mar 18h | Validation 48h | Consult: prospection |

**Avec Consult**: Projet déployé et en validation en 2 jours seulement.

---

## 🎯 Recommandation

| Si priorité... | Choisir... | Pourquoi |
|----------------|-----------|----------|
| Temps | Consult | 1 jour |
| Pain point | Admin | Plus aigu |
| Marché connu | FeedBack | 175k restaurants |
| Risque minimal | Consult | 100% réutilisation |

---

## Ressources

- [Pivot Technical Guide](docs/pivot-technical-guide.md) — Réutilisation code détaillée
- [Comparaison Plans B](docs/nouveau-projet-comparison.md) — Analyse comparative
- [Build Checklist](docs/build-checklist.md) — Si GO Rendez
- [Post-Mortem Template](docs/post-mortem-template.md) — Si ABANDON

---

**Status**: 3 plans B prêts — Décision Dimanche 14h

*Rendez + 3 Plans B — Couverture tous scénarios*