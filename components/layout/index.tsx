import Header from "../header";
import NavBar from "../navbar";
import styles from "./layout.module.scss";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <div className={styles.layoutStyle}>
    <Header />
    <div className={styles.contentStyle}>{props.children}</div>
    <NavBar />
  </div>
);

export default Layout;
