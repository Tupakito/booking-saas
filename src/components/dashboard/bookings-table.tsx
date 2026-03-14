```typescript
"use client"

import Link from "next/link"
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"
import { Booking, BookingStatus } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface BookingsTableProps {
  bookings: Booking[]
}

const statusMap: Record<BookingStatus, { label: string; variant: "default" | "secondary" | "destructive" | "success" | "warning" }> = {
  confirmed: { label: "Confirmé", variant: "success" },
  pending: { label: "En attente", variant: "warning" },
  cancelled: { label: "Annulé", variant: "destructive" },
  completed: { label: "Terminé", variant: "default" },
}

export function BookingsTable({ bookings }: BookingsTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Date & Heure</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Prix</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const status = statusMap[booking.status]
            
            return (
              <TableRow key={booking.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{booking.customerName}</span>
                    <span className="text-sm text-muted-foreground">
                      {booking.customerEmail}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{booking.serviceName}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{booking.date}</span>
                    <span className="text-sm text-muted-foreground">
                      {booking.time}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={status.variant}>{status.label}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {booking.price} €
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/bookings/${booking.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          Voir détails
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/bookings/${booking.id}/edit`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Modifier
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Annuler
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
```