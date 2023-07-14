import styles from "./styles.module.css"
import SocialMedia from "../SocialMedia";
function Footer(){
    
    return<div className={styles["section-footer"]}>
        <div className="container">
        <div>Logo</div>
        <div>Adress</div>
        <SocialMedia/>
        </div>
        </div>
}
export default Footer;