import { notFound, redirect } from "next/navigation";
import { profiles } from "@/profiles";

interface ProfileParams {
  slug: string[];
}

export async function generateStaticParams(): Promise<ProfileParams[]> {
  return profiles.map((profile) => ({ slug: [profile.name] }));
}

export default async function Profile({
  params,
}: {
  params: Promise<ProfileParams>;
}) {
  const name = (await params).slug.join("/");
  const profile = profiles.find((profile) => profile.name === name);
  if (profile == null) notFound();
  redirect(profile.url);
}
