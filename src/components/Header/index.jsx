import classNames from "classnames";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia"
import styles from "./styles.module.css"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";


function Header() {
    const [openMibileMenu, setOpenMobileMenu] = useState(false);

    return <header className={styles["header"]}>
        <div className="container">
            <Link to="/" className={classNames(styles["link"], styles["logo"])}>Logo</Link>

            <button onClick={() => setOpenMobileMenu(true)} className={classNames(styles['is-mobile'], styles['btn-mobile'], 'btn', 'link')}>
                <FiMenu />
            </button>

            <nav className={classNames(
                styles["menu"],
                {
                    [styles['active']]: openMibileMenu
                }
            )}>
                <Link to={"/"} className={styles["link"]}>Main</Link>
                <Link to={"/products"} className={styles["link"]}>Products</Link>
                <Link to={"/contacts"} className={styles["link"]}>Contacts</Link>
                <button onClick={() => setOpenMobileMenu(false)} className={classNames(styles['btn-close'], 'btn', 'link')}>X</button>
            </nav>

            <SocialMedia />
        </div>
    </header >
}
export default Header;