"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createBookingSchema = z.object({
  serviceId: z.string(),
  customerName: z.string().min(2),
  customerEmail: z.string().email(),
  customerPhone: z.string().optional(),
  startTime: z.date(),
  notes: z.string().optional(),
});

export async function createBooking(data: z.infer<typeof createBookingSchema>) {
  try {
    const validated = createBookingSchema.parse(data);

    // Get service to calculate end time and price
    const service = await prisma.service.findUnique({
      where: { id: validated.serviceId },
    });

    if (!service) {
      return { success: false, error: "Service non trouvé" };
    }

    // Check for conflicts
    const endTime = new Date(validated.startTime);
    endTime.setMinutes(endTime.getMinutes() + service.duration);

    const existingBooking = await prisma.booking.findFirst({
      where: {
        serviceId: validated.serviceId,
        status: "CONFIRMED",
        OR: [
          {
            startTime: { lte: validated.startTime },
            endTime: { gt: validated.startTime },
          },
          {
            startTime: { lt: endTime },
            endTime: { gte: endTime },
          },
        ],
      },
    });

    if (existingBooking) {
      return { success: false, error: "Ce créneau n'est plus disponible" };
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        ...validated,
        businessId: service.businessId,
        endTime,
        amount: service.price,
        status: "CONFIRMED",
      },
    });

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/bookings");

    return { success: true, data: booking };
  } catch (error) {
    console.error("Create booking error:", error);
    return { success: false, error: "Erreur lors de la création" };
  }
}

export async function cancelBooking(bookingId: string) {
  try {
    const booking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: "CANCELLED" },
    });

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/bookings");

    return { success: true, data: booking };
  } catch (error) {
    console.error("Cancel booking error:", error);
    return { success: false, error: "Erreur lors de l'annulation" };
  }
}

export async function confirmNoShow(bookingId: string) {
  try {
    const booking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status: "NO_SHOW" },
    });

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/bookings");

    return { success: true, data: booking };
  } catch (error) {
    console.error("No-show error:", error);
    return { success: false, error: "Erreur lors du marquage" };
  }
}

export async function getBookingsByBusiness(businessId: string, options?: {
  upcoming?: boolean;
  limit?: number;
}) {
  try {
    const where: any = { businessId };
    
    if (options?.upcoming) {
      where.startTime = { gte: new Date() };
      where.status = "CONFIRMED";
    }

    const bookings = await prisma.booking.findMany({
      where,
      include: { service: true },
      orderBy: { startTime: "asc" },
      take: options?.limit,
    });

    return { success: true, data: bookings };
  } catch (error) {
    console.error("Get bookings error:", error);
    return { success: false, error: "Erreur lors du chargement" };
  }
}