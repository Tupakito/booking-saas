import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatPrice, formatDuration } from "@/lib/utils";
import { Plus, Clock, Euro, Calendar } from "lucide-react";

export default async function ServicesPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const services = await prisma.service.findMany({
    where: { businessId: session.user.id, isActive: true },
    include: { slots: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mes services</h1>
          <p className="text-gray-600">Gérez vos prestations et disponibilités</p>
        </div>
        <Link href="/dashboard/services/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nouveau service
          </Button>
        </Link>
      </div>

      {services.length === 0 ? (
        <Card className="text-center py-12">
          <Calendar className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucun service encore
          </h3>
          <p className="text-gray-600 mb-4">
            Créez votre première prestation pour commencer à recevoir des réservations
          </p>
          <Link href="/dashboard/services/new">
            <Button>Créer mon premier service</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid gap-4">
          {services.map((service) => (
            <Card key={service.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-lg"
                  style={{ backgroundColor: service.color || "#3b82f6" }}
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {service.description || "Aucune description"}
                  </p>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatDuration(service.duration)}
                    </span>
                    <span className="flex items-center">
                      <Euro className="w-4 h-4 mr-1" />
                      {formatPrice(service.price)}
                    </span>
                    <span>{service.slots.length} créneaux</span>
                  </div>
                </div>
              </div>
              <Link href={`/dashboard/services/${service.id}`}>
                <Button variant="secondary">Modifier</Button>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}