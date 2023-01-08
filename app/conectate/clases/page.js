import React from 'react'
import styles from './clases.module.scss'
import Tab from '../../components/tabs/Tab'
import { classInfo, introText } from './classContent'
import Suggestions from '../../components/Suggestions'
import desImage from '../../../public/images/assets/02.png'
import Image from 'next/image'
import heroImage from '../../../public/images/hero/clases.webp'

function Clases() {
    return (
        <div className={styles.clasesContainer}>
            <div className={styles.title}>
                <h1>Clases de desarrollo</h1>
            </div>
            <div className={styles.headerImage}>
                <Image src={heroImage} width={400} height={300} alt={introText.title} priority />
            </div>
            <div className={styles.proposito}>
                <Image src={desImage} width={400} height={400} alt={introText.title} />
                <div className={styles.textContent}>
                    <h1>{introText.title}</h1>
                    <p className={styles.description}>{introText.description}</p>
                </div>
            </div>
            <Tab content={classInfo} />
            <Suggestions />
        </div>
    )
}

export default Clases