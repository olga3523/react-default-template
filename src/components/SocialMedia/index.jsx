import { MdOutlineFacebook } from "react-icons/md"
import { FaInstagram,FaTwitter  } from "react-icons/fa6"
import styles from "./style.module.css"
function SocialMedia(){
    return <nav className={styles["social-media"]}>
            <a href="#" className={styles["link"]}><MdOutlineFacebook/></a>
            <a href="#" className={styles["link"]}><FaInstagram/></a>
            <a href="#" className={styles["link"]}><FaTwitter/></a>
        </nav>
}
export default SocialMedia;