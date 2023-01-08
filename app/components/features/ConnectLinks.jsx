
import styles from './features.module.scss'
export default function ContactLinks({ links }) {
    return (
        <div className={styles.connectLinks}>
            {links?.map((link, index) => (<div className={styles.link} key={index}>
                <a href={link.url}>
                    <h1>{link.icon}</h1>
                    <p>{link.title}</p>
                </a>
            </div>))}
        </div>
    )
}