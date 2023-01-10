import Image from 'next/image'
import styles from './ministerios.module.scss'
import Link from 'next/link'
import { ministerios } from './ministeriosContent'
import heroImage from '../../public/images/hero/ministerios.png'
function Ministerios() {
    return (

        <div className={styles.ministeriosContainer}>
            <div className={styles.hero}>
                <Image height={800} width={1000} src={heroImage} priority alt='ministerios hero image' />
                <h1>Lista de Ministerios</h1>
            </div>

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