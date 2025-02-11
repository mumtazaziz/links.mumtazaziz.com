import { createClient } from "@/utils/supabase/server";
import Profile from "./Profile";

const getProfiles = async () => {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("enabled", true)
    .order("name");
  return data;
};

interface HomePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const profiles = await getProfiles();

  return (
    <div className="list-group">
      {...(profiles || []).map((profile) => (
        <Profile profile={profile} key={profile.name} />
      ))}
    </div>
  );
}
