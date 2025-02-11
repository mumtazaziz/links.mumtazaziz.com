import { notFound, redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-static";

async function getProfileUrl(name: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("url")
    .eq("enabled", true)
    .eq("name", name);
  const [profile] = data || [null];
  return profile?.url;
}

interface ProfileParams {
  slug: string[];
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<ProfileParams>;
}) {
  const name = (await params).slug.join("/");

  const url = await getProfileUrl(name);

  if (url == null) notFound();
  redirect(url);
}
