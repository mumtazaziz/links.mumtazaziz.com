import { createClient } from "@/utils/supabase/server";
import Profile from "./Profile";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("enabled", true)
    .order("name");

  return (
    <div className="list-group">
      {...(profiles || []).map((profile) => (
        <Profile profile={profile} key={profile.name} />
      ))}
    </div>
  );
}
