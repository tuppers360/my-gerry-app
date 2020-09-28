import { useState } from "react";
import Link from "next/link";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./navbar.module.scss";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link href="/">
            <a className="navbar-logo">
              <MdFingerprint className="navbar-icon" />
              Lavish
            </a>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link href="/">
              <a className="nav-links">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/stories">
              <a className="nav-links">Stories</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-links">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
