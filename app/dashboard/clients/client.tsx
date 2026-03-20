"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type ClientType = {
  id: string;
  name: string;
  email: string | null;
  company: string | null;
  phone: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};

export default function ClientsClient({ clients }: { clients: ClientType[] }) {
  const pathname = usePathname();
  const isEmpty = !clients || clients.length === 0;
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>
        <Link href="/dashboard/clients/new">
          <Button>Add Client</Button>
        </Link>
      </div>
      {isEmpty ? (
        <div className="rounded-lg border border-dashed border-secondary p-12 text-center my-8">
          <h2 className="text-xl font-medium mb-2">You haven&apos;t added any clients yet.</h2>
          <Link href="/dashboard/clients/new">
            <Button variant="default">Add Client</Button>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-primary/10">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-semibold">Name</th>
                <th className="px-4 py-2 text-left">Company</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b hover:bg-muted/50 transition">
                  <td className="px-4 py-2 font-medium">
                    <Link href={`/dashboard/clients/${client.id}`} className="text-primary hover:underline">{client.name}</Link>
                  </td>
                  <td className="px-4 py-2">{client.company || <span className="text-muted-foreground">—</span>}</td>
                  <td className="px-4 py-2">{client.email || <span className="text-muted-foreground">—</span>}</td>
                  <td className="px-4 py-2">{client.phone || <span className="text-muted-foreground">—</span>}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <Link href={`/dashboard/clients/${client.id}`}>
                      <Button size="sm" variant="outline">View</Button>
                    </Link>
                    <Link href={`/dashboard/clients/${client.id}/edit`}>
                      <Button size="sm" variant="secondary">Edit</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}