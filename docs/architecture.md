# Architecture MVP — Rendez

> **Version**: 1.2.0 | **Statut**: 🏗️ Prêt pour 3 scénarios | **Mise à jour**: 13/03/2024

---

## 🎯 Contexte

Suite aux décisions #37 (validation) et #42 (pivot), l'architecture est conçue pour s'adapter à **3 cibles potentielles** :

| Scénario | Cible | Probabilité | Adaptation technique |
|----------|-------|-------------|---------------------|
| 1 — GO | Coiffeurs/Beauté | 70% | Aucune (référence) |
| 2 — PIVOT | Mécaniciens | 20% | Légère (+devis) |
| 3 — PIVOT | Ostéopathes | 10% | Nulle (100% compatible) |

---

## Vue d'architecture multi-cibles

```
┌─────────────────────────────────────────────────────────────┐
│                      CORE PLATFORM                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │    Auth     │  │  Business   │  │     Services        │ │
│  │  (commun)   │  │   (slug)    │  │  (adaptable nom)    │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │    Slots    │  │   Bookings  │  │  Emails (Resend)    │ │
│  │(disponibilités)│  │  (RDV)     │  │  (rappels)          │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   ┌──────────┐          ┌──────────┐          ┌──────────┐
   │  BEAUTÉ  │          │MÉCANIQUE │          │  SANTÉ   │
   │          │          │          │          │          │
   │ • Coupe  │          │ • Révision│         │ • Ostéo  │
   │ • Coloration│       │ • Freins │          │ • Kiné   │
   │ • Brushing│         │ • Clim   │          │ • Suivi  │
   │          │          │          │          │          │
   │ Durée:   │          │ Durée:   │          │ Durée:   │
   │ 15-90min │          │ 30min-4h │          │ 45-60min │
   │          │          │          │          │          │
   │ Devis:   │          │ Devis:   │          │ Dossier: │
   │ ❌ Non   │          │ ✅ Oui   │          │ ✅ Oui   │
   └──────────┘          └──────────┘          └──────────┘
```

---

## Compatibilité par cible

### Schema Prisma

| Table/Champ | Beauté | Mécaniciens | Ostéopathes | Notes |
|-------------|--------|-------------|-------------|-------|
| `users` | ✅ | ✅ | ✅ | Identique |
| `businesses` | ✅ | ✅ | ✅ | Identique |
| `services.name` | "Coupe homme" | "Révision" | "Ostéo générale" | Texte libre |
| `services.duration` | 30 | 120 | 45 | Integer |
| `services.price` | 2500 | 0 (devis) | 6000 | Centimes |
| `slots` | ✅ | ✅ | ✅ | Identique |
| `bookings` | ✅ | ✅ | ✅ | Identique |
| `bookings.notes` | Préférences | Immatriculation | Motif | Texte libre |
| `bookings.customerPhone` | Optionnel | Requis | Requis | À valider |

### Verdict

- **Beauté → Ostéopathes**: 100% compatible, 0 modification
- **Beauté → Mécaniciens**: 95% compatible, champ `price` optionnel

---

## Adaptations par scénario

### Scénario 1: Beauté (GO)
```
Aucune adaptation requise
├── Landing: Existante
├── Schema: Standard
├── Features: Core uniquement
└── Build: 5 jours
```

### Scénario 2: Mécaniciens (PIVOT)
```
Adaptations Option A (MVP minimal):
├── Landing: Copy "devis en ligne"
├── Service.price: "À partir de" ou 0
├── Booking.notes: Immatriculation + km
└── Build: 5 jours

Adaptations Option B (Avec devis):
├── Nouvelle table: Quote (optionnel S2)
├── Service.price: Prix de base
├── Page publique: "Demande de devis"
└── Build: 7 jours (+2 jours)
```

### Scénario 3: Ostéopathes (PIVOT)
```
Aucune adaptation technique:
├── Landing: Copy "plus simple que Doctolib"
├── Schema: Identique
├── Features: Core + SMS rappels (S1)
└── Build: 5 jours
```

---

## Configuration multi-cibles

### Fichier de configuration

```typescript
// src/lib/target-config.ts
export type Target = "beauty" | "mechanic" | "health";

export const targetConfig = {
  beauty: {
    name: "Rendez",
    headline: "Vos clients réservent en ligne 24/7",
    serviceExamples: ["Coupe homme", "Coloration", "Brushing"],
    bookingFields: ["name", "email"],
    requiresQuote: false,
    requiresPhone: false,
  },
  mechanic: {
    name: "Rendez Pro",
    headline: "Devis et RDV en ligne pour votre garage",
    serviceExamples: ["Révision", "Freinage", "Climatisation"],
    bookingFields: ["name", "email", "phone", "immatriculation"],
    requiresQuote: true,
    requiresPhone: true,
  },
  health: {
    name: "Rendez Santé",
    headline: "RDV en ligne, sans les complexités",
    serviceExamples: ["Ostéopathie", "Kinésithérapie", "Suivi"],
    bookingFields: ["name", "email", "phone"],
    requiresQuote: false,
    requiresPhone: true,
  },
} as const;
```

### Switch de cible

```bash
# Changer de cible (avant build)
export NEXT_PUBLIC_TARGET=mechanic  # ou beauty, health

# Le code s'adapte automatiquement:
# - Landing copy
# - Champs formulaire
# - Features activées
```

---

## Roadmap adaptative

```
Semaine 1 (Lun-Ven):
├── J1: Auth (identique tous scénarios)
├── J2: Services CRUD (identique)
├── J3: Slots (identique)
├── J4: Page publique (adaptation copy/champs)
└── J5: Dashboard + Emails (identique)

Semaine 2 (si mécaniciens Option B):
├── J6: Table Quote + API
├── J7: UI devis client + pro
└── J8: Tests + polish
```

---

## Points de vigilance

| Risque | Scénario | Mitigation |
|--------|----------|------------|
| Schema inadapté | Mécaniciens | Price optionnel, notes JSON flexible |
| Concurrence forte | Ostéopathes (Doctolib) | Différenciation "simple" |
| Complexité devis | Mécaniciens | Option B = S2, pas S1 |
| Canal acquisition | Mécaniciens | GMB scraping, SEO local |

---

## Décision Dimanche 14h

| Critère | Beauté | Mécaniciens | Ostéopathes |
|---------|--------|-------------|-------------|
| Pré-inscriptions | ≥ 10 | < 10 | < 5 |
| Landing | Existante | Backup prête | Backup prête |
| Build démarre | Lun 16/03 | Lun 16/03 | Lun 16/03 |
| Confiance technique | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ | ⭐⭐⭐⭐⭐ |

---

*Architecture multi-cibles — prête pour les 3 scénarios, décision Dimanche 14h*