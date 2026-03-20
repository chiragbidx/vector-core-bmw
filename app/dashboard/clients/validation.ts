import { z } from "zod";

// Zod validation schemas for Client CRUD

export const clientCreateSchema = z.object({
  name: z.string().min(1, "Client name is required"),
  email: z.string().optional(),
  company: z.string().optional(),
  phone: z.string().optional(),
  notes: z.string().optional(),
});

export const clientUpdateSchema = clientCreateSchema.partial();