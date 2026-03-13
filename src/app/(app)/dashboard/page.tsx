import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  const business = await prisma.business.findUnique({
    where: { userId: session!.user.id },
    include: {
      _count: {
        select: { services: true, bookings: true },
      },
    },
  });

  const upcomingBookings = await prisma.booking.findMany({
    where: {
      businessId: business?.id,
      startTime: { gte: new Date() },
      status: "CONFIRMED",
    },
    include: { service: true },
    orderBy: { startTime: "asc" },
    take: 5,
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tableau de bord</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-600">Prestations</p>
          <p className="text-3xl font-bold">{business?._count.services || 0}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-600">Réservations</p>
          <p className="text-3xl font-bold">{business?._count.bookings || 0}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-600">Page publique</p>
          <Link
            href={`/${business?.slug}`}
            target="_blank"
            className="text-blue-600 hover:underline text-sm"
          >
            Voir →
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Prochains rendez-vous</h2>
        </div>
        <div className="divide-y">
          {upcomingBookings.length === 0 ? (
            <p className="px-6 py-4 text-gray-500">Aucun rendez-vous à venir</p>
          ) : (
            upcomingBookings.map((booking) => (
              <div key={booking.id} className="px-6 py-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{booking.customerName}</p>
                    <p className="text-sm text-gray-600">{booking.service.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {new Date(booking.startTime).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                      })}
                    </p>
                    <p className="text-sm text-gray-600">
                      {new Date(booking.startTime).toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/app/services/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          + Nouvelle prestation
        </Link>
        <Link
          href={`/${business?.slug}`}
          target="_blank"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Voir ma page publique
        </Link>
      </div>
    </div>
  );
}