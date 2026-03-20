"use client";

import { useRef, useState } from "react";
import { createClientAction } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { useRouter } from "next/navigation";

const initialState = { status: "", message: "" };

export default function AddClientClient() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, action] = useActionState(async (data: FormData) => {
    const result = await createClientAction(data);
    return result || initialState;
  }, initialState);
  const [pending, setPending] = useState(false);
  const router = useRouter();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-2">Add Client</h1>
      <p className="text-muted-foreground mb-6">
        Enter client details to start tracking your relationship.
      </p>
      <form
        ref={formRef}
        action={async (data) => {
          setPending(true);
          const result = await action(data);
          setPending(false);
          if (result?.status === "success") {
            formRef.current?.reset();
            router.push("/dashboard/clients");
          }
        }}
        className="space-y-6 w-full max-w-xl"
      >
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name<span className="text-destructive">*</span>
          </label>
          <Input name="name" id="name" required autoFocus />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="company">
            Company
          </label>
          <Input name="company" id="company" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <Input name="email" id="email" type="email" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone
          </label>
          <Input name="phone" id="phone" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="notes">
            Notes
          </label>
          <Textarea name="notes" id="notes" rows={3} />
        </div>
        <div className="flex gap-2">
          <Button type="submit" disabled={pending}>
            {pending ? "Adding..." : "Add Client"}
          </Button>
        </div>
        {state.status === "error" && state.message && (
          <div className="text-destructive text-sm py-2">{state.message}</div>
        )}
      </form>
    </div>
  );
}