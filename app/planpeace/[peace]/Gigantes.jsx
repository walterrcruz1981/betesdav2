import Image from "next/image";
import Link from "next/link";
import styles from './gigantes.module.scss'

export default function Gigantes({ info, suggestions }) {
    return (
        <div className={styles.gigantesContainer}>
            <div className={styles.hero}>
                <h1>{info.title}</h1>
                <Image src={info.image} width={500} height={400} alt={info.title} priority />
            </div>
            <div className={styles.headerText}>
                <p>{info.text1}</p>
                <p>{info.text2}</p>
            </div>
            <div className={styles.cardsContainer}>
                {info.steps?.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <Image src={item.image} width={300} height={300} alt={item.title} />
                        <div className={styles.textContent}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h1>Sugerencias</h1>
            <div className={styles.suggestionsContainer}>
                {suggestions.map((item, index) => (
                    <Link href={'/planpeace/' + item.slug} key={index} className={styles.suggestions}>
                        <Image src={item.image} width={300} height={300} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                ))}
            </div>
        </div>
    )
}