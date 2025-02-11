import { notFound, redirect } from "next/navigation";
import { createClient as createBrowserClient } from "@/utils/supabase/client";
import { createClient as createServerClient } from "@/utils/supabase/server";

interface ProfileParams {
  slug: string[];
}

export async function generateStaticParams(): Promise<ProfileParams[]> {
  const supabase = await createBrowserClient();
  const { data: profiles } = await supabase
    .from("profiles")
    .select("name")
    .eq("enabled", true);

  return (profiles || []).map((profile) => ({ slug: [profile.name] }));
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
