import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isBefore, startOfDay } from "date-fns";
import { fr } from "date-fns/locale";

interface Service {
  duration: number;
}

interface DatePickerProps {
  service: Service;
  onSelect: (date: Date) => void;
  onBack: () => void;
}

export function DatePicker({ service, onSelect, onBack }: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleDateClick = (date: Date) => {
    if (isBefore(date, startOfDay(new Date()))) return;
    setSelectedDate(date);
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onSelect(selectedDate);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Retour
        </Button>
        <h2 className="text-lg font-semibold text-gray-900">
          Choisissez une date
        </h2>
        <div className="w-20" /> {/* Spacer for alignment */}
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="sm" onClick={handlePrevMonth}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <span className="font-medium text-gray-900">
          {format(currentMonth, "MMMM yyyy", { locale: fr })}
        </span>
        <Button variant="ghost" size="sm" onClick={handleNextMonth}>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => {
          const isSelected = selectedDate && isSameDay(date, selectedDate);
          const isCurrentMonth = isSameMonth(date, currentMonth);
          const isPast = isBefore(date, startOfDay(new Date()));
          const isTodayDate = isToday(date);

          return (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              disabled={isPast}
              className={`
                h-10 rounded-lg text-sm font-medium transition-colors
                ${!isCurrentMonth && "text-gray-300"}
                ${isCurrentMonth && !isSelected && !isPast && "text-gray-700 hover:bg-gray-100"}
                ${isPast && "text-gray-300 cursor-not-allowed"}
                ${isTodayDate && !isSelected && "bg-primary-50 text-primary-600"}
                ${isSelected && "bg-primary-600 text-white"}
              `}
            >
              {format(date, "d")}
            </button>
          );
        })}
      </div>

      {/* Selected Date */}
      {selectedDate && (
        <div className="mt-6 p-4 bg-primary-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-primary-600">Date sélectionnée</p>
              <p className="font-medium text-primary-900">
                {format(selectedDate, "EEEE d MMMM yyyy", { locale: fr })}
              </p>
            </div>
            <Button onClick={handleConfirm}>
              Continuer
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}