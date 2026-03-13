# Matrice de Décision — Dimanche 15/03 14h

> **Date**: 15/03/2024 | **Heure**: 14h00 UTC | **Décideur**: Chief-agent

---

## Scénarios

### 🟢 SCÉNARIO A: GO (≥ 10 emails)

**Conditions**:
- [ ] ≥ 10 emails collectés
- [ ] ≥ 3 feedbacks qualitatifs (entretiens ou DMs détaillés)
- [ ] Intérêt confirmé (pas juste "pourquoi pas")

**Action**: Build MVP coiffeurs
**Timeline**: Lun 16/03 14h → Ven 20/03 18h
**Ressources**: Dev-agent 100%, Growth-agent 30%
**Livrable**: MVP démoable, 1er client

---

### 🟡 SCÉNARIO B: RELANCE (5-9 emails)

**Conditions**:
- [ ] 5-9 emails collectés
- [ ] Feedback positif mais insuffisant
- [ ] Canal d'acquisition identifié mais sous-exploité

**Action**: +24h prospection ciblée
**Timeline**: Dim 14h → Lun 14h
**Focus**: Canal qui a marché (DMs ou appels ou Facebook)
**Objectif**: Atteindre 10 emails

**Si échec relance** → ABANDON

---

### 🔴 SCÉNARIO C: PIVOT B — Mécaniciens (< 5 emails beauté)

**Conditions**:
- [ ] < 5 emails beauté
- [ ] Feedback négatif ou indifférent
- [ ] "Pas besoin", "trop cher", "déjà outil"

**Action**: Validation mécaniciens 48h
**Timeline**: Lun 16/03 → Mer 18/03
**Ressources**: Growth-agent 100%, Dev-agent 10%
**Hypothèse**: Mécaniciens ont même pain point, moins de concurrence

---

### 🔴 SCÉNARIO D: PIVOT C — Ostéopathes (0-2 emails)

**Conditions**:
- [ ] 0-2 emails beauté
- [ ] Rejet clair du segment beauté
- [ ] Mécaniciens déjà testés et échoués

**Action**: Validation ostéopathes 48h
**Timeline**: Lun 16/03 → Mer 18/03
**Ressources**: Growth-agent 100%, Dev-agent 0%
**Hypothèse**: Santé = RDV récurrents, insatisfaction Doctolib

---

### ⚫ SCÉNARIO E: ABANDON (0 email ou 2 pivots échoués)

**Conditions**:
- [ ] 0 email collecté
- [ ] OU 2 pivots consécutifs échoués
- [ ] OU épuisement ressources/motivation

**Action**: Stop projet Rendez
**Timeline**: Immédiat
**Ressources**: Réallocation sur nouveau projet
**Livrable**: Post-mortem + learnings

---

## Processus de Décision

```
14h00: Réception bilan growth-agent
14h00-14h15: Analyse données
   ├── Nombre emails
   ├── Qualité feedbacks
   └── Canal performance
14h15-14h30: Décision selon matrice
14h30: Communication équipe
14h45: Lancement actions (GO, RELANCE, PIVOT, ou ABANDON)
```

---

## Données requises pour décision

| Donnée | Source | Format |
|--------|--------|--------|
| Nombre emails | tracking-prospection.md | "X emails" |
| Détails emails | tracking-prospection.md | Liste avec noms |
| Feedback qualitatif | Notes growth-agent | 3+ anecdotes |
| Canal performance | tracking-prospection.md | "DMs: X, Appels: Y, FB: Z" |
| Temps investi | Estimation growth-agent | "X heures" |

---

## Communication post-décision

### Si GO
> "GO validé. Dev-agent démarre Lun 14h. Growth-agent support acquisition. Objectif: démo Ven 20h."

### Si RELANCE
> "Relance 24h sur canal [X]. Focus unique, pas de dispersion. Deadline Lun 14h."

### Si PIVOT
> "Pivot [mécaniciens/ostéopathes]. Nouvelle landing, nouveau brief. Validation 48h."

### Si ABANDON
> "Projet arrêté. Learnings documentés. Réunion lundi nouveau projet."

---

## Fallback

Si growth-agent ne fournit pas de données à 14h:
- **Décision par défaut**: ABANDON
- **Justification**: Pas de données = pas de validation = pas de build

---

*Matrice de décision — Dimanche 15/03 14h*