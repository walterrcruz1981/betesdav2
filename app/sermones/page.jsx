import styles from './sermones.module.scss'
import Videos from './Videos'

const getPlaylist = async () => {
    const result = await fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=UC8br10Qoo5bZvTKiJhPkdOA&maxResults=10&key=' + process.env.YOUTUBE_API_KEY)
    return result.json()
}


export default async function Sermones() {
    const playLists = await getPlaylist()
    return (
        <div className={styles.sermonesContainer}>
            {playLists.items?.map(playlist => {
                const { id, contentDetails, snippet = {} } = playlist;
                const videoCount = contentDetails.itemCount
                return <div key={id}>
                    <hr />
                    <h1>{snippet.title}<br></br> <span>{videoCount}{videoCount < 2 ? ' video' : ' videos'}</span></h1>
                    <Videos playListId={id} />
                </div>
            })}
        </div>
    )
}