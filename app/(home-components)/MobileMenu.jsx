import Link from 'next/link'
import styles from './home.module.scss'
import { menuLinks } from './menuLinks'
function MobileMenu() {
    return (
        <div className={styles.mobileMenu}>
            <h1>x</h1>
            <div className={styles.mobileLinks}>
                {menuLinks?.map((link, index) => (
                    <Link key={index} href={link.url}>{link.name}</Link>
                ))}
            </div>

        </div>
    )
}

export default MobileMenu