import { notFound, redirect } from "next/navigation";
import { ServerRuntime } from "next/types";
import { createClient as createServerClient } from "@/utils/supabase/server";

export const runtime: ServerRuntime = "edge";

interface ProfileParams {
  slug: string[];
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<ProfileParams>;
}) {
  const name = (await params).slug.join("/");

  const supabase = await createServerClient();
  const { data: profiles } = await supabase
    .from("profiles")
    .select("url")
    .eq("enabled", true)
    .eq("name", name);
  const [profile] = profiles || [];

  if (profile == null) notFound();
  redirect(profile.url);
}
