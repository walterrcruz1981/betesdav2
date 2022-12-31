
import styles from './home.module.scss'
export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h3>tiitle</h3>
                <h4>soome subbtiitle jiibberish  here</h4>
                <button className='primary-button'>Somos</button>
            </div>
        </div>
    )
}