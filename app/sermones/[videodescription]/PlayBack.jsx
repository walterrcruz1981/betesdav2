import styles from '../sermones.module.scss'

export default function PlayBack({ videoInfo }) {
    const videoSrc = `https://www.youtube.com/embed/${videoInfo.id}`;
    return (
        <div className={styles.playbackContainer}>
            <iframe src={videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h1>{videoInfo.snippet.title}</h1>
            <p>{videoInfo.snippet.description}</p>
        </div>
    )
}