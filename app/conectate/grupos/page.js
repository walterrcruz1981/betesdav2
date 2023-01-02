import React from 'react'
import styles from './grupos.module.scss'
import { gruposInfo, gruposDescription } from './gruposContent'
import { MyImage } from '../../variables'
import Tab from '../../components/tabs/Tab'
import Suggestions from '../../components/Suggestions'
import Image from 'next/image'

function GruposPequenos() {
    return (
        <div className={styles.gruposContainer}>
            <div className={styles.heroImage}>
                <Image width={500} height={300} src={gruposInfo.imageUrl} alt={gruposInfo.title} priority />
            </div>
            <div className={styles.introText}>
                <h1>{gruposInfo.title}</h1>
                {gruposInfo.description}
            </div>
            <Tab content={gruposDescription} />
            <Suggestions />
        </div>
    )
}

export default GruposPequenos