import Link from "next/link";
import { BookingStatusBadge } from "./booking-status-badge";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { formatDuration } from "@/lib/utils";

interface BookingCardProps {
  booking: {
    id: string;
    customerName: string;
    customerEmail: string;
    startTime: Date;
    endTime: Date;
    status: string;
    service: {
      name: string;
      duration: number;
      color: string | null;
    };
  };
  variant?: "default" | "past";
}

export function BookingCard({ booking, variant = "default" }: BookingCardProps) {
  const isPast = new Date(booking.endTime) < new Date();
  
  return (
    <div className={`bg-white rounded-lg border p-4 hover:shadow-md transition-shadow ${
      isPast ? "border-gray-200 opacity-75" : "border-gray-200"
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">{booking.customerName}</h3>
            <BookingStatusBadge status={booking.status} />
          </div>
          
          <p className="text-sm text-gray-600 mb-2">{booking.service.name}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(booking.startTime).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "short",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {new Date(booking.startTime).toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              {" - "}
              {formatDuration(booking.service.duration)}
            </span>
          </div>
        </div>
        
        <div 
          className="w-3 h-12 rounded-full ml-4"
          style={{ backgroundColor: booking.service.color || "#3b82f6" }}
        />
      </div>
      
      {!isPast && booking.status === "CONFIRMED" && (
        <div className="mt-3 pt-3 border-t flex gap-2">
          <Link 
            href={`/dashboard/bookings/${booking.id}`}
            className="text-sm text-primary-600 hover:underline flex items-center"
          >
            Détails
            <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
      )}
    </div>
  );
}