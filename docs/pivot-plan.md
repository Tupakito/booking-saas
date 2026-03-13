# Plan de Pivot — Options si validation échoue

> **Version** : 1.0.0  
> **Dernière mise à jour** : 2026-03-13  
> **Statut** : Plan B — À activer si < 10 pré-inscriptions  
> **Deadline décision** : Dimanche 15/03 14h

---

## 🎯 Contexte

**Hypothèse actuelle** : Les coiffeurs/beauté veulent une solution de réservation simplifiée.  
**Risque** : Si < 10 pré-inscriptions en 48h, l'hypothèse est invalidée.  
**Besoin** : Avoir 2-3 options de pivot prêtes à tester.

---

## 📊 Analyse des options de pivot

### Option 1 : Mécaniciens / Garagistes

| Critère | Évaluation |
|---------|------------|
| **Taille du marché** | 🇫🇷 35 000 garages auto en France |
| **Pain point** | Fort — RDV complexes (diagnostic, devis, pièces), clients impatients, téléphone saturé |
| **Volonté de payer** | Moyenne-Élevée — marges plus importantes que coiffure |
| **Concurrence** | Faible — peu d'outils dédiés (vs Calendly générique) |
| **Canal d'acquisition** | Google My Business, Facebook local, bouche-à-oreille |
| **Différenciation** | "Rendez" pourrait intégrer photos véhicule, devis estimatif, rappels entretien |

**Avantages**
- Marché moins saturé numériquement
- RDV plus complexes = valeur perçue plus forte
- Clients B2C + B2B (flottes entreprises)

**Inconvénients**
- Public moins "digital native"
- Cycle de décision plus long
- Besoins spécifiques (photos, devis, pièces)

**Score** : ⭐⭐⭐⭐ (4/5)

---

### Option 2 : Consultants / Freelances

| Critère | Évaluation |
|---------|------------|
| **Taille du marché** | 🇫🇷 3,8 millions de freelances en France |
| **Pain point** | Moyen — gestion RDV clients, mais déjà beaucoup d'outils (Calendly, etc.) |
| **Volonté de payer** | Élevée — habitués aux outils SaaS |
| **Concurrence** | Élevée — Calendly, Acuity, Cal.com dominent |
| **Canal d'acquisition** | LinkedIn, Twitter/X, communautés freelances |
| **Différenciation** | Difficile — besoin d'un angle unique (paiement intégré ? visio ?) |

**Avantages**
- Public très digital
- Décision rapide
- Prix moins sensible

**Inconvénients**
- Concurrence féroce
- Besoin de différenciation forte
- Marché déjà mature

**Score** : ⭐⭐ (2/5)

---

### Option 3 : Ostéopathes / Kinésithérapeutes

| Critère | Évaluation |
|---------|------------|
| **Taille du marché** | 🇫🇷 35 000 ostéos + 70 000 kinés |
| **Pain point** | Fort — RDV récurrents, patients chroniques, gestion mutuelles |
| **Volonté de payer** | Moyenne — profession libérale, marges contraintes |
| **Concurrence** | Moyenne — Doctolib domine mais est lourd/costaud |
| **Canal d'acquisition** | Ordres professionnels, salons, formations continues |
| **Différenciation** | "Rendez" plus léger que Doctolib, sans les frais élevés |

**Avantages**
- RDV récurrents = LTV élevé
- Doctolib critiqué (coût, complexité) = opportunité
- Marché régulé = confiance aux outils professionnels

**Inconvénients**
- Doctolib très ancré
- Contraintes réglementaires (données santé)
- Cycle de décision long (validation ordre professionnel)

**Score** : ⭐⭐⭐⭐ (4/5)

---

### Option 4 : Restaurants / Traiteurs

| Critère | Évaluation |
|---------|------------|
| **Taille du marché** | 🇫🇷 175 000 restaurants en France |
| **Pain point** | Fort — réservations tables, annulations dernière minute, no-shows |
| **Volonté de payer** | Moyenne — secteur en crise post-COVID |
| **Concurrence** | Élevée — TheFork, Resy, OpenTable dominent |
| **Canal d'acquisition** | Instagram, Google Maps, bouche-à-oreille |
| **Différenciation** | "Rendez" pourrait cibler traiteurs/petits restos ignorés par TheFork |

