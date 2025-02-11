import { Metadata } from "next/types";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import Profile from "./Profile";

export const metadata: Metadata = {
  description: "Hit me up on my profiles or check out mumtazaziz.com.",
};

export default async function RootPage() {
  const supabase = await createClient();
  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("enabled", true);

  return (
    <>
      <main className="container my-5 h-100">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h1>Hit me up on...</h1>
            <p>
              or check out{" "}
              <Link href="https://www.mumtazaziz.com">mumtazaziz.com</Link>
            </p>
          </div>
          <div className="col-md-6">
            <div className="list-group">
              {...(profiles || []).map((profile) => (
                <Profile profile={profile} key={profile.name} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
