import { prisma } from "./prisma";
import { BookingStatus } from "@prisma/client";

// ============================================
// AVAILABILITY QUERIES
// ============================================

/**
 * Get available slots for a service on a specific date
 * Returns slots that are not booked
 */
export async function getAvailableSlots(serviceId: string, date: Date) {
  const dayOfWeek = date.getDay();

  // Get all slots for this service on this day
  const slots = await prisma.slot.findMany({
    where: {
      serviceId,
      dayOfWeek,
      isAvailable: true,
      OR: [
        { specificDate: null }, // Recurring slots
        { specificDate: date }, // Specific date override
      ],
    },
    orderBy: [{ startTime: "asc" }],
  });

  // Get existing bookings for this service on this date
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const existingBookings = await prisma.booking.findMany({
    where: {
      serviceId,
      status: { not: "CANCELLED" },
      startTime: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });

  // Filter out booked slots
  const availableSlots = slots.filter((slot) => {
    const slotStart = new Date(date);
    const [hours, minutes] = slot.startTime.split(":").map(Number);
    slotStart.setHours(hours, minutes, 0, 0);

    const slotEnd = new Date(date);
    const [endHours, endMinutes] = slot.endTime.split(":").map(Number);
    slotEnd.setHours(endHours, endMinutes, 0, 0);

    // Check if any booking overlaps with this slot
    return !existingBookings.some((booking) => {
      return (
        booking.startTime < slotEnd && booking.endTime > slotStart
      );
    });
  });

  return availableSlots;
}

/**
 * Check if a specific time slot is available
 */
export async function isTimeSlotAvailable(
  serviceId: string,
  startTime: Date,
  endTime: Date,
  excludeBookingId?: string
) {
  const where: any = {
    serviceId,
    status: { not: "CANCELLED" },
    OR: [
      {
        // New booking starts during existing booking
        startTime: { lte: startTime },
        endTime: { gt: startTime },
      },
      {
        // New booking ends during existing booking
        startTime: { lt: endTime },
        endTime: { gte: endTime },
      },
      {
        // New booking completely contains existing booking
        startTime: { gte: startTime },
        endTime: { lte: endTime },
      },
    ],
  };

  if (excludeBookingId) {
    where.id = { not: excludeBookingId };
  }

  const existingBooking = await prisma.booking.findFirst({
    where,
  });

  return !existingBooking;
}

// ============================================
// BOOKING QUERIES
// ============================================

/**
 * Get bookings for a business with filters
 */
export async function getBusinessBookings(
  businessId: string,
  options?: {
    status?: BookingStatus;
    from?: Date;
    to?: Date;
    upcoming?: boolean;
    limit?: number;
    offset?: number;
  }
) {
  const where: any = { businessId };

  if (options?.status) {
    where.status = options.status;
  }

  if (options?.from || options?.to) {
    where.startTime = {};
    if (options.from) where.startTime.gte = options.from;
    if (options.to) where.startTime.lte = options.to;
  }

  if (options?.upcoming) {
    where.startTime = { gte: new Date() };
    where.status = "CONFIRMED";
  }

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      include: { service: true },
      orderBy: { startTime: "asc" },
      take: options?.limit,
      skip: options?.offset,
    }),
    prisma.booking.count({ where }),
  ]);

  return { bookings, total };
}

/**
 * Get booking statistics for dashboard
 */
export async function getBusinessStats(businessId: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const [
    todayCount,
    upcomingCount,
    totalCount,
    thisMonthRevenue,
  ] = await Promise.all([
    // Today's bookings
    prisma.booking.count({
      where: {
        businessId,
        status: "CONFIRMED",
        startTime: {
          gte: today,
          lt: tomorrow,
        },
      },
    }),

    // Upcoming bookings
    prisma.booking.count({
      where: {
        businessId,
        status: "CONFIRMED",
        startTime: { gte: today },
      },
    }),

    // Total bookings
    prisma.booking.count({
      where: { businessId },
    }),

    // This month's revenue
    prisma.booking.aggregate({
      where: {
        businessId,
        status: "CONFIRMED",
        startTime: {
          gte: thisMonthStart,
          lte: thisMonthEnd,
        },
      },
      _sum: { amount: true },
    }),
  ]);

  return {
    today: todayCount,
    upcoming: upcomingCount,
    total: totalCount,
    revenue: thisMonthRevenue._sum.amount || 0,
  };
}

// ============================================
// SERVICE QUERIES
// ============================================

/**
 * Get service with availability info
 */
export async function getServiceWithAvailability(serviceId: string) {
  const service = await prisma.service.findUnique({
    where: { id: serviceId },
    include: {
      slots: {
        orderBy: [{ dayOfWeek: "asc" }, { startTime: "asc" }],
      },
      _count: {
        select: { bookings: true },
      },
    },
  });

  return service;
}

/**
 * Get all services for a business with booking counts
 */
export async function getBusinessServices(businessId: string) {
  const services = await prisma.service.findMany({
    where: {
      businessId,
      isActive: true,
    },
    include: {
      slots: true,
      _count: {
        select: {
          bookings: {
            where: {
              status: "CONFIRMED",
              startTime: { gte: new Date() },
            },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return services;
}