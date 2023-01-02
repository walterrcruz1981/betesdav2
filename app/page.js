import styles from './(home-components)/home.module.scss'
import SlideShow from './(home-components)/SlideShow'
import Card from './(home-components)/Card'

export default function HomePage() {
    return (
        <div className={styles.homeContainer}>
            <SlideShow />
            <div className={styles.cardsContainer}>
                <Card />
                <Card />
            </div>
            <div className={styles.cardsContainer}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}