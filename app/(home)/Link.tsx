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
    const icon = Object.values(fab).find(
      (fa) => fa.iconName === data["fa-brands"]
    );
    return icon && <FontAwesomeIcon icon={icon} className="fs-4" />;
  }
}

interface LinkProps {
  link: LinkRecord;
}

export default function Link({ link }: LinkProps) {
  return (
    <NextLink
      href={link.url}
      className="list-group-item list-group-item-action d-flex gap-3 p-3 align-items-center"
      title={link.description || undefined}
    >
      <LinkIcon link={link} />
      <span>{link.description}</span>
      {link.username && (
        <span className="text-body-secondary">{link.username}</span>
      )}
    </NextLink>
  );
}
