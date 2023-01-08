import styles from './iglesias.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function ChurchByCountry({ iglesiaInfo }) {
    return (
        <div className={styles.countryContainer}>
            <Image width={75} height={75} src={iglesiaInfo[0].flag} alt='church image' />
            <div className={styles.churchGrid}>
                {iglesiaInfo.map(church => (
                    <div key={church.id} className={styles.card}>
                        <Link href={'/iglesias/' + church.slug}>
                            <Image src={church.pastorImage} width={300} height={200} alt={church.nombreDeMision} />
                            <p>{church.nombrePastor}</p>
                            <p>{church.nombreDeMision}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}