import { Button } from "@/components/ui/button";
import { ChevronLeft, Clock, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Service {
  name: string;
  duration: number;
}

interface TimeSlot {
  startTime: string;
  endTime: string;
}

interface TimeSlotPickerProps {
  service: Service;
  date: Date;
  slots: TimeSlot[];
  onSelect: (time: string) => void;
  onBack: () => void;
}

export function TimeSlotPicker({ service, date, slots, onSelect, onBack }: TimeSlotPickerProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Retour
        </Button>
        <h2 className="text-lg font-semibold text-gray-900">
          Choisissez un horaire
        </h2>
        <div className="w-20" />
      </div>

      {/* Date Info */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          {format(date, "EEEE d MMMM yyyy", { locale: fr })}
        </p>
        <p className="font-medium text-gray-900">
          {service.name} • {service.duration} min
        </p>
      </div>

      {/* Time Slots */}
      {slots.length === 0 ? (
        <div className="text-center py-8">
          <Clock className="w-12 h-12 mx-auto text-gray-300 mb-3" />
          <p className="text-gray-600">Aucun créneau disponible</p>
          <p className="text-sm text-gray-500 mt-1">
            Essayez une autre date
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {slots.map((slot, index) => (
            <button
              key={index}
              onClick={() => onSelect(slot.startTime)}
              className="p-3 text-center border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <span className="font-medium text-gray-900">
                {slot.startTime}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}