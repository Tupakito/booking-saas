import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/dashboard/empty-state";
import { StatsCard } from "@/components/dashboard/stats-card";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { BookingListItem } from "@/components/dashboard/booking-list-item";
import { Calendar, TrendingUp, Users, Clock } from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [todayBookings, upcomingBookings, totalBookings, recentBookings] = await Promise.all([
    prisma.booking.count({
      where: { businessId: session.user.id, startTime: { gte: today, lt: tomorrow }, status: "CONFIRMED" },
    }),
    prisma.booking.count({
      where: { businessId: session.user.id, startTime: { gte: new Date() }, status: "CONFIRMED" },
    }),
    prisma.booking.count({ where: { businessId: session.user.id } }),
    prisma.booking.findMany({
      where: { businessId: session.user.id },
      include: { service: true },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600">Gérez vos réservations et votre activité</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Aujourd'hui" value={todayBookings} icon={Calendar} color="blue" />
        <StatsCard title="À venir" value={upcomingBookings} icon={Clock} color="green" />
        <StatsCard title="Total" value={totalBookings} icon={Users} color="purple" />
        <StatsCard title="Ce mois" value={0} icon={TrendingUp} color="orange" />
      </div>

      <QuickActions slug={session.user.slug} />

      {totalBookings > 0 ? (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Dernières réservations</h2>
                <Link href="/dashboard/bookings">
                  <Button variant="ghost" size="sm">Voir tout</Button>
                </Link>
              </div>
              <div className="space-y-3">
                {recentBookings.map((booking) => (
                  <BookingListItem key={booking.id} booking={booking} />
                ))}
              </div>
            </Card>
          </div>
          <Card className="p-6 bg-primary-50 border-primary-200 h-fit">
            <h3 className="font-medium text-primary-900 mb-2">Votre page publique</h3>
            <p className="text-sm text-primary-700 mb-4">Partagez ce lien pour recevoir des réservations</p>
            <code className="block bg-white px-3 py-2 rounded text-sm text-primary-800 mb-3">/book/{session.user.slug}</code>
            <Link href={`/book/${session.user.slug}`} target="_blank">
              <Button size="sm" variant="secondary" className="w-full">Voir ma page</Button>
            </Link>
          </Card>
        </div>
      ) : (
        <EmptyState slug={session.user.slug} />
      )}
    </div>
  );
}