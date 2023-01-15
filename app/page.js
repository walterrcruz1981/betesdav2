import styles from './(home-components)/home.module.scss'
import SlideShow from './(home-components)/SlideShow'
import Card from './(home-components)/Card'
import { cardContent } from './(home-components)/homePageContent'
import { supabase } from './utils/supabaseClient'

export const revalidate = 60;
async function getData() {
    const { data, error } = await supabase
        .from('home-slides')
        .select()
        .order('created_at', { ascending: false })
    return data
}

export default async function HomePage() {

    const data = await getData()

    const [misiones, planPeace, conectate, ministerios, conocenos] = cardContent
    return (
        <div className={styles.homeContainer}>
            <SlideShow content={data} />
            <div className={styles.cardsContainer}>
                <Card content={misiones} />
                <Card content={planPeace} />
            </div>
            <div className={styles.cardsContainer}>
                <Card content={conectate} />
                <Card content={ministerios} />
                <Card content={conocenos} />
            </div>
        </div>
    )
}