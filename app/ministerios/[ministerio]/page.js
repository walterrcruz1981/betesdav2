
import { ministerios } from '../ministeriosContent'
import styles from './ministerio.module.scss'
import Suggestions from '../../components/Suggestions';
import Image from 'next/image';
import heroImage from '../../../public/images/hero/ministerios.webp'

function Ministerio({ params: { ministerio } }) {
    const content = ministerios.find(content => content.slug === ministerio)
    const domain = 'https://dih6tqxrn8ffv.cloudfront.net/'
    return (
        <div className={styles.mediaContainer}>

            <Image src={heroImage} alt='media hero image' priority />

            <div className={styles.heroText}>
                <h1>{content.title}</h1>
                <p>{content.intro}</p>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.cards}>
                    <h1>{content.mision.title}</h1>
                    <p>{content.mision.description}</p>
                </div>
                <div className={styles.cards}>
                    <h1>{content.vision.title}</h1>
                    <p>{content.vision.description}</p>
                </div>
            </div>
            <div className={styles.videoContainer}>
                <h1>¿Que Hacemos?</h1>
                <video autoPlay muted src={domain + content.video}></video>
            </div>
            <div className={styles.cardsContainer}>
                {content.duties?.map((duty, index) => (
                    <div className={styles.cards} key={index}>
                        <h2>{duty.title}</h2>
                        <Image src={domain + duty.image} width={300} height={300} alt={duty.title} />
                    </div>
                ))}
            </div>
            <Suggestions />
        </div>
    )
}

export default Ministerio