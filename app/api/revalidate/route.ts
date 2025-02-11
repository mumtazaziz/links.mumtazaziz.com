import { Tables } from "@/utils/supabase/database.types";
import { revalidatePath } from "next/cache";

type InsertPayload = {
  type: "INSERT";
  table: string;
  schema: string;
  record: Tables<"profiles">;
  old_record: null;
};
type UpdatePayload = {
  type: "UPDATE";
  table: string;
  schema: string;
  record: Tables<"profiles">;
  old_record: Tables<"profiles">;
};
type DeletePayload = {
  type: "DELETE";
  table: string;
  schema: string;
  record: null;
  old_record: Tables<"profiles">;
};

type Payload = InsertPayload | UpdatePayload | DeletePayload;

export async function POST(request: Request) {
  const body: Payload = await request.json();
  if (body == null || body.schema !== "public" || body.table !== "profiles")
    return new Response(null, { status: 400 });
  if (body.old_record != null) revalidatePath(`/${body.old_record.name}`);
  if (body.record != null) revalidatePath(`/${body.record.name}`);
  return new Response(null);
}
