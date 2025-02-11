import { createClient } from "@/utils/supabase/server";
import Profile from "./Profile";

export const dynamic = "force-static";

async function getProfiles() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("enabled", true)
    .order("name");
  return data;
}

export default async function HomePage() {
  const profiles = await getProfiles();

  return (
    <div className="list-group">
      {...(profiles || []).map((profile) => (
        <Profile profile={profile} key={profile.name} />
      ))}
    </div>
  );
}
