import Link from "next/link";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tables } from "@/utils/supabase/database.types";
import "@fortawesome/fontawesome-svg-core/styles.css";

type Profile = Tables<"profiles">;

interface ProfileProps {
  profile: Profile;
}

function getIcon(profile: Profile) {
  return Object.values(fab).find((fa) => fa.iconName === profile.name);
}

export default function Profile({ profile }: ProfileProps) {
  const icon = getIcon(profile);

  return (
    <Link
      href={profile.url}
      className="list-group-item list-group-item-action d-flex gap-3 p-3 align-items-center"
      title={profile.description || undefined}
    >
      {icon && (
        <span className="fs-4">
          <FontAwesomeIcon icon={icon} fixedWidth />
        </span>
      )}
      <span>{profile.description}</span>
      {profile.username && (
        <span className="text-body-secondary">{profile.username}</span>
      )}
    </Link>
  );
}
