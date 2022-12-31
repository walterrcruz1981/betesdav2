import Link from "next/link"
import { AiOutlineWhatsApp } from 'react-icons/ai'
import styles from './features.module.scss'

function WhatsUpBug({ url }) {
    return (
        <div className={styles.whatsupContainer}>
            <Link href={`https://wa.me/${url}`}><AiOutlineWhatsApp className={styles.whatsupIcon} /></Link>
        </div>
    )
}

export default WhatsUpBug