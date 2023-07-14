import classNames from "classnames";
import styles from "./styles.module.css"



function InfoCard({data}){
    return <div className={styles["card"]}>
        <div className="img-wrapper">
            <img src={data.src} alt={data.title} />
        </div>
        <h3 className={classNames(styles["title"],"title")}>{data.title}</h3>
        <p className={classNames(styles["description"],"description")}>{data.description}</p>
    </div>
}
/*function InfoCard(props){
    return <div className={styles["card"]}>
        <div className="img-wrapper">
            <img src={props.data.src} alt={props.data.title} />
        </div>
        <h3 className={classNames(styles["title"],"title")}>{props.data.title}</h3>
        <p className={classNames(styles["description"],"description")}>{props.data.description}</p>
        {props.name}
    </div>
}*/
export default InfoCard;