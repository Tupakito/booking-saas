import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookingCard } from "@/components/booking/booking-card";
import { 
  Calendar, 
  TrendingUp, 
  Users, 
  Euro, 
  Plus, 
  ArrowRight,
  Clock
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Stats
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [
    totalBookings,
    todayBookings,
    upcomingBookings,
    totalRevenue
  ] = await Promise.all([
    prisma.booking.count({
      where: { businessId: session.user.id },
    }),
    prisma.booking.count({
      where: {
        businessId: session.user.id,
        startTime: {
          gte: today,
          lt: tomorrow,
        },
        status: "CONFIRMED",
      },
    }),
    prisma.booking.count({
      where: {
        businessId: session.user.id,
        startTime: { gte: new Date() },
        status: "CONFIRMED",
      },
    }),
    prisma.booking.aggregate({
      where: {
        businessId: session.user.id,
        status: "CONFIRMED",
      },
      _sum: { amount: true },
    }),
  ]);

  // Prochains rendez-vous (5)
  const upcomingBookingsList = await prisma.booking.findMany({
    where: {
      businessId: session.user.id,
      startTime: { gte: new Date() },
      status: "CONFIRMED",
    },
    include: { service: true },
    orderBy: { startTime: "asc" },
    take: 5,
  });

  // Derniers rendez-vous (5)
  const recentBookings = await prisma.booking.findMany({
    where: {
      businessId: session.user.id,
      startTime: { lt: new Date() },
      status: "CONFIRMED",
    },
    include: { service: true },
    orderBy: { startTime: "desc" },
    take: 5,
  });

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600">Vue d'ensemble de votre activité</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-100 text-sm">Aujourd'hui</p>
              <p className="text-3xl font-bold">{todayBookings}</p>
              <p className="text-primary-100 text-xs">rendez-vous</p>
            </div>
            <Calendar className="w-8 h-8 text-primary-200" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">À venir</p>
              <p className="text-3xl font-bold text-gray-900">{upcomingBookings}</p>
              <p className="text-gray-500 text-xs">rendez-vous</p>
            </div>
            <Clock className="w-8 h-8 text-gray-400" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total</p>
              <p className="text-3xl font-bold text-gray-900">{totalBookings}</p>
              <p className="text-gray-500 text-xs">réservations</p>
            </div>
            <Users className="w-8 h-8 text-gray-400" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Revenus</p>
              <p className="text-3xl font-bold text-gray-900">
                {formatPrice(totalRevenue._sum.amount || 0)}
              </p>
              <p className="text-gray-500 text-xs">ce mois</p>
            </div>
            <Euro className="w-8 h-8 text-gray-400" />
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Link href="/dashboard/services/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nouveau service
          </Button>
        </Link>
        <Link href={`/${session.user.slug}`} target="_blank">
          <Button variant="secondary">
            Voir ma page publique
          </Button>
        </Link>
        <Link href="/dashboard/bookings">
          <Button variant="secondary">
            Tous les rendez-vous
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Prochains rendez-vous */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Prochains rendez-vous
            </h2>
            <Link href="/dashboard/bookings" className="text-sm text-primary-600 hover:underline">
              Voir tout
            </Link>
          </div>
          
          <div className="space-y-3">
            {upcomingBookingsList.length === 0 ? (
              <Card className="text-center py-8">
                <Calendar className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <p className="text-gray-600">Aucun rendez-vous à venir</p>
                <p className="text-sm text-gray-500 mt-1">
                  Partagez votre page publique pour recevoir des réservations
                </p>
              </Card>
            ) : (
              upcomingBookingsList.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            )}
          </div>
        </div>

        {/* Derniers rendez-vous */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Derniers rendez-vous
            </h2>
            <Link href="/dashboard/bookings?filter=past" className="text-sm text-primary-600 hover:underline">
              Voir tout
            </Link>
          </div>
          
          <div className="space-y-3">
            {recentBookings.length === 0 ? (
              <Card className="text-center py-8">
                <TrendingUp className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                <p className="text-gray-600">Aucun rendez-vous passé</p>
              </Card>
            ) : (
              recentBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} variant="past" />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}