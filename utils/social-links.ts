import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faSoundcloud,
  faGithub,
  faLinkedin,
  faTwitter,
  faStrava,
  faSpotify,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

export interface SocialLink {
  name: string;
  url: string;
  id: string;
  icon: IconProp;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    url: "https://github.com/lofisoul",
    id: "github",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jason-nolfi-9b3b726",
    id: "linkedin",
    icon: faLinkedin,
  },
  {
    name: "Codepen",
    url: "https://codepen.io/lofisoul",
    id: "codepen",
    icon: faCodepen,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/lofisoul",
    id: "twitter",
    icon: faTwitter,
  },
  {
    name: "Soundcloud",
    url: "https://soundcloud.com/lofisoul",
    id: "soundcloud",
    icon: faSoundcloud,
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/lofisoul",
    id: "spotify",
    icon: faSpotify,
  },
  {
    name: "Strava",
    url: "https://www.strava.com/athletes/25391418",
    id: "strava",
    icon: faStrava,
  },
];
