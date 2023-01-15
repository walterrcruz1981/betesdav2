'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './slides.module.scss'
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../../utils/supabaseClient'

export default function CrearSlide() {

    const avatar = 'https://images.unsplash.com/photo-1673031288723-f198cd527b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'

    const [slide, setSlide] = useState({ buttonText: '', buttonUrl: '' })
    const [previewImage, setPreviewImage] = useState('')
    const [image, setImage] = useState('')

    function handleChange(e) {
        const { name, value } = e.target
        setSlide(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    async function handleImageChange(e) {
        const file = e.target.files[0]
        setPreviewImage(URL.createObjectURL(file))
        setImage(file)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const imageUrl = uuidv4() + image.name;
        try {
            const { data, error } = await supabase
                .storage
                .from('betesda-images')
                .upload(imageUrl, image, {
                    cacheControl: '3600',
                    upsert: false
                })

        } catch (error) {
            console.log(error);
            alert('error  creando  slide')
        }
        try {
            const { error } = await supabase
                .from('home-slides')
                .insert({ image: imageUrl, url: slide.buttonUrl, buttonText: slide.buttonText })

        } catch (error) {
            console.log(error)
            alert('error  creando  slide')
        }
        setPreviewImage('')
        setSlide({ buttonText: '', buttonUrl: '' })
        alert('Tu nuevo Slide fue creado')

    }
    return (
        <div className={styles.slidesContainer} >
            <h1>Creando Nuevo Slide</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="image">Image:  <input type="file" name='image' accept='image/jpg, image/png, image/jpeg' onChange={handleImageChange} /></label>
                <label htmlFor="buttonText">Button Text:<input name='buttonText' value={slide.buttonText} type="text" onChange={handleChange} /></label>
                <label htmlFor="buttonUrl">Button Url:<input name='buttonUrl' value={slide.buttonUrl} type="text" onChange={handleChange} /></label>
                <button>Crear slide</button>
            </form>
            <div className={styles.preview}>
                <Image src={previewImage || avatar} width={300} height={225} alt='preview image' />
                <h4>{slide.buttonText || 'button text'}</h4>
                <h3>{slide.buttonUrl || 'button url'}</h3>
            </div>
        </div>
    )
}