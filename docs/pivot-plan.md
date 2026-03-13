# Plan de Pivot — 3 Scénarios

> **Version**: 1.0.0 | **Date**: 13/03/2024 | **Décision**: #42

---

## Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────┐
│                    VALIDATION EN COURS                      │
│              Cible: Coiffeurs/Beauté (48h)                  │
│                  Deadline: Dim 15/03 14h                    │
└─────────────────────────────────────────────────────────────┘
                              │
            ┌─────────────────┼─────────────────┐
            ▼                 ▼                 ▼
      ┌──────────┐      ┌──────────┐      ┌──────────┐
      │   GO     │      │  PIVOT   │      │  PIVOT   │
      │  Beauté  │      │Mécaniciens│     │Ostéopathes│
      │  ≥ 10 💚  │      │  < 10 🟡  │      │  < 5 🔴  │
      └──────────┘      └──────────┘      └──────────┘
            │                 │                 │
            ▼                 ▼                 ▼
      Build MVP         Même produit      Adaptation
      standard          + features        légère
                        devis/pièces      (notes patient)
```

---

## Scénario 1: GO Beauté (Coiffeurs)

### Critère
≥ 10 pré-inscriptions d'ici Dim 15/03 12h

### Action
Build MVP standard (5 jours) — voir [build-plan.md](build-plan.md)

### Spécificités
- Services: Coupe, coloration, brushing...
- Durée: 15-90 min
- Paiement: À la prestation (S2)
- Rappels: Email (S1), SMS (S2)

### Adaptation technique
Aucune — c'est la cible de référence

---

## Scénario 2: PIVOT Mécaniciens (Plan B Principal)

### Critère
< 10 pré-inscriptions beauté

### Action
Même produit + features additionnelles (devis, pièces)

### Spécificités
| Aspect | Coiffeurs | Mécaniciens |
|--------|-----------|-------------|
| **Services** | Coupe, coloration | Révision, freins, clim... |
| **Durée** | 15-90 min | 30 min - 4h |
| **Prérequis** | Aucun | Immatriculation, diagnostic |
| **Devis** | Non | Oui (obligatoire) |
| **Pièces** | Non | Oui (à commander) |
| **Urgence** | Non | Oui (panne) |
| **Prix** | Fixe | Variable (selon devis) |

### Adaptation technique

#### Option A: MVP minimal (recommandé)
```
Adaptations:
├── Schema: Aucune modification
├── Service.name: "Révision 15 000 km", "Freinage avant"
├── Service.description: "Inclut huile, filtres, points de contrôle"
└── Booking.notes: "Immatriculation: AB-123-CD, Kilométrage: 45000"
```

#### Option B: MVP avec devis (S1+)
```
Adaptations:
├── Nouvelle table: Quote (devis)
│   ├── bookingId (nullable, si RDV confirmé)
│   ├── items: JSON (pièces + main d'œuvre)
│   ├── totalAmount: Int
│   └── status: PENDING | ACCEPTED | REJECTED
├── Service.price: Devient "à partir de" (prix de base)
└── Page publique: "Demande de devis" avant RDV
```

**Recommandation**: Option A pour S1 (démarrage rapide), Option B pour S2.

### Landing adaptation
- Headline: "Vos clients réservent leur créneau en ligne"
- Sous-headline: "Devis inclus, pièces en stock garanti"
- CTA: "Demander un devis en ligne"
- Images: Garage, outils, voiture

### Canal d'acquisition
- Google My Business (prioritaire)
- SEO local ("garage + ville")
- Partenariats assurances

---

## Scénario 3: PIVOT Ostéopathes (Plan C)

### Critère
< 5 pré-inscriptions mécaniciens

### Action
Adaptation légère, cible santé

### Spécificités
| Aspect | Coiffeurs | Ostéopathes |
|--------|-----------|-------------|
| **Services** | Coupe, coloration | Ostéo générale, sport, nourrisson |
| **Durée** | 15-90 min | 45-60 min (fixe) |
| **Fréquence** | 4-8 semaines | 3-6 mois |
| **Dossier patient** | Non | Oui (obligatoire) |
| **Mutuelle** | Non | Oui (prise en charge) |
| **Rappels** | Email | SMS critique (santé) |
| **Concurrence** | Faible | Doctolib (complexe/cher) |

### Adaptation technique

#### Modifications minimales
```
Aucune modification du schema requise !
├── Service.name: "Ostéopathie générale", "Ostéo sport"
├── Service.description: "Première consultation ou suivi"
├── Booking.notes: Motif de consultation (déjà présent)
└── Booking.customerPhone: Obligatoire (rappels SMS)
```

#### Features optionnelles S2
```
├── Dossier patient: Utiliser Booking.notes (JSON structuré)
├── Historique: Requête bookings par customerEmail
├── Mutuelle: Champ texte libre dans notes
└── Ordonnance: Upload PDF (S3 — storage nécessaire)
```

### Compatibilité architecture

| Composant | Beauté | Ostéopathes | Adaptation |
|-----------|--------|-------------|------------|
| Auth | ✅ | ✅ | Aucune |
| Business/slug | ✅ | ✅ | Aucune |
| Services | ✅ | ✅ | Aucune |
| Slots | ✅ | ✅ | Aucune |
| Bookings | ✅ | ✅ | Aucune |
| Emails | ✅ | ✅ | Aucune |
| Dashboard | ✅ | ✅ | Aucune |

**Verdict**: 100% compatible, 0 jour d'adaptation technique.

### Landing adaptation
- Headline: "Vos patients prennent RDV en ligne, simplement"
- Sous-headline: "Sans les complexités de Doctolib"
- CTA: "Prendre rendez-vous"
- Images: Cabinet, table d'ostéo, bien-être

### Canal d'acquisition
- Ordre des ostéopathes (partenariat)
- SEO local ("ostéopathe + ville")
- Bouche-à-oreille (fort dans la profession)

---

## Matrice de décision

| Scénario | Seuil | Landing prête | Build démarre | Durée |
|----------|-------|---------------|---------------|-------|
| GO Beauté | ≥ 10 | ✅ Existante | Lun 16/03 | 5 jours |
| PIVOT Mécaniciens | < 10 | ⏳ Backup | Lun 16/03 | 5-7 jours* |
| PIVOT Ostéopathes | < 5 | ⏳ Backup | Lun 16/03 | 5 jours |

*+2 jours si features devis (Option B)

---

## Checklist pivot

### Si PIVOT mécaniciens (Dim 15/03 14h-18h)

- [ ] Déployer landing mécaniciens
- [ ] Adapter copy (devis, pièces, immatriculation)
- [ ] Modifier page register (champ "nom du garage")
- [ ] Option: Ajouter champ "immatriculation" dans booking
- [ ] Lancer prospection GMB

### Si PIVOT ostéopathes (Dim 15/03 14h-18h)

- [ ] Déployer landing ostéopathes
- [ ] Adapter copy (santé, Doctolib, mutuelle)
- [ ] Modifier page register (champ "diplôme")
- [ ] Activer SMS rappels (Resend)
- [ ] Lancer prospection ordre des ostéopathes

---

## Recommandation dev

### Priorité des scénarios

1. **GO Beauté** (70% probabilité) — Préparer le build
2. **PIVOT Mécaniciens** (20% probabilité) — Landing backup prête
3. **PIVOT Ostéopathes** (10% probabilité) — 100% compatible, 0 risque technique

### Préparations en cours

- ✅ Schema Prisma: Compatible tous scénarios
- ✅ Architecture: Adaptable sans modification
- ⏳ Landing mécaniciens: En préparation (growth-agent)
- ⏳ Landing ostéopathes: En préparation (growth-agent)

---

## Prochaines étapes

| Date | Heure | Action | Responsable |
|------|-------|--------|-------------|
| Dim 15/03 | 12h | Bilan pré-inscriptions beauté | growth-agent |
| Dim 15/03 | 14h | Décision go/pivot/pivot2 | chief-agent |
| Dim 15/03 | 14h-18h | Déploiement landing backup si pivot | growth-agent |
| Lun 16/03 | 14h | Démarrage build (scénario retenu) | dev-agent |

---

*Plan de pivot prêt — 3 scénarios, 0 temps perdu, décision Dimanche 14h*