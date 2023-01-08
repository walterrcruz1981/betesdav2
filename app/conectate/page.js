import styles from './conectate.module.scss'
import heroImage from '../../public/images/hero/conectate.png'
import clases from '../../public/images/hero/clases.webp'
import grupos from '../../public/images/hero/grupos.webp'
import Image from 'next/image'
import SimpleCard from '../components/cards/SimpleCard'
import { content } from './conectateContent'
import Link from 'next/link'
import { socialLinks } from './socialContent'
import ConnectLinks from '../components/features/ConnectLinks'

export default async function Conectate() {

    return (
        <div className={styles.conectateContainer}>
            <div className={styles.hero}>
                <Image src={heroImage} alt='conectate hero image' priority />
                <h1>Bienvenido a Ministerios Betesda</h1>
            </div>
            <h3>Que Ofrecemos</h3>
            <div className={styles.cardsContainer}>

                <div className={styles.ofrecemos}>
                    <Link href={'/conectate/clases'}>
                        <Image width={200} height={150} src={clases} alt='clases image' />
                        <div>
                            <h4>Clases</h4>
                            <p>En estas clases hablamos sobre la Estructura de nuestra iglesia. Explicamos cómo un miembro puede tener un ministerio y servir en la iglesia.</p>
                        </div>
                    </Link>
                </div>
                <div className={styles.ofrecemos}>
                    <Link href={'/conectate/grupos'}>
                        <Image width={200} height={150} src={grupos} alt='grupos pequeños image' />
                        <div>
                            <h4>Grupos Pequeños</h4>
                            <p><span>Mision</span><br></br> Para llegar a ver a cada persona, desde las que constituyen el núcleo de nuestra iglesia, hasta las que forman parte de nuestra comunidad, conectada con un grupo pequeño saludable.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <h3>Conocenos</h3>
            <div className={styles.cardsContainer}>
                {content.map((item, index) => (<Link href={item.url} key={index}><SimpleCard content={item} /></Link>))}
            </div>
            <div className={styles.social}>
                <h3>Encuentranos en las redes sociales</h3>
                <ConnectLinks links={socialLinks} />
            </div>
        </div>
    )
}

