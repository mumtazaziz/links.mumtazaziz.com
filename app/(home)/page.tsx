import { LINKS_TABLE } from "@/utils/supabase";
import { createClient } from "@/utils/supabase/server";
import Link from "./Link";

async function getLinks() {
  const supabase = await createClient();
  const { data } = await supabase
    .from(LINKS_TABLE)
    .select("*")
    .order("name")
    .throwOnError();
  return data;
}

export default async function HomePage() {
  const links = await getLinks();
  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <Link link={link} key={link.name} />
      ))}
    </div>
  );
}
