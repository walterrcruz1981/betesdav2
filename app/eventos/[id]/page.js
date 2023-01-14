import Link from "next/link"
import styles from '../eventos.module.scss'
import Image from "next/image"
import { data } from "../eventsData";


async function EventDescription({ params }) {
    const eventId = params.id;
    const detailData = data.find(event => event.id === eventId)

    return (
        <div className={styles.eventDescription}>
            <div className={styles.hero}>
                <Image src={detailData.image} width={500} height={400} alt={detailData.title} priority />
                <h1>{detailData.title}</h1>
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.info}>
                    <h3>Cuando: <br></br><span>{detailData.date}</span></h3>
                    <h3>Donde: <br></br><span>{detailData.location}</span><br></br><span>En el  {detailData.venue}</span></h3>
                    <div className={styles.addToCalendarButton}>+ A Mi Calendario</div>
                </div>
                <hr />
                <div className={styles.description}>
                    <div className={styles.imageContainer}>
                        <Image src={detailData.image} width={500} height={400} alt={detailData.title} />
                    </div>
                    <p>{detailData.description}</p>
                </div>

            </div>
            <Link href={'/eventos'}>Todos los Eventos</Link>
        </div>
    )
}

export default EventDescription