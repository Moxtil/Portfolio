import styles from "./page.module.css";
import Image from "next/image";
import img1 from "../assets/rear-view-programmer-working-all-night-long.jpg";
export const metadata = {
  title: "Moxtil - About",
  description: "Generated by create next app",
};
export default function page() {
  return (
    <div className={styles.mainContainer}>
      <h1>About</h1>
      <div className={styles.container}>
        <div className={styles.imgCol}>
          <Image src={img1} alt="moxtil coding" width={400} height={300} />
        </div>
        <div className={styles.aboutSide}>
          <h1>Who Am I ?</h1>
          <p>
            My Name is <span> Muhammed</span> , A Software Engineering Student
            in Turkey. Front-End Developer With experience in web development .
            With 3 spoken languages to make easiest communication possible in
            <span>English</span> , <span>Turkish</span> and <span>Arabic</span>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  );
}
