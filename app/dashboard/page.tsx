import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default function DashboardHome() {
  // Redirect to Overview by default
  redirect("/dashboard/overview");
  return null;
}