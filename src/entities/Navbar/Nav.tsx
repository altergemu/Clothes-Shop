import { Link } from "@remix-run/react";

import { useEffect, useState } from "react";

import {
  FaCompass,
  FaEnvelope,
  FaHome,
  FaRegCircle,
  FaTimes,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";

import s from "./Nav.module.scss";

export function Navbar() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    function sticky() {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
    window.addEventListener("scroll", sticky);
  }, []);

  return (
    <header className={active ? s.header_active : s.header}>
      <div className={s.nav_bar}>
        <Link to={""} className={s.logo}>
          Logo
        </Link>
        <div className={s.navigation}>
          <div className={s.nav_items}>
            <FaTimes className={s.close} />
            <Link className={s.Link} to={"#"}>
              <FaHome className={s.icons} /> Home
            </Link>
            <Link className={s.Link} to={"#"}>
              <FaCompass className={s.icons} /> CompassExplore
            </Link>
            <Link className={s.Link} to={"#"}>
              <FaRegCircle className={s.icons} /> About
            </Link>
            <Link className={s.Link} to={"#"}>
              <LuLayoutList className={s.icons} /> Blog
            </Link>
            <Link className={s.Link} to={"#"}>
              <FaEnvelope className={s.icons} /> Contact
            </Link>
          </div>
        </div>
        <IoMenu className={s.menu} />
      </div>
    </header>
  );
}
