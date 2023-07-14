import {BiSolidStar} from "react-icons/bi"
import classNames from "classnames";
import styles from "./styles.module.css"
function ReviewsCard({data}){
    
    return <div className={styles["card-wrapper"]}>
        <div className={classNames(styles["img-wrapper"],"img-wrapper")}>
            <img src={data.src} alt={data.name}/> 
        </div>
        <header className={styles["info-wrapper"]}>
            <h4>{data.name}</h4>
            <div className={styles["stars-wrapper"]}>{new Array(data.stars).fill(<BiSolidStar/>)}</div>
        </header>
        <p>{data.description}</p>
    </div>
}
export default ReviewsCard;