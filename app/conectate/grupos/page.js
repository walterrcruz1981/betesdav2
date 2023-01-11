import React from 'react'
import styles from './grupos.module.scss'
import { gruposInfo, gruposDescription, compromisos } from './gruposContent'
import heroImage from '../../../public/images/hero/grupos.webp'
import compromisosImage from '../../../public/images/somos/compromisos.png'

import Tab from '../../components/tabs/Tab'
import Suggestions from '../../components/Suggestions'
import Image from 'next/image'

function GruposPequenos() {
    return (
        <div className={styles.gruposContainer}>

            <div className={styles.heroImage}>
                <Image width={500} height={300} src={heroImage} alt={gruposInfo.title} priority />
            </div>
            <div className={styles.introText}>
                <h1>{gruposInfo.title}</h1>
                <p>{gruposInfo.description}</p>
            </div>
            <div className={styles.tabContainer}>
                <Tab content={gruposDescription} />
                <p>Cada uno de estos grupos tiene necesidades únicas, motivaciones, desafíos y POTENCIAL.<br></br> Nuestra meta es ayudarles a transformarse de una audiencia en un EJÉRCITO que se movilice para servir a Dios.</p>

            </div>
            <div className={styles.compromisosContainer}>
                <Image src={compromisosImage} width={300} height={300} alt='compromisos image' />
                <div className={styles.compromisos}>
                    {compromisos.map((item, index) => (
                        <div key={index} className={styles.compromiso}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Suggestions />
        </div>
    )
}

export default GruposPequenos