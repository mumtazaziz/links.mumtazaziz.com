import { LINKS_TABLE } from "@/utils/supabase";
import { createClient } from "@/utils/supabase/server";

async function getLinks() {
  const supabase = await createClient();
  const { data } = await supabase
    .from(LINKS_TABLE)
    .select("*")
    .order("name")
    .throwOnError();
  return data;
}

export async function GET() {
  try {
    const links = await getLinks();
    return Response.json(links);
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }
}
