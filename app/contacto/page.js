import Image from 'next/image'
import Link from 'next/link'
import ContactLinks from './ContactLinks'
import styles from './contacto.module.scss'
import { links } from './linksContent'

export default function Contacto() {
    return (
        <div className={styles.contactoContainer}>
            <div className={styles.hero}>
                <h1>Contacto</h1>
                <Image src={'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80'} width={1000} height={400} alt='contacto hero image' priority />
            </div>
            <div className={styles.info}>
                <h2>Servicios: <span> Domingo 11am, Jueves 7pm</span></h2>
            </div>
            <div className={styles.linksContainer}>
                <ContactLinks links={links} />
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