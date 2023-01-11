import React from 'react'
import styles from './home.module.scss'
import logo from '../../public/images/logo/logo2.png'
import Links from './Links'
import Image from 'next/image'
import { socialLinks } from './socialContent'
import ConnectLinks from '../components/features/ConnectLinks'

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                <Image src={logo} width={75} height={75} alt='footer logo' />
            </div>
            <div className={styles.linksContainer}><Links /></div>
            <div className={styles.socialLinks}>
                <ConnectLinks links={socialLinks} />
            </div>
        </div>
    )
}

export default Footer