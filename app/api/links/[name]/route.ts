import { LINKS_TABLE } from "@/utils/supabase";
import { createClient } from "@/utils/supabase/server";

async function getLink(name: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from(LINKS_TABLE)
    .select("*")
    .eq("name", name)
    .maybeSingle()
    .throwOnError();
  return data;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;

  try {
    const link = await getLink(name);
    if (!link) return new Response(null, { status: 404 });
    return Response.json(link);
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }
}
