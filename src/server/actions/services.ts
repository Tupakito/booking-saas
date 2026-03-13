"use server";

import { prisma } from "@/lib/prisma";
import { serviceSchema, ServiceInput } from "@/server/schemas/service";
import { revalidatePath } from "next/cache";

export async function createService(businessId: string, data: ServiceInput) {
  try {
    const validated = serviceSchema.parse(data);
    
    const service = await prisma.service.create({
      data: {
        ...validated,
        businessId,
      },
    });

    revalidatePath("/dashboard/services");
    return { success: true, data: service };
  } catch (error) {
    console.error("Create service error:", error);
    return { success: false, error: "Erreur lors de la création du service" };
  }
}

export async function updateService(serviceId: string, data: Partial<ServiceInput>) {
  try {
    const service = await prisma.service.update({
      where: { id: serviceId },
      data,
    });

    revalidatePath("/dashboard/services");
    return { success: true, data: service };
  } catch (error) {
    console.error("Update service error:", error);
    return { success: false, error: "Erreur lors de la modification" };
  }
}

export async function deleteService(serviceId: string) {
  try {
    await prisma.service.update({
      where: { id: serviceId },
      data: { isActive: false },
    });

    revalidatePath("/dashboard/services");
    return { success: true };
  } catch (error) {
    console.error("Delete service error:", error);
    return { success: false, error: "Erreur lors de la suppression" };
  }
}

export async function getServicesByBusiness(businessId: string) {
  try {
    const services = await prisma.service.findMany({
      where: { businessId, isActive: true },
      include: { slots: true },
      orderBy: { createdAt: "desc" },
    });
    
    return { success: true, data: services };
  } catch (error) {
    console.error("Get services error:", error);
    return { success: false, error: "Erreur lors du chargement" };
  }
}