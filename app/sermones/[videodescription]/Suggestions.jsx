import Image from 'next/image'
import Link from 'next/link'
import styles from '../sermones.module.scss'
export default function Suggestions({ videoInfo }) {
    return (
        <div className={styles.suggestionsContainer}>
            {videoInfo?.map(video => {
                const { id, snippet = {} } = video
                const { title, thumbnails = {} } = snippet
                const { medium } = thumbnails
                return <div key={id} className={styles.suggestionCard}>
                    <Link href={'/sermones/' + id}>
                        <div className={styles.imageContainer}>
                            <Image width={300} height={200} src={medium.url} alt={title} />
                        </div>
                    </Link>
                    <h2>{title}</h2>
                </div>
            })}
        </div>
    )
}