import { getClientForTeam } from "../actions";
import Client from "./client";
import { getAuthSession } from "@/lib/auth/session";
import { notFound } from "next/navigation";

export default async function ClientDetailPage({ params }: { params: { id: string } }) {
  const session = await getAuthSession();
  const client = await getClientForTeam(params.id, session);
  if (!client) return notFound();

  return <Client client={client} />;
}