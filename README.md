# Booking-Saas — Schéma Prisma Complet ✅

<p align="center">
  <img src="https://img.shields.io/badge/Schema-Complet-brightgreen?style=flat-square" alt="Schema" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-blue?style=flat-square" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/ORM-Prisma-2D3748?style=flat-square" alt="Prisma" />
</p>

---

## ✅ Schéma Prisma Finalisé

### Tables

| Table | Description | Relations |
|-------|-------------|-----------|
| **Business** | Profil professionnel | services, bookings, settings |
| **BusinessSettings** | Préférences et config | business (1:1) |
| **Service** | Prestations proposées | business, slots, bookings |
| **Slot** | Disponibilités récurrentes | service |
| **Booking** | Réservations clients | business, service |

### Enums

| Enum | Valeurs |
|------|---------|
| **BookingStatus** | CONFIRMED, CANCELLED, NO_SHOW, COMPLETED |
| **PaymentStatus** | PENDING, PAID, REFUNDED, FAILED |

---

## 🗂️ Structure Détaillée

### Business
```prisma
- id, slug, name, email, password
- description, phone, address, city, logo, website
- stripeAccountId, stripeOnboarding (S2)
- services[], bookings[], settings?
```

### BusinessSettings
```prisma
- notification preferences (email, SMS)
- booking rules (min notice, max advance, same-day)
- cancellation policy
```

### Service
```prisma
- id, businessId, name, description
- duration (minutes), price (cents), currency, color
- bufferTime (minutes between appointments)
- slots[], bookings[]
```

### Slot
```prisma
- id, serviceId, dayOfWeek (0-6)
- startTime, endTime (format "HH:MM")
- specificDate (optional override)
- isAvailable (boolean)
```

### Booking
```prisma
- id, businessId, serviceId
- customerName, customerEmail, customerPhone
- startTime, endTime, status
- amount (cents), currency, paymentStatus
- stripePaymentIntentId (S2)
- notes, internalNotes, cancelReason
- reminderSent, cancelledAt
```

---

## 🔗 Relations

```
Business 1:1 BusinessSettings
Business 1:n Service
Business 1:n Booking

Service 1:n Slot
Service 1:n Booking

Slot n:1 Service

Booking n:1 Business
Booking n:1 Service
```

---

## 📊 Indexes Optimisés

| Table | Index | Usage |
|-------|-------|-------|
| businesses | slug | Recherche par URL |
| businesses | isActive | Filtrage actifs |
| services | businessId | Liste par business |
| services | isActive | Filtrage actifs |
| slots | serviceId + dayOfWeek | Disponibilités |
| slots | specificDate | Overrides |
| bookings | businessId + startTime | Dashboard |
| bookings | serviceId + startTime | Conflits |
| bookings | customerEmail | Recherche client |

---

## 🚀 Fonctionnalités Supportées

### ✅ Actuellement
- Inscription business
- CRUD services
- Gestion créneaux récurrents
- Création réservations
- Annulation / no-show
- Stats dashboard

### ⏳ Stripe S2
- Paiement en ligne
- Facturation automatique
- Remboursements

---

## 📝 Migration

```bash
# Appliquer la migration complète
npx prisma migrate dev --name complete_schema

# Générer le client
npx prisma generate

# Vérifier la structure
npx prisma db pull
```

---

## 📚 Requêtes Complexes

Fichier: `src/lib/db-queries.ts`

| Fonction | Description |
|----------|-------------|
| `getAvailableSlots()` | Créneaux libres pour une date |
| `isTimeSlotAvailable()` | Vérification conflit |
| `getBusinessBookings()` | Liste avec filtres |
| `getBusinessStats()` | Stats dashboard |
| `getServiceWithAvailability()` | Service + dispos |

---

**Schéma Prisma complet — Prêt pour production ✅**

*Booking-Saas — Database layer finalisé*