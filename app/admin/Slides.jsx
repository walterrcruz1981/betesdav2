'use client'
import Image from "next/image"
import styles from './admin.module.scss'
import { supabase } from '../utils/supabaseClient'

export default function Slides({ content }) {
    const cdn = 'https://adhlhwswdffizzjqdhoo.supabase.co/storage/v1/object/public/betesda-images/'

    async function handleDelete(slide) {
        try {
            const { data, error } = await supabase
                .storage
                .from('betesda-images')
                .remove([slide.image])
        } catch (error) {
            console.log(error);
            aler('image could not be deleted')
        }

        try {
            const { data, error } = await supabase
                .from('home-slides')
                .delete()
                .match({ id: slide.id })
            alert('Slide has been deleted')
        } catch (error) {
            console.log(error);
            aler('slide could not be deleted')
        }
    }
    return (
        <div className={styles.slideContainer}>
            {content?.map((slide, index) => (
                <div key={index} className={styles.slide}>
                    <button onClick={() => { handleDelete(slide) }}>Delete</button>
                    <h1>{slide.buttonText}</h1>
                    <Image src={cdn + slide.image || somosImage} width={300} height={300} alt='somos  image' priority />
                </div>
            ))}

        </div>
    )
}