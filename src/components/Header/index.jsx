import classNames from "classnames";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia"
import styles from "./styles.module.css"



function Header(){
    return <header className={styles["header"]}>
        <div className="container">
        <Link to="/" className={classNames(styles["link"],styles["logo"])}>Logo</Link>

        <nav className={styles["menu"]}>

            <Link to={"/"} className={styles["link"]}>Main</Link>
            <Link to={"/products"} className={styles["link"]}>Products</Link>
            <Link to={"/contacts"} className={styles["link"]}>Contacts</Link>
        </nav>
        <SocialMedia/>

        </div>
    </header>
}
export default Header;