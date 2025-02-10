import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { profiles } from "@/profiles";

export default function Home() {
  return (
    <>
      <main className="container d-md-flex my-5">
        <h1 className="w-100 mb-4">See me on...</h1>
        <div className="list-group w-100">
          {...profiles.map((profile) => (
            <Link
              href={profile.url}
              className="list-group-item list-group-item-action d-flex gap-3 p-3 align-items-center"
              title={profile.description}
              key={profile.name}
            >
              {profile.icon && (
                <span className="fs-4">
                  <FontAwesomeIcon icon={profile.icon} fixedWidth />
                </span>
              )}
              <span>{profile.description}</span>
              {profile.username && (
                <span className="text-body-secondary">{profile.username}</span>
              )}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
