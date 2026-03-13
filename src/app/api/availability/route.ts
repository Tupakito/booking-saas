import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const serviceId = searchParams.get("serviceId");
  const dateParam = searchParams.get("date");

  if (!serviceId || !dateParam) {
    return NextResponse.json(
      { error: "Missing parameters" },
      { status: 400 }
    );
  }

  try {
    const date = new Date(dateParam);
    const dayOfWeek = date.getDay();

    // Get all slots for this service on this day
    const slots = await prisma.slot.findMany({
      where: {
        serviceId,
        dayOfWeek,
        isAvailable: true,
      },
      orderBy: { startTime: "asc" },
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
    const availableSlots = slots
      .map((slot) => ({
        startTime: slot.startTime,
        endTime: slot.endTime,
      }))
      .filter((slot) => {
        const [hours, minutes] = slot.startTime.split(":").map(Number);
        const slotStart = new Date(date);
        slotStart.setHours(hours, minutes, 0, 0);

        const [endHours, endMinutes] = slot.endTime.split(":").map(Number);
        const slotEnd = new Date(date);
        slotEnd.setHours(endHours, endMinutes, 0, 0);

        // Check if any booking overlaps
        return !existingBookings.some((booking) => {
          return (
            booking.startTime < slotEnd && booking.endTime > slotStart
          );
        });
      });

    return NextResponse.json({ slots: availableSlots });
  } catch (error) {
    console.error("Error fetching availability:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}