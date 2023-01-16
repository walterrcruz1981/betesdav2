import styles from './description.module.scss'
import { somos } from "../somosContent"
import Image from 'next/image'
import Link from 'next/link'
export default function Description({ params: { description } }) {

    const data = somos.find(item => item.slug === description)
    const sugggestionData = somos.filter(item => item.slug !== description)
    return (
        <div className={styles.descriptionContainer}>
            <div className={styles.hero}>
                <Image src={data.image} width={1000} height={500} alt={data.title} priority />
            </div>
            <h1>{data.title}</h1>
            {data.item?.map((item, index) => (<div key={index} className={styles.item}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>))}
            <div className={styles.suggestions}>
                {sugggestionData?.map((item, index) => (
                    <Link href={'/somos/' + item.slug} key={index} className={styles.card}>
                        <Image src={item.image} width={300} height={200} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                ))}
            </div>
        </div>
    )
}