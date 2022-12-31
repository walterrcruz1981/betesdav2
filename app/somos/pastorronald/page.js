
import Image from 'next/image'
import Suggestions from '../../components/Suggestions'
import styles from './ronald.module.scss'
import { biography } from './ronaldContent'

export default function Page() {
    return (
        <div className={styles.ronaldContainer}>
            <h1>Biografia</h1>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroImage}>
                        <Image width={400} src={biography.imageUrl1} alt={biography.title} priority />
                    </div>
                    <div className={styles.textContent}>
                        <h1>Pastor Ronald Vides</h1>
                        <p>Pastor Fundador de Ministerios Betesda</p>
                    </div>
                </div>
            </div>
            {biography.description}
            <Suggestions />
        </div>
    )
}

