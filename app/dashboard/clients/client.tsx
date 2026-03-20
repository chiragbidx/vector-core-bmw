"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ClientsClient() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-2">Clients</h1>
      <div className="rounded-lg border border-dashed border-secondary p-12 text-center my-8">
        <h2 className="text-xl font-medium mb-2">You haven&apos;t added any clients yet.</h2>
        <Link href="/dashboard/clients/new">
          <Button variant="default">Add Client</Button>
        </Link>
      </div>
    </div>
  );
}