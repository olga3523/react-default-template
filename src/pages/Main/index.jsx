import Footer from "../../components/Footer"
import Header from "../../components/Header"
import InfoCard from "../../components/InfoCard"
import PageItem from "../../components/PageItem"
import ReviewsCard from "../../components/ReviewsCard"
import SocialMedia from "../../components/SocialMedia"
import { INFO_CART_LIST, INVITE_PAGE_DATA, ABOUT_US_PAGE_DATA, REVIEW_CARD_LIST } from "../../constants"
import styles from "./styles.module.css"


function Main(){
    
    return <div>
        <Header/>
        <main className={styles["main"]}>
            <h1>Coming soon</h1>
        </main>

        <section className={styles["info-card-wrapper"]}>
            {INFO_CART_LIST.map((item)=> {

            return <InfoCard data={item}/>
                {/*return InfoCard({data:item,name:'olga'})*/}
            })}
        </section>

        <PageItem data={INVITE_PAGE_DATA}/>
        <PageItem isReverse={true} data={ABOUT_US_PAGE_DATA}/>

        <section className={styles["review-card-wrapper"]}>
            {REVIEW_CARD_LIST.map((card)=><ReviewsCard data={card} key={card.id}/>)}
        </section>

        <Footer/>
        
        
    </div>

}
export default Main;

