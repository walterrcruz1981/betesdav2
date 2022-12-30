import Link from "next/link"
import VideoCard from "./VideoCard"
import styles from './sermones.module.scss'

const getPlaylistItems = async (id) => {
    const videos = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=' + id + '&maxResults=25&key=' + process.env.YOUTUBE_API_KEY)
    return videos.json()
}

export default async function Videos({ playListId }) {
    const videos = await getPlaylistItems(playListId)
    return (
        <div className={styles.playListContainer}>
            {videos.items?.map(video => {
                const { contentDetails, id, snippet = {} } = video
                const { medium } = snippet.thumbnails
                const videoDetails = {
                    title: snippet.title,
                    image: medium.url
                }
                return <Link href={'/sermones/' + contentDetails.videoId} key={id}><VideoCard content={videoDetails} /></Link>
            })}
        </div>
    )
}