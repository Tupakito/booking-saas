# Booking-Saas — API Routes ✅

<p align="center">
  <img src="https://img.shields.io/badge/API-Ready-brightgreen?style=flat-square" alt="API" />
  <img src="https://img.shields.io/badge/Bookings-CRUD-blue?style=flat-square" alt="Bookings" />
  <img src="https://img.shields.io/badge/Slots-CRUD-orange?style=flat-square" alt="Slots" />
</p>

---

## ✅ Routes API Livrées

### Bookings API

| Route | Méthode | Description |
|-------|---------|-------------|
| `/api/bookings` | GET | Liste des réservations (avec filtres) |
| `/api/bookings` | POST | Créer une réservation |
| `/api/bookings/[id]` | GET | Détail d'une réservation |
| `/api/bookings/[id]` | PATCH | Modifier une réservation |
| `/api/bookings/[id]` | DELETE | Annuler une réservation |

### Slots API

| Route | Méthode | Description |
|-------|---------|-------------|
| `/api/slots` | GET | Liste des créneaux |
| `/api/slots` | POST | Créer un créneau |
| `/api/slots/[id]` | DELETE | Supprimer un créneau |

---

## 🔒 Sécurité

- Authentification requise (NextAuth)
- Vérification propriété (businessId)
- Validation Zod des données
- Gestion des conflits de réservation

---

## 📊 Filtres Supportés

### GET /api/bookings
- `?status=CONFIRMED` — Filtrer par statut
- `?from=2024-03-01` — Date de début
- `?to=2024-03-31` — Date de fin

### GET /api/slots
- `?serviceId=xxx` — Filtrer par service

---

**API Routes prêtes — Foundation complète ✅**

*Booking-Saas — Backend API terminé*