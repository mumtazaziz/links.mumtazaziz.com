import NextLink from "next/link";
import { fab, IconName } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { z } from "zod";
import { Tables } from "@/utils/supabase/database.types";
import "@fortawesome/fontawesome-svg-core/styles.css";

type LinkRecord = Tables<"links">;
const LinkRecordIcon = z
  .object({
    "fa-brands": z.string().transform((x) => x as IconName),
  })
  .partial();

function LinkIcon({ link }: { link: LinkRecord }) {
  const { data } = LinkRecordIcon.safeParse(link.icon);
  if (data?.["fa-brands"]) {
    const iconName = data["fa-brands"];
    const icon = Object.values(fab).find((fa) => fa.iconName === iconName);
    return (
      icon && <FontAwesomeIcon icon={icon} fixedWidth className="text-2xl" />
    );
  }
}

interface LinkProps {
  link: LinkRecord;
}

export default function Link({ link }: LinkProps) {
  return (
    <NextLink
      href={link.url}
      className="flex items-center gap-4 rounded-lg p-4 hover:bg-neutral-200 hover:text-black hover:dark:bg-neutral-800 hover:dark:text-white"
      title={link.description || undefined}
    >
      <LinkIcon link={link} />
      {link.description && <div>{link.description}</div>}
      {link.username && (
        <div className="text-secondary ms-auto">{link.username}</div>
      )}
    </NextLink>
  );
}
