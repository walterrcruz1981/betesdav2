import Image from "next/image";
import Link from "next/link";
import styles from './admin.module.scss'

export default function RootLayout({ children }) {
    const avatar = 'https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80'
    return (
        <div className={styles.layoutContainer}>
            <div className={styles.userInfo}>
                <div className={styles.userInfo}>
                    <Image src={avatar} width={75} height={75} alt="user avatar" />
                    <p>Hola! Walter comos estas</p>
                </div>
                <div className={styles.actionContainer}>
                    <Link href={'/admin/slides'}>Crear Slide</Link>
                    <Link href={'/admin/evento'}>Crear Evento</Link>
                </div>
            </div>
            {children}
        </div>
    )
}
