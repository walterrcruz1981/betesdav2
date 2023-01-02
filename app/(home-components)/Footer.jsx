import React from 'react'
import styles from './home.module.scss'
import logo from '../../public/images/logo/logo2.png'
import Links from './Links'
import Image from 'next/image'

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                <Image src={logo} width={75} height={75} alt='footer logo' />
            </div>
            <Links />
        </div>
    )
}

export default Footer