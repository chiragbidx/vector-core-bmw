import { getClientsForTeam } from "./actions";
import Client from "./client";
import { getAuthSession } from "@/lib/auth/session";

export default async function ClientsPage() {
  const session = await getAuthSession();
  const clients = await getClientsForTeam(session);
  return <Client clients={clients || []} />;
}