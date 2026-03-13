import { Card } from "@/components/ui/card";
import { Calendar, Clock, Euro } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { formatPrice, formatDuration } from "@/lib/utils";

interface Service {
  name: string;
  duration: number;
  price: number;
}

interface BookingSummaryProps {
  service: Service;
  date: Date;
  time: string;
}

export function BookingSummary({ service, date, time }: BookingSummaryProps) {
  return (
    <div>
      <h3 className="font-medium text-gray-900 mb-4">Récapitulatif</h3>
      
      <Card className="bg-gray-50">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Prestation</span>
            <span className="font-medium text-gray-900">{service.name}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Date
            </span>
            <span className="font-medium text-gray-900">
              {format(date, "EEEE d MMMM", { locale: fr })}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Heure
            </span>
            <span className="font-medium text-gray-900">{time}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Durée</span>
            <span className="font-medium text-gray-900">
              {formatDuration(service.duration)}
            </span>
          </div>
          
          <div className="border-t pt-3 mt-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-medium flex items-center">
                <Euro className="w-4 h-4 mr-1" />
                Total
              </span>
              <span className="text-xl font-bold text-primary-600">
                {formatPrice(service.price)}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}