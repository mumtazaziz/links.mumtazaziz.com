import { notFound, redirect } from "next/navigation";
import { LINKS_TABLE } from "@/utils/supabase";
import { createClient } from "@/utils/supabase/server";

async function getLinkUrl(name: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from(LINKS_TABLE)
    .select("url")
    .eq("name", name)
    .maybeSingle()
    .throwOnError();
  return data?.url;
}

interface LinkParams {
  name: string;
}

export default async function LinkPage({
  params,
}: {
  params: Promise<LinkParams>;
}) {
  const { name } = await params;

  const url = await getLinkUrl(name);
  if (!url) notFound();
  redirect(url);
}
