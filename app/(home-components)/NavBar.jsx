import React from 'react'
import styles from './home.module.scss'
import logo from '../../public/images/logo/logo.png'
import Links from './Links'
import Link from 'next/link'
import Image from 'next/image'

async function NavBar() {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navLogo}>
                <Link href={'/'}><Image src={logo} width={75} height={75} alt='logo' /></Link>
            </div>
            <div className={styles.linksContainer}>
                <Links />
            </div>
        </div>
    )
}

export default NavBar