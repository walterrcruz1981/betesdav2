import styles from './iglesias.module.scss'
import { iglesiasInfo } from './iglesiasContent'
import heroImage from '../../public/images/hero/iglesias.jpg'
import Image from 'next/image'
import ChurchByCountry from './ChurchByCountry'

export default function Iglesias() {
    const churchInMexico = iglesiasInfo.filter(iglesia => iglesia.country === 'Mexico')
    const churchInElSalvador = iglesiasInfo.filter(iglesia => iglesia.country === 'El Salvador')
    const churchInUsa = iglesiasInfo.filter(iglesia => iglesia.country === 'USA')
    return (
        <div className={styles.iglesiasContainer}>
            <div className={styles.hero}>
                <Image src={heroImage} width={1000} heigh={500} alt='iglesias hero image' priority />
            </div>

            <div className={styles.main}>
                <h1>Lista de Iglesias</h1>
                <ChurchByCountry iglesiaInfo={churchInMexico} />
                <ChurchByCountry iglesiaInfo={churchInElSalvador} />
                <ChurchByCountry iglesiaInfo={churchInUsa} />
            </div>
        </div>
    )
}




