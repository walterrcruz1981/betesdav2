
import Image from 'next/image'
import Suggestions from '../components/Suggestions'
import styles from './ronald.module.scss'
import { biography } from './ronaldContent'
import pastorImage from '../../public/images/pastores/pastorRonald.webp'

export default function Page() {
    return (
        <div className={styles.ronaldContainer}>
            <h1>Biografia</h1>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroImage}>
                        <Image width={400} src={pastorImage} alt={biography.title} priority />
                    </div>
                    <div className={styles.textContent}>
                        <h1>Pastor Ronald Vides</h1>
                        <p>Pastor Fundador de Ministerios Betesda</p>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <p>{biography.description}</p>
            </div>
            <Suggestions />
        </div>
    )
}

