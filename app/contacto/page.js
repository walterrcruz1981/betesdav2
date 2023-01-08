import Image from 'next/image'
import Link from 'next/link'
import ConnectLinks from '../components/features/ConnectLinks'
import styles from './contacto.module.scss'
import { links } from './linksContent'
import heroImage from '../../public/images/hero/contacto.webp'

export default function Contacto() {
    return (
        <div className={styles.contactoContainer}>
            <div className={styles.hero}>
                <h1>Contacto</h1>
                <Image src={heroImage} width={1000} height={400} alt='contacto hero image' priority />
            </div>
            <div className={styles.info}>
                <h2>Servicios: <span> Domingo 11am, Jueves 7pm</span></h2>
            </div>
            <div className={styles.linksContainer}>
                <ConnectLinks links={links} />
            </div>
            <div className={styles.actionContainer}>
                <div className={styles.actionCard}>
                    <Link href={'/'}>Iglesias</Link>
                </div>
                <div className={styles.actionCard}>
                    <Link href={'/'}>Conocenos</Link>
                </div>
                <div className={styles.actionCard}>
                    <Link href={'/'}>Quiero Ayudar</Link>
                </div>
            </div>
        </div>
    )
}