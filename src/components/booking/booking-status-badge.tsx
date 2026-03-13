import { cn } from "@/lib/utils";

interface BookingStatusBadgeProps {
  status: string;
  className?: string;
}

export function BookingStatusBadge({ status, className }: BookingStatusBadgeProps) {
  const styles = {
    CONFIRMED: "bg-green-100 text-green-700 border-green-200",
    CANCELLED: "bg-red-100 text-red-700 border-red-200",
    NO_SHOW: "bg-gray-100 text-gray-700 border-gray-200",
    PENDING: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };

  const labels = {
    CONFIRMED: "Confirmé",
    CANCELLED: "Annulé",
    NO_SHOW: "No-show",
    PENDING: "En attente",
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
      styles[status as keyof typeof styles] || styles.PENDING,
      className
    )}>
      {labels[status as keyof typeof labels] || status}
    </span>
  );
}