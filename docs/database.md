# Documentation Database — Rendez

## Schéma complet

Le schéma Prisma inclut toutes les tables nécessaires pour le MVP :

### Tables Auth (NextAuth.js)
- `users` — Utilisateurs
- `accounts` — Comptes OAuth
- `sessions` — Sessions
- `verificationtokens` — Tokens de vérification

### Tables Métier
- `businesses` — Profils professionnels
- `services` — Prestations
- `slots` — Disponibilités récurrentes
- `bookings` — Réservations

### Enums
- `BookingStatus` — CONFIRMED, CANCELLED, NO_SHOW
- `PaymentStatus` — PENDING, PAID, REFUNDED, FAILED

## Relations

```
User 1:1 Business 1:n Service 1:n Slot
                     |
                     n:1
                  Booking
```

## Migration

```bash
# Appliquer la migration
npx prisma migrate dev

# Générer le client Prisma
npx prisma generate

# Vérifier la connexion
npx prisma db pull
```

## Seed

```bash
# Remplir avec données de test
npx prisma db seed
```