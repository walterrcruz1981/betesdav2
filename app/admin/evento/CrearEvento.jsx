'use client'

import { useState } from 'react'
import styles from './evento.module.scss'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../../utils/supabaseClient';

export default function CrearEvento() {

    const defaultImage = 'https://images.unsplash.com/photo-1673630405530-d7f0e97a4f78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    const [image, setImage] = useState('')
    const [prevImage, setPrevImage] = useState('')
    const [evento, setEvento] = useState({
        title: '',
        date: '',
        startTime: '',
        endTime: '',
        location: '',
        invitePhrase: '',
        description: ''
    })
    function handleChange(e) {
        const { name, value } = e.target
        setEvento(prev => (
            {
                ...prev,
                [name]: value
            }
        ))
        console.log(evento.startTime)
    }


    function handleImageChange(e) {
        const file = e.target.files[0]
        setPrevImage(URL.createObjectURL(file))
        setImage(file)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const imageUrl = uuidv4() + image.name
        const event = {
            title: evento.title,
            date: evento.date,
            startTime: evento.startTime,
            endTime: evento.endTime,
            location: evento.location,
            invitePhrase: evento.invitePhrase,
            description: evento.description,
            image: imageUrl
        }

        try {
            const { error, data } = await supabase
                .storage
                .from('betesda-images')
                .upload(imageUrl, image, {
                    cacheControl: '3600',
                    upsert: false
                })

        } catch (error) {
            console.log(error);
            alert('image could not be uploaded')
        }

        try {
            const { error, data } = await supabase
                .from('events')
                .insert(event)

        } catch (error) {
            console.log(error);
            alert('error creating event')
        }
        setImage('')
        setEvento({
            title: '',
            date: '',
            startTime: '',
            endTime: '',
            location: '',
            invitePhrase: '',
            description: ''
        })
        setPrevImage('')
        alert('Evento fue Creado')
    }

    return (
        <div className={styles.eventoContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="title">Title:<input required name='title' type='text' value={evento.title} onChange={handleChange} />
                </label>
                <label htmlFor="date">Date:<input required name='date' type='date' value={evento.date} onChange={handleChange} />
                </label>
                <label htmlFor="startTime">Empieza?:<input required name='startTime' type='time' value={evento.startTime} onChange={handleChange} />
                </label>
                <label htmlFor="endTime">Acaba?:<input required name='endTime' type='time' value={evento.endTime} onChange={handleChange} />
                </label>
                <label htmlFor="location">Lugar:<input required name='location' type='text' placeholder='Donde sera el evento, ejemplo --betesda/salon1' value={evento.location} onChange={handleChange} />
                </label>
                <label htmlFor="invitePhrase">Texto de atencion:<input required name='invitePhrase' type='text' placeholder='palabras con emocion para invitar' value={evento.invitePhrase} onChange={handleChange} />
                </label>
                <label htmlFor="description">Description:<input required name='description' type='text' placeholder='discripcion del evento' value={evento.description} onChange={handleChange} />
                </label>
                <label htmlFor="invitePhrase">image:<input required name='image' type='file' accept='image/jpg, image/png, image/jpeg' placeholder='image' onChange={handleImageChange} />
                </label>
                <input type="reset" />
                <button>Crear Evento</button>
                <hr></hr>
            </form>

            <Image src={prevImage || defaultImage} width={300} height={300} alt='preview image' priority />
        </div>
    )
}