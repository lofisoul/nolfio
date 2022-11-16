import { SocialLink } from "../../utils/social-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";

export interface ISocialLinks {
  socials: SocialLink[];
}

export function SocialLinks({ socials }: ISocialLinks) {
  return (
    <ul className={styles.socialLinks}>
      {socials.map((social: SocialLink) => {
        return (
          <li key={social.id}>
            <a
              target="_blank"
              rel="noreferrer"
              href={social.url}
              id={styles[social.id]}
            >
              <FontAwesomeIcon icon={social.icon} />
              <span className="sr-only">{social.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
