import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookingCard } from "@/components/booking/booking-card";
import { BookingStatusBadge } from "@/components/booking/booking-status-badge";
import { 
  Calendar, 
  Filter, 
  Search,
  Download,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface BookingsPageProps {
  searchParams: {
    filter?: "upcoming" | "past" | "cancelled";
    page?: string;
  };
}

export default async function BookingsPage({ searchParams }: BookingsPageProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const filter = searchParams.filter || "upcoming";
  const page = parseInt(searchParams.page || "1");
  const perPage = 10;

  // Build where clause based on filter
  const where: any = { businessId: session.user.id };
  
  if (filter === "upcoming") {
    where.startTime = { gte: new Date() };
    where.status = "CONFIRMED";
  } else if (filter === "past") {
    where.startTime = { lt: new Date() };
    where.status = "CONFIRMED";
  } else if (filter === "cancelled") {
    where.status = "CANCELLED";
  }

  const [bookings, totalCount] = await Promise.all([
    prisma.booking.findMany({
      where,
      include: { service: true },
      orderBy: { startTime: filter === "upcoming" ? "asc" : "desc" },
      skip: (page - 1) * perPage,
      take: perPage,
    }),
    prisma.booking.count({ where }),
  ]);

  const totalPages = Math.ceil(totalCount / perPage);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Rendez-vous</h1>
          <p className="text-gray-600">Gérez toutes vos réservations</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-2">
          <Button variant="secondary" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exporter
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex gap-2">
          <Link href="/dashboard/bookings?filter=upcoming">
            <Button 
              variant={filter === "upcoming" ? "primary" : "secondary"} 
              size="sm"
            >
              À venir
            </Button>
          </Link>
          <Link href="/dashboard/bookings?filter=past">
            <Button 
              variant={filter === "past" ? "primary" : "secondary"} 
              size="sm"
            >
              Passés
            </Button>
          </Link>
          <Link href="/dashboard/bookings?filter=cancelled">
            <Button 
              variant={filter === "cancelled" ? "primary" : "secondary"} 
              size="sm"
            >
              Annulés
            </Button>
          </Link>
        </div>
        
        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un client..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <Button variant="secondary" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </Button>
        </div>
      </div>

      {/* Bookings List */}
      <Card className="divide-y divide-gray-100">
        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 mx-auto text-gray-300 mb-3" />
            <p className="text-gray-600">Aucun rendez-vous trouvé</p>
            <p className="text-sm text-gray-500 mt-1">
              Changez les filtres ou partagez votre page publique
            </p>
          </div>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {booking.customerName}
                    </h3>
                    <BookingStatusBadge status={booking.status} />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {booking.service.name} • {booking.service.duration} min
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(booking.startTime).toLocaleDateString("fr-FR", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    Détails
                  </Button>
                  {booking.status === "CONFIRMED" && new Date(booking.startTime) > new Date() && (
                    <Button variant="danger" size="sm">
                      Annuler
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-600">
            Page {page} sur {totalPages} • {totalCount} résultats
          </p>
          <div className="flex gap-2">
            <Link href={`/dashboard/bookings?filter=${filter}&page=${page - 1}`}>
              <Button variant="secondary" size="sm" disabled={page === 1}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </Link>
            <Link href={`/dashboard/bookings?filter=${filter}&page=${page + 1}`}>
              <Button variant="secondary" size="sm" disabled={page === totalPages}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}