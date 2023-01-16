import styles from './somos.module.scss'
import heroImage from '../../public/images/hero/somos.webp'
import Image from 'next/image'
import { somos } from './somosContent'
import Link from 'next/link'
import pastor from '../../public/images/pastores/pastorRonald.webp'


export default function Somos() {
    return (
        <div className={styles.somosContainer}>
            <div className={styles.hero}>
                <Image src={heroImage} width={1000} height={500} alt='somos page hero image' priority />
            </div>
            <div className={styles.main}>
                <div className={styles.headerText}>
                    <h1>Quien Somos</h1>
                </div>
                <div className={styles.headerLinks}>
                    <Link href={'/pastorronald'}>
                        <Image src={pastor} width={300} height={200} alt='pastor ronald' />
                        <p>Pastor Ronald</p>
                    </Link>
                    {somos?.map((link, index) => (
                        <Link key={index} href={'/somos/' + link.slug} >
                            <Image src={link.image} width={300} height={200} alt={link.title} />
                            <p>{link.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}