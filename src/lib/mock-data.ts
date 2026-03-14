```typescript
export type BookingStatus = "confirmed" | "pending" | "cancelled" | "completed"

export interface Booking {
  id: string
  customerName: string
  customerEmail: string
  serviceName: string
  date: string
  time: string
  status: BookingStatus
  price: number
}

export interface KPIData {
  label: string
  value: string
  change: number
  changeLabel: string
  icon: string
}

export const mockKPIs = {
  today: {
    label: "Réservations aujourd'hui",
    value: "4",
    change: 33,
    changeLabel: "vs hier",
    icon: "calendar",
  },
  thisWeek: {
    label: "Cette semaine",
    value: "18",
    change: 12,
    changeLabel: "vs semaine dernière",
    icon: "calendar-range",
  },
  thisMonth: {
    label: "Ce mois-ci",
    value: "67",
    change: 8,
    changeLabel: "vs mois dernier",
    icon: "trending",
  },
  revenue: {
    label: "Revenus estimés",
    value: "2 450 €",
    change: 15,
    changeLabel: "vs mois dernier",
    icon: "euro",
  },
}

export const mockBookings: Booking[] = [
  {
    id: "1",
    customerName: "Marie Dupont",
    customerEmail: "marie.dupont@email.com",
    serviceName: "Coupe + brushing",
    date: "14 mars 2025",
    time: "10:00",
    status: "confirmed",
    price: 45,
  },
  {
    id: "2",
    customerName: "Jean Martin",
    customerEmail: "jean.martin@email.com",
    serviceName: "Coupe homme",
    date: "14 mars 2025",
    time: "11:30",
    status: "pending",
    price: 25,
  },
  {
    id: "3",
    customerName: "Sophie Bernard",
    customerEmail: "sophie.bernard@email.com",
    serviceName: "Coloration",
    date: "14 mars 2025",
    time: "14:00",
    status: "confirmed",
    price: 85,
  },
  {
    id: "4",
    customerName: "Lucas Petit",
    customerEmail: "lucas.petit@email.com",
    serviceName: "Coupe + barbe",
    date: "13 mars 2025",
    time: "16:00",
    status: "completed",
    price: 35,
  },
  {
    id: "5",
    customerName: "Emma Richard",
    customerEmail: "emma.richard@email.com",
    serviceName: "Brushing",
    date: "13 mars 2025",
    time: "09:00",
    status: "cancelled",
    price: 30,
  },
]

export const emptyBookings: Booking[] = []
```