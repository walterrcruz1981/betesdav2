import styles from '../sermones.module.scss'
import PlayBack from './PlayBack'
import Suggestions from './Suggestions'

const fetchVideo = async (videoId) => {
    const response = await fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + ',V4BV8hdSWmE,_JJB-OuFP1U,Dpjs3AzXGxY&maxResults=10&key=' + process.env.YOUTUBE_API_KEY)
    return response.json()
}

export default async function VideoDescription({ params: { videodescription } }) {
    const videos = await fetchVideo(videodescription)
    const suggestions = videos.items.splice(-3)
    return (
        <div className={styles.videoDescription}>
            <PlayBack videoInfo={videos.items[0]} />
            <Suggestions videoInfo={suggestions} />
        </div>
    )
}