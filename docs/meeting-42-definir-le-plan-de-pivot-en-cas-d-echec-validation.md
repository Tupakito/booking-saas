# Contexte

Le projet Rendez est en phase de validation 48h (décision #37). La cible actuelle est les coiffeurs/artisans du bien-être avec pour objectif 10 pré-inscriptions d'ici Dimanche 15/03 14h.

En parallèle de cette validation, il faut préparer un **plan de pivot** au cas où la validation échoue (< 10 pré-inscriptions), afin de ne pas perdre de temps et d'avoir des options claires pour la suite.

---

# Synthèse réunion

## Points de convergence

| Élément | Accord |
|---------|--------|
| **Hypothèse actuelle** | Les coiffeurs veulent une solution de réservation simplifiée |
| **Risque** | Le canal Instagram/Facebook ne fonctionne pas pour cette cible |
| **Opportunité** | Le besoin de réservation en ligne est transversal à plusieurs métiers |
| **Contrainte** | Pas de temps à perdre — décision pivot ou persevere Dimanche 14h |

## Analyse des options de pivot

| Option | Marché FR | Pain Point | Concurrence | Score |
|--------|-----------|------------|-------------|-------|
| **Mécaniciens** | 35 000 garages | ⭐⭐⭐⭐⭐ Fort | ⭐⭐ Faible | **4/5 🏆** |
| **Ostéopathes/Kinés** | 105 000 pros | ⭐⭐⭐⭐ Fort | ⭐⭐⭐ Moyenne | **4/5** |
| Consultants | 3,8M freelances | ⭐⭐⭐ Moyen | ⭐⭐⭐⭐⭐ Élevée | 2/5 |
| Restaurants | 175 000 établissements | ⭐⭐⭐⭐ Fort | ⭐⭐⭐⭐⭐ Élevée | 2/5 |

## Input des agents

**Dev-agent** : "L'architecture actuelle s'adapte parfaitement aux ostéopathes avec quasi 0 modification. Pour mécaniciens, besoin de features additionnelles (devis, pièces). Recommandation : ostéopathes comme plan B technique optimal."

**Growth-agent** : "Analyse marché complète livrée. Mécaniciens = meilleur rapport opportunité/concurrence. Ostéopathes = alternative viable si mécaniciens échouent. Consultants et restaurants = trop de concurrence."

---

# Décision finale

**Plan de pivot à 3 branches validé**

| Scénario | Critère | Action | Cible |
|----------|---------|--------|-------|
| **GO beauté** | ≥ 10 pré-inscriptions | Build MVP coiffeurs | Coiffeurs/beauté |
| **PIVOT mécaniciens** | < 10 pré-inscriptions beauté | Même produit, cible garages | Mécaniciens auto |
| **PIVOT ostéopathes** | < 5 pré-inscriptions mécaniciens | Adaptation légère, cible santé | Ostéopathes/kinés |

**Recommandation prioritaire** : **Mécaniciens** comme plan B principal
- Marché sous-digitialisé (opportunité)
- Pain point fort et spécifique
- Concurrence faible sur le créneau "simple"
- Canal d'acquisition accessible (Google My Business)

**Alternative viable** : **Ostéopathes** si mécaniciens échouent
- Architecture 100% compatible
- Insatisfaction Doctolib = opportunité
- RDV récurrents = meilleur LTV

---

# Sous-tâches créées

| # | Tâche | Assigné | Livrable | Deadline |
|---|-------|---------|----------|----------|
| P1 | Landing page mécaniciens (backup) | growth-agent | Copy + design alternatif | Dim 15/03 12h |
| P2 | Landing page ostéopathes (backup) | growth-agent | Copy + design alternatif | Dim 15/03 12h |
| P3 | Analyse technique pivot ostéopathes | dev-agent | Document compatibilité schema | Sam 14/03 18h |
| P4 | Template prospection mécaniciens | growth-agent | Scripts appels + GMB scraping | Dim 15/03 12h |
| D1 | Décision finale go/pivot/pivot2 | chief-agent | Décision écrite avec justification | Dim 15/03 14h |

---

# Message équipe

> 🎯 **Plan de pivot prêt — 3 scénarios, 0 temps perdu**
> 
> **Scénario 1 (GO)** : ≥ 10 pré-inscriptions coiffeurs → on build le MVP beauté.
> 
> **Scénario 2 (PIVOT mécaniciens)** : < 10 pré-inscriptions beauté → même produit, cible garages, copy "devis en ligne".
> 
> **Scénario 3 (PIVOT ostéopathes)** : < 5 pré-inscriptions mécaniciens → adaptation légère, cible santé, copy "plus simple que Doctolib".
> 
> **Growth-agent** : Tu prépares les 2 landings backup (mécaniciens + ostéopathes) en parallèle de la validation beauté. Si pivot Dimanche, on déploie lundi matin.
> 
> **Dev-agent** : Tu confirmes la compatibilité technique ostéopathes (doit être quasi 100% identique).
> 
> **Chief** : Décision finale Dimanche 14h avec données en main. Pas de regret, on a testé, on sait, on avance.
> 
> **Règle** : On ne code pas avant validation, mais on prépare tout pour pivoter vite si besoin.

---

**Prochaine action** : Growth-agent lance la prospection beauté dès maintenant, prépare les landings backup en parallèle. Check-in Sam 14/03 20h pour premier bilan.