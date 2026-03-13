import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Euro, ArrowRight } from "lucide-react";
import { formatPrice, formatDuration } from "@/lib/utils";

interface Service {
  id: string;
  name: string;
  description: string | null;
  duration: number;
  price: number;
  color: string | null;
}

interface ServiceSelectorProps {
  services: Service[];
  onSelect: (service: Service) => void;
}

export function ServiceSelector({ services, onSelect }: ServiceSelectorProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Choisissez votre prestation
      </h2>

      <div className="space-y-3">
        {services.map((service) => (
          <Card
            key={service.id}
            className="p-4 cursor-pointer hover:border-primary-500 transition-colors"
            onClick={() => onSelect(service)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: service.color || "#3b82f6" }}
                />
                <div>
                  <h3 className="font-medium text-gray-900">{service.name}</h3>
                  {service.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {service.description}
                    </p>
                  )}
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
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
              <Button variant="secondary" size="sm">
                Choisir
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {services.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun service disponible pour le moment.
        </div>
      )}
    </div>
  );
}