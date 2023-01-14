
import styles from './eventos.module.scss'
import EventCard from '../components/cards/EventCard'
import { data } from './eventsData';
import Image from 'next/image';

async function EventosPage() {
    const heroImage = 'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

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