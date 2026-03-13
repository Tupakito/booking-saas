"use server";

import { prisma } from "@/lib/prisma";
import { slotSchema, SlotInput } from "@/server/schemas/service";
import { revalidatePath } from "next/cache";

export async function createSlot(serviceId: string, data: SlotInput) {
  try {
    const validated = slotSchema.parse(data);
    
    const slot = await prisma.slot.create({
      data: {
        ...validated,
        serviceId,
      },
    });

    revalidatePath("/dashboard/services");
    return { success: true, data: slot };
  } catch (error) {
    console.error("Create slot error:", error);
    return { success: false, error: "Erreur lors de la création du créneau" };
  }
}

export async function deleteSlot(slotId: string) {
  try {
    await prisma.slot.delete({
      where: { id: slotId },
    });

    revalidatePath("/dashboard/services");
    return { success: true };
  } catch (error) {
    console.error("Delete slot error:", error);
    return { success: false, error: "Erreur lors de la suppression" };
  }
}

export async function getSlotsByService(serviceId: string) {
  try {
    const slots = await prisma.slot.findMany({
      where: { serviceId },
      orderBy: [{ dayOfWeek: "asc" }, { startTime: "asc" }],
    });
    
    return { success: true, data: slots };
  } catch (error) {
    console.error("Get slots error:", error);
    return { success: false, error: "Erreur lors du chargement" };
  }
}