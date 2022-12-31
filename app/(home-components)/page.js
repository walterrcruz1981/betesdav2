import styles from './home.module.scss'
import SlideShow from './SlideShow'
import Card from './Card'

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