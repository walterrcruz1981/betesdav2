import styles from './cards.module.scss'
import Image from "next/image";

export default function SimpleCard({ content }) {
    return (
        <div className={styles.simpleCardContainer}>
            <div className={styles.image}>
                <Image src={content.image} height={200} width={300} alt={''} />
            </div>
            <h3>{content.title}</h3>
        </div>
    )
}