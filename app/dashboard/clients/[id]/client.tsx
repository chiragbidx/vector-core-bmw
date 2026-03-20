"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

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

export default function ClientDetailClient({ client }: { client: ClientType }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-2">{client.name}</h1>
      <p className="text-muted-foreground mb-6">
        {client.company ? <>Company: {client.company}</> : null}
      </p>
      <div className="mb-8 border border-muted rounded-lg p-6 max-w-xl">
        <div className="mb-4">
          <div className="font-semibold mb-1">Contact Details</div>
          <div className="text-sm">Email: {client.email || <span className="text-muted-foreground">—</span>}</div>
          <div className="text-sm">Phone: {client.phone || <span className="text-muted-foreground">—</span>}</div>
        </div>
        <div>
          <div className="font-semibold mb-1">Notes</div>
          <div className="text-sm whitespace-pre-line">{client.notes || <span className="text-muted-foreground">No notes added.</span>}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <Link href={`/dashboard/clients/${client.id}/edit`}>
          <Button variant="secondary">Edit</Button>
        </Link>
        <form
          action={`/dashboard/clients/${client.id}/delete`}
          method="post"
          onSubmit={(e) => {
            if (!window.confirm("Are you sure you want to delete this client?")) {
              e.preventDefault();
            }
          }}
        >
          <Button variant="destructive" type="submit">Delete</Button>
        </form>
        <Link href="/dashboard/clients">
          <Button variant="outline">Back to Clients</Button>
        </Link>
      </div>
    </div>
  );
}