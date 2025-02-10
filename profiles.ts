import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";

interface Profile {
  name: string;
  description: string;
  url: string;

  icon?: IconDefinition;
  username?: string;
}

export const profiles: Profile[] = [
  {
    name: "github",
    description: "GitHub",
    url: "https://github.com/mumtazaziz",

    icon: faGithub,
    username: "mumtazaziz",
  },
  {
    name: "instagram",
    description: "Instagram",
    url: "https://www.instagram.com/mumtazaziz05",

    icon: faInstagram,
    username: "mumtazaziz05",
  },
  {
    name: "youtube",
    description: "YouTube",
    url: "https://www.youtube.com/@mumtazaziz05",

    icon: faYoutube,
    username: "mumtazaziz05",
  },
];
