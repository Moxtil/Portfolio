import styles from "./page.module.css";
import Link from "next/link";
import logo from "./assets/bg1.jpeg";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h2>
            Hello , <span>I'm</span>
          </h2>
          <h1>Moxtil</h1>
          <h2 id={styles.job}>Front-End Developer</h2>
          <p>
            With knowledge in web development , I offer the best projects
            resulting in quality work .
          </p>
          <div className={styles.socialMedia}>
            <Link target="_blank" href={"https://www.instagram.com/moxtil1/"}>
              <FaInstagram />
            </Link>
            <Link target="_blank" href={"https://github.com/Moxtil"}>
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.upwork.com/freelancers/~015af7430dc4d43b9f?companyReference=1699050900555100161&mp_source=share"
              }
            >
              <FaUpwork />
            </Link>
          </div>
        </div>
        <div className={styles.rightSide}>
          <Image src={logo} alt="moxtil's Logo" width={340} height={340} />
        </div>
      </div>
    </div>
  );
}
