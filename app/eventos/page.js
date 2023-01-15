
import styles from './eventos.module.scss'
import EventCard from '../components/cards/EventCard'
import Image from 'next/image';
import { supabase } from '../utils/supabaseClient';
import heroImage from '../../public/images/hero/eventos.jpg'
export const revalidate = 60;
async function getData() {
    const { data } = await supabase.from('events').select()
    return data
}

async function EventosPage() {
    const data = await getData()
    return (
        <div className={styles.eventosContainer}>
            <div className={styles.hero}>
                <Image src={heroImage} width={1000} height={400} alt='eventos hero image' priority />
                <h1>Eventos</h1>
            </div>

            <div className={styles.eventsGrid}>
                {data?.map(event => (<EventCard key={event.id} content={event} />))}
            </div>
        </div>
    )
}

export default EventosPage