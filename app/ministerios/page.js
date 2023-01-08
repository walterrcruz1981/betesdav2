import Image from 'next/image'
import styles from './ministerios.module.scss'
import Link from 'next/link'
import { ministerios } from './ministeriosContent'
function Ministerios() {
    const heroImage = 'https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80'
    return (

        <div className={styles.ministeriosContainer}>
            <div className={styles.hero}>
                <Image height={800} width={1000} src={heroImage} priority alt='ministerios hero image' />
            </div>
            <h1>Lista de Ministerios</h1>
            <div className={styles.cardsContainer}>
                {ministerios.map((ministerio, index) => (
                    <div key={index} className={styles.card}>
                        <Link href={'/ministerios/' + ministerio.slug}>
                            <Image src={ministerio.image} width={300} height={200} alt={ministerio.title} />
                            <h3>{ministerio.title}</h3>
                        </Link>
                    </div>
                ))}

                <div className={styles.card}>
                    <Link href={'/'}>
                        <Image src={heroImage} width={300} height={200} alt='ministerio image' />
                        <h3>Title here</h3>
                    </Link>
                </div>

                <div className={styles.card}>
                    <Link href={'/'}>
                        <Image src={heroImage} width={300} height={200} alt='ministerio image' />
                        <h3>Title here</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Ministerios