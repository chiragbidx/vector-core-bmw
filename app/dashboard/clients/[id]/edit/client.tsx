"use client";

import { useRef, useState } from "react";
import { updateClientAction } from "../../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { useRouter } from "next/navigation";

type ClientType = {
  id: string;
  name: string;
  email: string | null;
  company: string | null;
  phone: string | null;
  notes: string | null;
};

const initialState = { status: "", message: "" };

export default function EditClientClient({ client }: { client: ClientType }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, action] = useActionState(
    async (formData: FormData) => {
      const result = await updateClientAction(client.id, formData);
      return result || initialState;
    },
    initialState
  );
  const [pending, setPending] = useState(false);
  const router = useRouter();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-2">Edit Client</h1>
      <form
        ref={formRef}
        action={async (data) => {
          setPending(true);
          const result = await action(data);
          setPending(false);
          if (result?.status === "success") {
            formRef.current?.reset();
            router.push(`/dashboard/clients/${client.id}`);
          }
        }}
        className="space-y-6 w-full max-w-xl"
      >
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name<span className="text-destructive">*</span>
          </label>
          <Input name="name" id="name" required defaultValue={client.name} autoFocus />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="company">
            Company
          </label>
          <Input name="company" id="company" defaultValue={client.company || ""} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <Input name="email" id="email" type="email" defaultValue={client.email || ""} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone
          </label>
          <Input name="phone" id="phone" defaultValue={client.phone || ""} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="notes">
            Notes
          </label>
          <Textarea name="notes" id="notes" rows={3} defaultValue={client.notes || ""} />
        </div>
        <div className="flex gap-2">
          <Button type="submit" disabled={pending}>
            {pending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
        {state.status === "error" && state.message && (
          <div className="text-destructive text-sm py-2">{state.message}</div>
        )}
      </form>
    </div>
  );
}