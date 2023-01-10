import styles from './sermones.module.scss'
import Image from "next/image"
export default async function VideoCard({ content }) {
    const videoDetails = await content;
    const { title, thumbnails } = await videoDetails;
    return (
        <div className={styles.videoCardContainer}>
            <Image height={200} width={300} src={thumbnails.medium?.url} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}