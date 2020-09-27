import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link href="/" className="navbar-logo">
            <a>Lavish</a>
          </Link>
        </div>
      </div>
      <div className={styles.navBarStyle}>NAVBAR</div>
    </>
  );
}

export default NavBar;
