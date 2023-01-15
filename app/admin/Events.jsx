'use client'
import EventCard from "../components/cards/EventCard"
import styles from './admin.module.scss'
import { supabase } from "../utils/supabaseClient";


export default function Events({ content }) {

    async function handleDelete(event) {

        try {
            const { data } = await supabase
                .storage
                .from('betesda-images')
                .remove([event.image])
        } catch (error) {
            console.log(error);
            alert('Event could not be deleted')
        }

        try {
            const { data } = await supabase
                .from('events')
                .delete()
                .match({ id: event.id })
            alert('Event Deleted')
        } catch (error) {
            console.log(error);
            alert('Event could not be deleted')
        }
    }

    return (
        <div className={styles.eventsContainer}>
            {content?.map((event, index) => (
                <div key={index}>
                    <button onClick={() => { handleDelete(event) }}>Delete</button>
                    <EventCard content={event} />
                </div>
            ))}
        </div>
    )
}