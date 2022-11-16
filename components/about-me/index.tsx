import Image from "next/image";
import { SocialLinks } from "../social-links";
import { socialLinks } from "../../utils/social-links";
import styles from "./index.module.scss";

export function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <Image
        src="/assets/images/photo.jpg"
        alt="Jason Nolfi"
        width={170}
        height={170}
      />
      <h1>Jason Nolfi</h1>
      <p>Midwesterner living in 🌵 Austin, Texas</p>
      <p>
        Frontend Engineer with over a decade of experience crafting clean,
        accessible and performant user experiences for the Web.
      </p>
      <p>Music Nerd. Coffee lover. Always in motion.</p>
      <SocialLinks socials={socialLinks} />
    </div>
  );
}
