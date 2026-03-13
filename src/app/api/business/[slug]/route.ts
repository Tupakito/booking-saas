import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const business = await prisma.business.findUnique({
      where: { slug: params.slug },
      select: {
        id: true,
        name: true,
        description: true,
        address: true,
        city: true,
        phone: true,
        logoUrl: true,
      },
    });

    if (!business) {
      return NextResponse.json(
        { error: "Business not found" },
        { status: 404 }
      );
    }

    const services = await prisma.service.findMany({
      where: {
        businessId: business.id,
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        description: true,
        duration: true,
        price: true,
        color: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ business, services });
  } catch (error) {
    console.error("Error fetching business:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}