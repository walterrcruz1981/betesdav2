import Link from "next/link"
import { iglesiasInfo } from "../iglesiasContent"
import ConnectLinks from '../../components/features/ConnectLinks'
import styles from './iglesiaDescription.module.scss'
import Image from "next/image"

export default function IglesiaDescription({ params: { iglesia } }) {
    const church = iglesiasInfo.find(info => info.slug === iglesia)
    const otherChurches = iglesiasInfo.filter(info => info.slug !== iglesia)

    return (
        <div className={styles.iglesiaDescription}>
            <div className={styles.hero}>
                <div className={styles.heroText}>
                    <p>{church.nombrePastor}</p>
                    <h2>{church.nombreDeMision}</h2>
                    <h4>{church.servicios}</h4>
                    <ConnectLinks links={church.links} />
                </div>
                <Image src={church.pastorImage} width={700} height={500} alt='church hero image' priority />
            </div>
            <div className={styles.main}>

                <p>{church.nuestraIglesia}</p>
                <div>
                    <h2>Mision</h2>
                    <p>{church.mision}</p>
                </div>
                <div>
                    <h2>Vision</h2>
                    <p>{church.vision}</p>
                </div>
            </div>
            <div className={styles.linksContainer}>
                {otherChurches.map(church => (
                    <Link key={church.id} href={'/iglesias/' + church.slug}>
                        <Image src={church.pastorImage} height={300} width={300} alt={church.nombreDeMision} />
                        <p>{church.nombreDeMision}</p>
                    </Link>
                ))}
            </div>
            <Link href={'/iglesias'}>Mas Iglesias</Link>
        </div>
    )
}