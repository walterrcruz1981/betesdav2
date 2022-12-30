import styles from './sermones.module.scss'
import Image from "next/image"
export default function VideoCard({ content }) {
    return (
        <div className={styles.videoCardContainer}>
            <Image height={200} width={300} src={content.image} alt={content.title} />
            <h3>{content.title}</h3>
        </div>
    )
}