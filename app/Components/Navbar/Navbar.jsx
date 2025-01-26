"use client";
import logo from "../../assets/bg1.jpeg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  weight: ["400", "500"],
  subsets: ["latin"],
});
export default function Navbar() {
  const [mobileMode, setMobileMode] = useState(false);
  const changeMode = () => {
    setMobileMode((prev) => (prev == true ? false : true));
  };
  const path = usePathname();
  return (
    <nav className="navbar">
      <div className="logoSide">
        <Link href={"/"}>
          <Image src={logo} alt="Moxtil Logo" width={50} height={50} />
        </Link>
      </div>
      <div
        className={`links ${exo2.className}`}
        style={mobileMode ? { maxHeight: "500px" } : { maxHeight: "0px" }}
      >
        <Link href={"/"} className={path === "/" ? "active" : ""}>
          Home
        </Link>
        <Link href={"/About"} className={path === "/About" ? "active" : ""}>
          About
        </Link>
        <Link href={"/Skills"} className={path === "/Skills" ? "active" : ""}>
          Skills
        </Link>
        <Link
          href={"/Projects"}
          className={path === "/Projects" ? "active" : ""}
        >
          Projects
        </Link>
      </div>
      <div onClick={changeMode} className="menuSide">
        {mobileMode ? (
          <AiOutlineFullscreenExit className="menuIcon" />
        ) : (
          <SlMenu className="menuIcon" />
        )}
      </div>
    </nav>
  );
}
