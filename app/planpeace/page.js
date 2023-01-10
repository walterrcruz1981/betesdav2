import Image from 'next/image'
import styles from './planpeace.module.scss'
import bannerImage from '../../public/images/peaceImages/peace-banner.jpg'
import { peaceInfo } from './planPeaceContent'
import Link from 'next/link'

export default function PlanPeace() {
    return (
        <div className={styles.peaceContainer}>
            <div className={styles.hero}>
                <Image src={bannerImage} width={1000} height={300} alt='cinco gigantes banner immage' priority />
            </div>
            <div className={styles.headerText}>
                <p>{peaceInfo[0].text3}</p>
            </div>
            <div className={styles.cardsContainer}>
                {peaceInfo.map(item => (
                    <Link href={'/planpeace/' + item.slug} key={item.id} className={styles.card}>
                        <Image src={item.image} width={300} height={300} alt={item.title} />
                        <h1>{item.title}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}