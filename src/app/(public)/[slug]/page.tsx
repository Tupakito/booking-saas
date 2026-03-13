import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { WeekView } from "@/components/calendar/week-view";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Phone, Star, Clock, Euro } from "lucide-react";
import { formatPrice, formatDuration } from "@/lib/utils";

async function getBusiness(slug: string) {
  const business = await prisma.business.findUnique({
    where: { slug },
    include: {
      services: {
        where: { isActive: true },
        include: { slots: true },
      },
    },
  });

  if (!business) return null;
  return business;
}

export default async function PublicBookingPage({
  params,
}: {
  params: { slug: string };
}) {
  const business = await getBusiness(params.slug);

  if (!business) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-primary-600" />
            <span className="font-semibold text-gray-900">Booking-Saas</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Business Info */}
        <Card className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{business.name}</h1>
          <p className="text-gray-600 mb-4">{business.description}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>4.8 (127 avis)</span>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{business.address}, {business.city}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>{business.phone}</span>
            </div>
          </div>
        </Card>

        {/* Services */}
        <div className="space-y-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Choisissez votre prestation</h2>
          
          {business.services.map((service) => (
            <Card key={service.id} className="flex items-center justify-between p-4 hover:border-primary-500 transition-colors cursor-pointer">
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-lg"
                  style={{ backgroundColor: service.color || "#3b82f6" }}
                />
                <div>
                  <h3 className="font-medium text-gray-900">{service.name}</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 mt-1">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatDuration(service.duration)}
                    </span>
                    <span className="flex items-center">
                      <Euro className="w-4 h-4 mr-1" />
                      {formatPrice(service.price)}
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="secondary">Choisir</Button>
            </Card>
          ))}
        </div>

        {/* Calendar */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Choisissez une date</h2>
          <WeekView
            slots={business.services.flatMap((s) => s.slots)}
            onSelectSlot={(day, time) => console.log(day, time)}
          />
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Propulsé par <span className="font-medium text-primary-600">Booking-Saas</span>
        </p>
      </main>
    </div>
  );
}