**Avantages**
- Marché énorme
- Pain point aigu (no-shows)

**Inconvénients**
- Concurrence massive
- Marges faibles = prix sensible
- Besoins très spécifiques (tables, couverts, menus)

**Score** : ⭐⭐ (2/5)

---

## 🏆 Recommandation

### Si validation coiffeurs échoue : **Pivot vers Mécaniciens (Option 1)**

**Pourquoi**
1. Marché sous-digitialisé (opportunité)
2. Pain point fort et spécifique
3. Concurrence faible sur le créneau "simple"
4. Canal d'acquisition accessible (GMB, local)
5. Valeur perçue élevée (RDV complexes)

### Alternative viable : **Ostéopathes/Kinés (Option 3)**

**Pourquoi**
1. Doctolib laisse des insatisfaits
2. RDV récurrents = bon LTV
3. Marché régulé = confiance

---

## 📋 Plan de pivot rapide (si < 10 pré-inscriptions)

### Jour J (Dimanche 15/03 après-midi)
- [ ] Analyse rapide des feedbacks reçus (pourquoi les coiffeurs ont dit non ?)
- [ ] Décision pivot : mécaniciens ou ostéos ?
- [ ] Brief créatif pour adapter la landing (2h de travail)

### J+1 (Lundi 16/03)
- [ ] Adapter landing page (nouveau copy, images)
- [ ] Nouveau formulaire Formspree
- [ ] Déploiement Vercel

### J+2 à J+3 (Mardi-Mercredi)
- [ ] Nouvelle campagne prospection
  - Mécaniciens : Google My Business + appels
  - Ostéos : Ordres professionnels + LinkedIn
- [ ] Objectif : 10 pré-inscriptions en 48h (même méthode)

---

## 🎨 Adaptations nécessaires par cible

### Si Mécaniciens
**Nouveau positionnement** : "Rendez — L'outil de réservation conçu pour les garages"

**Modifications landing**
- Hero : "Arrêtez de jouer au téléphone avec vos clients"
- Pain point : "Entre les devis, les pièces à commander et les clients qui rappellent 3 fois..."
- Solution : Photos véhicule, estimation devis, rappels entretien
- Pricing : 39€/mois (marché plus premium)

**Canaux prospection**
- Google My Business (scraping + appels)
- Facebook groupes "Mécanique auto"
- Salons automobiles (Equipauto, etc.)

### Si Ostéopathes
**Nouveau positionnement** : "Rendez — La réservation simple pour les thérapeutes"

**Modifications landing**
- Hero : "Moins de temps sur l'agenda, plus de temps pour vos patients"
- Pain point : "Doctolib coûte cher et est trop complexe pour votre cabinet"
- Solution : Rappels patients, gestion mutuelles, notes de séance
- Pricing : 25€/mois (marché plus price-sensitive)

**Canaux prospection**
- Ordres professionnels (emailing)
- Formations continues (partenariats)
- LinkedIn ciblé

---

## 📊 Comparaison synthétique

| Option | Marché | Pain | Concurrence | Facilité pivot | Recommandation |
|--------|--------|------|-------------|----------------|----------------|
| **Mécaniciens** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | **🏆 #1** |
| **Ostéopathes** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | **#2** |
| Consultants | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ❌ |
| Restaurants | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ❌ |

---

## 🎯 Décision finale recommandée

| Scénario | Action | Cible |
|----------|--------|-------|
| ≥ 10 pré-inscriptions coiffeurs | ✅ GO | Coiffeurs (plan initial) |
| 5-9 pré-inscriptions | 🟡 Relance 24h | Coiffeurs (affiner message) |
| < 5 pré-inscriptions | 🔴 PIVOT | **Mécaniciens** (Option 1) |
| 0 pré-inscriptions | 🔴🔴 PIVOT MAJEUR | **Ostéopathes** (Option 3) ou abandon |

---

## 🔗 Ressources liées

- [Positionnement actuel](./positioning.md)
- [Prospection Plan](./prospection-plan.md)
- [Landing Copy](./landing-copy.md)

---

**Dernier update** : 2026-03-13 01:46 UTC  
**Statut** : Plan B prêt — À activer si nécessaire Dimanche 14h
