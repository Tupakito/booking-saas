import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createSlotSchema = z.object({
  serviceId: z.string(),
  dayOfWeek: z.number().min(0).max(6),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
});

// GET /api/slots — Liste des créneaux
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const serviceId = searchParams.get("serviceId");

    const where: any = {};
    
    if (serviceId) {
      // Verify service belongs to user
      const service = await prisma.service.findFirst({
        where: {
          id: serviceId,
          businessId: session.user.id,
        },
      });
      
      if (!service) {
        return NextResponse.json(
          { error: "Service not found" },
          { status: 404 }
        );
      }
      
      where.serviceId = serviceId;
    } else {
      // Get all slots for user's services
      const services = await prisma.service.findMany({
        where: { businessId: session.user.id },
        select: { id: true },
      });
      
      where.serviceId = { in: services.map((s) => s.id) };
    }

    const slots = await prisma.slot.findMany({
      where,
      include: { service: true },
      orderBy: [{ dayOfWeek: "asc" }, { startTime: "asc" }],
    });

    return NextResponse.json({ slots });
  } catch (error) {
    console.error("GET slots error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/slots — Créer un créneau
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validated = createSlotSchema.parse(body);

    // Verify service belongs to user
    const service = await prisma.service.findFirst({
      where: {
        id: validated.serviceId,
        businessId: session.user.id,
      },
    });

    if (!service) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }

    const slot = await prisma.slot.create({
      data: validated,
      include: { service: true },
    });

    return NextResponse.json({ slot }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }
    console.error("POST slot error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}