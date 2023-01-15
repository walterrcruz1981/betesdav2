import Link from "next/link"
import styles from '../eventos.module.scss'
import Image from "next/image"
import AddToCalender from "./AddToCalendar";
import { supabase } from "../../utils/supabaseClient";
import { formatDate, standarTime } from "../../utils/myFunctions";

async function getData() {
    const { data } = await supabase.from('events').select()
    return data
}

async function EventDescription({ params }) {
    const cdn = 'https://adhlhwswdffizzjqdhoo.supabase.co/storage/v1/object/public/betesda-images/'

    const data = await getData()
    const eventId = params.id;
    const detailData = data.find(event => event.id === eventId)

    return (
        <div className={styles.eventDescription}>
            <div className={styles.hero}>
                <Image src={cdn + detailData.image} width={500} height={400} alt={detailData.title} priority />
                <h1>{detailData.title}</h1>
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.info}>
                    <h3>Cuando: <br></br><span>{formatDate(detailData.date) + ' '}</span><br></br><span> Hora: {standarTime(detailData.startTime)}</span> </h3>
                    <h3>Donde: <br></br><span>{detailData.location} </span></h3>
                    <AddToCalender content={detailData} />
                </div>
                <hr />
                <div className={styles.description}>
                    <div className={styles.imageContainer}>
                        <Image src={cdn + detailData.image} width={500} height={400} alt={detailData.title} />
                    </div>
                    <p>{detailData.invitePhrase}</p>
                    <hr></hr>
                    <p>{detailData.description}</p>
                </div>

            </div>
            <Link href={'/eventos'}>Todos los Eventos</Link>
        </div>
    )
}

export default EventDescription