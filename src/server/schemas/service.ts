import { z } from "zod";

export const serviceSchema = z.object({
  name: z.string().min(2, "Le nom doit faire au moins 2 caractères").max(100),
  description: z.string().max(500).optional(),
  duration: z.number().min(5, "Minimum 5 minutes").max(480, "Maximum 8 heures"),
  price: z.number().min(0, "Le prix ne peut pas être négatif").max(1000000),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Couleur hexadécimale invalide").optional(),
});

export type ServiceInput = z.infer<typeof serviceSchema>;

export const slotSchema = z.object({
  dayOfWeek: z.number().min(0).max(6),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Format HH:MM requis"),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Format HH:MM requis"),
});

export type SlotInput = z.infer<typeof slotSchema>;