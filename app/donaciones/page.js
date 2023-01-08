import Donar from './Donar'
import styles from './donaciones.module.scss'
import Image from 'next/image'


export default function Donaciones() {
    const heroImage = 'https://images.unsplash.com/photo-1615469619480-1a7e77deb56c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

    return (
        <div className={styles.donacionesContainer}>
            <div className={styles.heroSection}>
                <Image src={heroImage} width={500} height={300} alt='donaciones hero image' priority />
                <div className={styles.textContent}>
                    <h3 className='text-shadow'>Vea lo que Dios puede hacer a través de su generosidad.</h3>
                    <p className='text-shadow'>Sencillo y seguro. Dé un solo regalo o programe donaciones recurrentes usando su cuenta corriente, tarjeta de débito o crédito.</p>
                </div>
            </div>
            <Donar />
        </div>
    )
}