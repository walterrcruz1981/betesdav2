import Link from 'next/link'
import styles from './contacto.module.scss'
export default function ContactLinks({ links }) {
    return (
        <div className={styles.contactLinks}>
            {links?.map((link, index) => (<div className={styles.link} key={index}>
                <a href={link.url}>
                    <h1>{link.icon}</h1>
                    <p>{link.title}</p>
                </a>
            </div>))}
        </div>
    )
}