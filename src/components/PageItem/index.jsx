import classNames from "classnames";
import styles from "./styles.module.css"

function PageItem({data,isReverse=false}){
    return <section>
        <div className={classNames(styles["container"],{[styles["reverse"]]:isReverse},"container")}>
            <div className={classNames(styles["img-wrapper"],"img-wrapper")}>
                <img src={data?.src} alt="img" />
            </div>
            <div className={styles["text-wrapper"]}>
                <h3 className={"title"}>{data?.title}</h3>
                <p className={"description"}>{data?.description}</p>

            </div>

        </div>
    </section>

}
export default PageItem;

