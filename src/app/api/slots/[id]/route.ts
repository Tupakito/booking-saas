import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// DELETE /api/slots/[id] — Supprimer un créneau
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Verify slot belongs to user's service
    const slot = await prisma.slot.findFirst({
      where: { id: params.id },
      include: { service: true },
    });

    if (!slot || slot.service.businessId !== session.user.id) {
      return NextResponse.json(
        { error: "Slot not found" },
        { status: 404 }
      );
    }

    await prisma.slot.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE slot error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}