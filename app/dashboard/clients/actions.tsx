"use server";

import { db } from "@/lib/db/client";
import { clients, teamMembers } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { eq, and, desc } from "drizzle-orm";
import { redirect } from "next/navigation";
import { clientCreateSchema, clientUpdateSchema } from "./validation";

// Helper: Get first team membership for current user
async function getTeamForUser(userId: string) {
  const [teamMember] = await db
    .select()
    .from(teamMembers)
    .where(eq(teamMembers.userId, userId))
    .limit(1);
  return teamMember;
}

export async function createClientAction(formData: FormData) {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Extract values
  const values = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || undefined,
    company: formData.get("company")?.toString() || undefined,
    phone: formData.get("phone")?.toString() || undefined,
    notes: formData.get("notes")?.toString() || undefined,
  };

  const parsed = clientCreateSchema.safeParse(values);
  if (!parsed.success) {
    return { status: "error", message: parsed.error.errors[0]?.message || "Invalid input" };
  }

  // Team membership lookup (first/primary team)
  const team = await getTeamForUser(session.userId);
  if (!team) {
    return { status: "error", message: "Team not found" };
  }

  const [client] = await db
    .insert(clients)
    .values({
      ...parsed.data,
      teamId: team.teamId,
    })
    .returning();

  if (client) {
    redirect(`/dashboard/clients`);
  } else {
    return { status: "error", message: "Failed to create client" };
  }
}

export async function updateClientAction(clientId: string, formData: FormData) {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Extract values
  const values = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || undefined,
    company: formData.get("company")?.toString() || undefined,
    phone: formData.get("phone")?.toString() || undefined,
    notes: formData.get("notes")?.toString() || undefined,
  };

  const parsed = clientUpdateSchema.safeParse(values);
  if (!parsed.success) {
    return { status: "error", message: parsed.error.errors[0]?.message || "Invalid input" };
  }

  const team = await getTeamForUser(session.userId);
  if (!team) {
    return { status: "error", message: "Team not found" };
  }

  // Ensure this client belongs to the team
  const [client] = await db
    .update(clients)
    .set({
      ...parsed.data,
      updatedAt: new Date(),
    })
    .where(and(eq(clients.id, clientId), eq(clients.teamId, team.teamId)))
    .returning();

  if (client) {
    redirect(`/dashboard/clients/${clientId}`);
  } else {
    return { status: "error", message: "Failed to update client or not authorized" };
  }
}

export async function deleteClientAction(clientId: string) {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const team = await getTeamForUser(session.userId);
  if (!team) {
    return { status: "error", message: "Team not found" };
  }

  const [client] = await db
    .delete(clients)
    .where(and(eq(clients.id, clientId), eq(clients.teamId, team.teamId)))
    .returning();

  if (client) {
    redirect(`/dashboard/clients`);
  } else {
    return { status: "error", message: "Failed to delete client, or not authorized" };
  }
}

// Fetch clients for team
export async function getClientsForTeam(session: Awaited<ReturnType<typeof getAuthSession>>) {
  if (!session) return [];
  const team = await getTeamForUser(session.userId);
  if (!team) return [];
  const rows = await db
    .select()
    .from(clients)
    .where(eq(clients.teamId, team.teamId))
    .orderBy(desc(clients.createdAt));
  return rows;
}

// Fetch one client
export async function getClientForTeam(clientId: string, session: Awaited<ReturnType<typeof getAuthSession>>) {
  if (!session) return null;
  const team = await getTeamForUser(session.userId);
  if (!team) return null;
  const [client] = await db
    .select()
    .from(clients)
    .where(and(eq(clients.id, clientId), eq(clients.teamId, team.teamId)));
  return client || null;
}