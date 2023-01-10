import Link from 'next/link'
import Image from 'next/image'
import styles from './home.module.scss'
export default function Card({ content }) {
    return (
        <Link href={content.buttonLink} className={styles.card}>
            <Image src={content.image} width={500} height={400} alt={content.title} />
            <div className={styles.textContent}>
                <h3>{content.title}</h3>
                <h4>{content.subTitle}</h4>
                <button className='primary-button'>{content.buttonText}</button>
            </div>
        </Link>
    )
}