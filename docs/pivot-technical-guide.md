# Guide Technique — Pivot Rapide depuis Rendez

> **Date**: 13/03/2024 | **Objectif**: Réutiliser 80% code Rendez pour Plan B | **Durée pivot**: 2 jours max

---

## Principe

**Ne pas réécrire, réutiliser.**

Le repo `booking-saas` contient:
- ✅ Architecture Next.js 14 + Prisma
- ✅ Auth complète (NextAuth v5)
- ✅ Database schema flexible
- ✅ UI components (Tailwind + shadcn)
- ✅ CI/CD Vercel

**Pivot = Adapter, pas réécrire.**

---

## Réutilisation par Plan B

### Option 1: Admin Freelance (chief-agent)

| Composant Rendez | Réutilisation | Adaptation |
|------------------|---------------|------------|
| Auth | 100% | Aucune |
| User/Business | 100% | `Business` → `Freelance` |
| Services | 60% | `Service` → `Mission` |
| Slots | 0% | Supprimer |
| Bookings | 30% | `Booking` → `Invoice` |
| Dashboard | 80% | Adapter métriques |
| Landing | 20% | Nouvelle copy |

**Temps estimé**: 2-3 jours  
**Complexité**: Moyenne (nouveaux concepts: factures, relances)

---

### Option 2: FeedBack Restaurants (growth-agent)

| Composant Rendez | Réutilisation | Adaptation |
|------------------|---------------|------------|
| Auth | 100% | Aucune |
| User/Business | 100% | `Business` → `Restaurant` |
| Services | 0% | Supprimer |
| Slots | 0% | Supprimer |
| Bookings | 0% | Supprimer |
| Dashboard | 60% | `Feedback` dashboard |
| Landing | 20% | Nouvelle copy |
| **Nouveau** | - | QR codes, formulaires feedback |

**Temps estimé**: 3-4 jours  
**Complexité**: Élevée (nouveau domaine, nouvelles features)

---

### Option 3: Consult — RDV Consultants (dev-agent) ⭐ RECOMMANDÉ

| Composant Rendez | Réutilisation | Adaptation |
|------------------|---------------|------------|
| Auth | 100% | Aucune |
| User/Business | 100% | Aucune |
| Services | 100% | "Coaching" au lieu de "Coupe" |
| Slots | 100% | Aucune |
| Bookings | 100% | Aucune |
| Dashboard | 100% | Aucune |
| Landing | 30% | Nouvelle copy |
| Emails | 100% | Aucune |

**Temps estimé**: 1 jour  
**Complexité**: Faible (même domaine, même schéma)

**Verdict**: 100% réutilisation technique, juste du rebranding.

---

## Guide Pivot "Consult" (1 jour)

### Étape 1: Rebranding (2h)

```bash
# 1. Nouvelle branche
git checkout -b pivot-consult

# 2. Remplacements globaux
find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.md" | xargs sed -i 's/Rendez/Consult/g'
find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.md" | xargs sed -i 's/salon/consultant/g'
find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.md" | xargs sed -i 's/coiffure/consulting/g'
```

### Étape 2: Landing (2h)

- Copier `landing-page/`
- Modifier copy:
  - "Vos clients réservent en ligne" → "Vos clients réservent votre expertise"
  - "Coupe homme" → "Consultation 1h"
  - "Salon de coiffure" → "Cabinet de consulting"

### Étape 3: Seed data (1h)

Modifier `prisma/seed.ts`:
```typescript
// Avant
name: "Salon Marie",
slug: "salon-marie",
services: ["Coupe homme", "Coloration"]

// Après
name: "Consulting Pro",
slug: "consulting-pro",
services: ["Consultation stratégie", "Coaching dirigeant"]
```

### Étape 4: Déploiement (1h)

```bash
# Vercel
vercel --prod
```

**Total: 1 jour**

---

## Guide Pivot "Admin Freelance" (2-3 jours)

### Étape 1: Schema modifications (4h)

```prisma
// Nouvelles tables
model Invoice {
  id          String   @id @default(cuid())
  freelanceId String
  clientName  String
  amount      Int      // cents
  status      InvoiceStatus
  dueDate     DateTime
  sentAt      DateTime?
  paidAt      DateTime?
}

model Expense {
  id          String   @id @default(cuid())
  freelanceId String
  category    String   // "frais", "matériel", etc.
  amount      Int
  date        DateTime
  receiptUrl  String?
}
```

### Étape 2: Features core (2 jours)

- Création factures
- Relances automatiques
- Suivi paiements
- Dashboard fiscalité

### Étape 3: Landing + déploiement (4h)

**Total: 2-3 jours**

---

## Recommandation

| Critère | Admin | FeedBack | Consult |
|---------|-------|----------|---------|
| Temps pivot | 2-3j | 3-4j | **1j** ⭐ |
| Réutilisation code | 60% | 40% | **100%** ⭐ |
| Risque technique | Moyen | Élevé | **Faible** ⭐ |
| Validation 48h | Possible | Possible | **Facile** ⭐ |
| Pain point | Aigu | Moyen | À vérifier |

**Recommandation dev**: **Consult** — Pivot en 1 jour, 100% réutilisation, validation rapide possible.

---

## Scripts de Pivot

### Script rapide "Consult"

```bash
#!/bin/bash
# scripts/pivot-to-consult.sh

echo "🚀 Pivot vers Consult (1 jour)"

# 1. Branche
git checkout -b pivot-consult

# 2. Rebranding
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/Rendez/Consult/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i 's/salon/consultant/g' {} \;

# 3. Landing
cp -r landing-page landing-consult
# Modifier copy manuellement

# 4. Seed
# Modifier prisma/seed.ts manuellement

# 5. Deploy
vercel --prod

echo "✅ Pivot terminé en ~6h"
```

---

## Checklist Pivot

### Avant pivot (Dimanche 14h)
- [ ] Décision ABANDON confirmée
- [ ] Choix Plan B (Admin/FeedBack/Consult)
- [ ] Repo archivé (tag `abandon-rendez-2024-03-15`)

### Pendant pivot (Dimanche 18h → Mardi 18h)
- [ ] Branche pivot créée
- [ ] Schema adapté (si besoin)
- [ ] Landing modifiée
- [ ] Seed data mise à jour
- [ ] Déploiement Vercel

### Après pivot (Mardi 18h)
- [ ] Validation 48h nouveau projet
- [ ] Prospection cible Plan B

---

## Ressources

- [Comparaison détaillée](./nouveau-projet-comparison.md)
- [Brief Admin Freelance](./nouveau-projet-brief.md) (chief-agent)
- [Brief FeedBack](./nouveau-projet-brief.md) (growth-agent)

---

*Guide pivot technique — Réutiliser, ne pas réécrire*