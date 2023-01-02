import styles from './somos.module.scss'
import heroImage from '../../public/images/assets/entry.png'
import Image from 'next/image'
import { somos } from './somosContent'
import Link from 'next/link'
import pastor from '../../public/images/pastores/pastorRonald.jpeg'

export default function RootLayout({ children }) {
  return (
    <div className={styles.somosContainer}>
      <div className={styles.hero}>
        <Image src={heroImage} width={400} height={300} alt='somos page hero image' priority />
      </div>
      <div className={styles.main}>
        <div className={styles.headerText}>
          <h1>Quien Somos</h1>
        </div>
        <div className={styles.headerLinks}>
          <Link href={'/somos/pastorronald'}>
            <Image src={pastor} width={100} height={120} alt='pastor ronald' />
          </Link>

          {somos?.map((link, index) => (
            <div key={index} className={styles.link}>
              <Link href={'/somos/' + link.slug} >
                {link.icon}
                <p>{link.title}</p>
              </Link>
            </div>
          ))}
        </div>
        {children}
      </div>
    </div>

  )
}
