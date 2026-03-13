"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WeekViewProps {
  slots: Array<{
    dayOfWeek: number;
    startTime: string;
    endTime: string;
  }>;
  onSelectSlot: (day: number, time: string) => void;
  selectedSlot?: { day: number; time: string } | null;
}

const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8h à 19h

export function WeekView({ slots, onSelectSlot, selectedSlot }: WeekViewProps) {
  const [weekOffset, setWeekOffset] = useState(0);

  const getSlotsForDayAndHour = (dayIndex: number, hour: number) => {
    return slots.filter((slot) => {
      const slotHour = parseInt(slot.startTime.split(":")[0]);
      return slot.dayOfWeek === dayIndex && slotHour === hour;
    });
  };

  const isSlotSelected = (dayIndex: number, hour: number) => {
    if (!selectedSlot) return false;
    const slotHour = parseInt(selectedSlot.time.split(":")[0]);
    return selectedSlot.day === dayIndex && slotHour === hour;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setWeekOffset(weekOffset - 1)}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <span className="font-medium">
          Semaine du {new Date(Date.now() + weekOffset * 7 * 24 * 60 * 60 * 1000).toLocaleDateString("fr-FR")}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setWeekOffset(weekOffset + 1)}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-8 divide-x divide-gray-100">
        {/* Time column */}
        <div className="divide-y divide-gray-100">
          <div className="h-12 flex items-center justify-center text-sm font-medium text-gray-500">
            Heure
          </div>
          {hours.map((hour) => (
            <div
              key={hour}
              className="h-16 flex items-center justify-center text-sm text-gray-500"
            >
              {hour}h
            </div>
          ))}
        </div>

        {/* Days columns */}
        {days.map((day, dayIndex) => (
          <div key={day} className="divide-y divide-gray-100">
            <div className="h-12 flex items-center justify-center text-sm font-medium text-gray-700">
              {day}
            </div>
            {hours.map((hour) => {
              const availableSlots = getSlotsForDayAndHour(dayIndex, hour);
              const isSelected = isSlotSelected(dayIndex, hour);
              const hasSlots = availableSlots.length > 0;

              return (
                <button
                  key={hour}
                  disabled={!hasSlots}
                  onClick={() => hasSlots && onSelectSlot(dayIndex, `${hour}:00`)}
                  className={cn(
                    "w-full h-16 flex items-center justify-center text-sm transition-colors",
                    hasSlots && "hover:bg-primary-50 cursor-pointer",
                    !hasSlots && "bg-gray-50 cursor-not-allowed",
                    isSelected && "bg-primary-100 border-2 border-primary-500"
                  )}
                >
                  {hasSlots ? (
                    <span className="text-primary-700 font-medium">Dispo</span>
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}