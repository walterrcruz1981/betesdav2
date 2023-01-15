import Events from './Events';
import Slides from './Slides';
import { supabase } from '../utils/supabaseClient';

export const revalidate = 60;

async function getSlides() {

    const { data, error } = await supabase
        .from('home-slides')
        .select()
        .order('created_at', { ascending: false })
    return data
}
async function getEvents() {

    const { data, error } = await supabase
        .from('events')
        .select()
        .order('created_at', { ascending: false })
    return data
}

export default async function Admin() {
    const slides = await getSlides()
    const events = await getEvents()
    return (
        <div>
            <div>
                <h1>Slides en la database</h1>
                <Slides content={slides} />
            </div>
            <div>
                <h1>Events en la database</h1>
                <Events content={events} />
            </div>
        </div>
    )
}