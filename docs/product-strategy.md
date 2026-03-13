# Stratégie Produit — Rendez

> **Version**: 1.0.0 | **Date**: 13/03/2024 | **Décision**: #55

---

## 🎯 Vision

**Rendez** est un SaaS de réservation en ligne pour commerces locaux, démarrant par les coiffeurs/beauté avec option de pivot vers mécaniciens ou santé.

**North Star Metric**: Nombre de réservations prises via la plateforme

---

## Stratégie actuelle : Validation-First

### Pourquoi valider avant de coder ?

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Build sans marché | Élevé (3 semaines perdues) | 48h de validation |
| Mauvaise cible | Moyen | 3 scénarios préparés |
| Mauvais message | Faible | Landings A/B testables |

**Principe**: Pas de code avant 10 pré-inscriptions validées.

---

## Phases

### Phase 1: Validation (48h) — 🔥 EN COURS

**Période**: Ven 13/03 14h → Dim 15/03 14h

**Objectif**: Collecter ≥ 10 emails de coiffeurs intéressés

**Actions**:
- Landing beauté déployée
- Prospection intensive (20 DMs, 3 posts, 5 appels)
- Tracking des conversions

**Deadline**: Dim 15/03 12h (bilans), 14h (décision)

---

### Phase 2: Build (2 semaines) — ⏸️ EN ATTENTE

**Démarrage conditionnel**: Selon scénario retenu Dimanche 14h

#### Scénario A: GO (≥ 10 emails)

| Semaine | Focus | Livrables |
|---------|-------|-----------|
| S1 | Core MVP | Auth, Services, Disponibilités, Page publique |
| S2 | Polish + Lancement | Dashboard, Emails, Stripe, 1er client |

**Cible**: Coiffeurs/beauté  
**Différenciation**: Simplicité extrême

---

#### Scénario B: Relance (5-9 emails)

| Action | Durée | Objectif |
|--------|-------|----------|
| +24h prospection | 1 jour | Atteindre 10 emails |
| Ajustement message | 4h | Tester autre angle |
| Ciblage différent | 4h | Autre segment (barbier, onglerie) |

**Si échec relance** → PIVOT B

---

#### Scénario C: PIVOT B — Mécaniciens (< 5 emails beauté)

| Phase | Durée | Focus |
|-------|-------|-------|
| Validation | 2 jours | 10 pré-inscriptions garages |
| Adaptation | 4h | Landing, copy, champs formulaire |
| Build | 2 semaines | MVP mécaniciens (+devis) |

**Cible**: Garages auto  
**Différenciation**: Devis en ligne + RDV

---

#### Scénario D: PIVOT C — Ostéopathes (0-2 emails)

| Phase | Durée | Focus |
|-------|-------|-------|
| Validation | 2 jours | 10 pré-inscriptions cabinets |
| Adaptation | 2h | Landing, copy uniquement |
| Build | 2 semaines | MVP santé (identique beauté) |

**Cible**: Ostéopathes/kinés  
**Différenciation**: Plus simple que Doctolib

---

## Matrice de décision

| Emails beauté | Décision | Sprint suivant | Confiance |
|---------------|----------|----------------|-----------|
| ≥ 10 | 🟢 GO | Build MVP beauté | Élevée |
| 5-9 | 🟡 Relance | +24h prospection | Moyenne |
| < 5 | 🔴 PIVOT B | Validation mécaniciens | À tester |
| 0-2 | 🔴 PIVOT C | Validation ostéopathes | À tester |

---

## KPIs par phase

### Phase 1 (Validation)
- [ ] Nombre d'emails collectés
- [ ] Taux de conversion landing
- [ ] Feedback qualitatif (3+ entretiens)

### Phase 2 (Build)
- [ ] Temps onboarding < 5 min
- [ ] Temps création service < 2 min
- [ ] Temps réservation < 3 min
- [ ] 0 erreur 500 critique

### Phase 3 (Lancement)
- [ ] 1er client payant
- [ ] 10 réservations réelles
- [ ] NPS > 50

---

## Ressources allouées

### Si GO Beauté
- **Dev-agent**: 100% (2 semaines)
- **Growth-agent**: 30% (support, acquisition)
- **Chief-agent**: 20% (suivi, décisions)

### Si PIVOT
- **Growth-agent**: 100% (nouvelle validation)
- **Dev-agent**: 10% (adaptation technique)
- **Chief-agent**: 30% (stratégie pivot)

---

## Risques et mitigation

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Validation échoue | Moyenne | Élevé | 3 scénarios préparés |
| Growth-agent ne prospecte pas | Élevée | Critique | Check-ins quotidiens |
| Build dérape | Faible | Moyen | Sprints courts, daily standup |
| Concurrence réagit | Faible | Faible | Focus exécution, pas features |

---

## Checkpoints

| Date | Heure | Type | Participants | Objectif |
|------|-------|------|--------------|----------|
| Ven 13/03 | 14h | Sync | Tous | Landing déployée ? |
| Ven 13/03 | 20h | Sync | Tous | Bilan prospection J1 |
| Sam 14/03 | 20h | Sync | Tous | Bilan prospection J2 |
| Dim 15/03 | 12h | Bilan | Growth | Nombre final d'emails |
| **Dim 15/03** | **14h** | **Décision** | **Chief** | **GO / PIVOT / STOP** |

---

## Documentation liée

- [MVP Backlog](./mvp-backlog.md) — Détail des tâches
- [Architecture](./architecture.md) — Architecture technique
- [Plan de Pivot](./pivot-plan.md) — 3 scénarios détaillés
- [Validation Plan](./validation-plan.md) — Méthodologie 48h

---

**Prochaine mise à jour**: Dimanche 15/03 14h après décision

*Stratégie produit — En attente de validation*