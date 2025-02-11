import { notFound, redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-static";

interface ProfileParams {
  slug: string[];
}

export async function GET(
  request: Request,
  { params }: { params: Promise<ProfileParams> }
) {
  const name = (await params).slug.join("/");

  const supabase = await createClient();
  const { data: profiles } = await supabase
    .from("profiles")
    .select("url")
    .eq("enabled", true)
    .eq("name", name);
  const [profile] = profiles || [];

  if (profile == null) notFound();
  redirect(profile.url);
}
