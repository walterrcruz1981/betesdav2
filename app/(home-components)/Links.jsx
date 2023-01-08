import Link from 'next/link'
import React from 'react'
import styles from './home.module.scss'
function Links() {
    return (
        <div className={styles.links}>
            <Link href={'/'}>Home</Link>
            <Link href={'/somos'}>Somos</Link>
            <Link href={'/sermones'}>Sermones</Link>
            <Link href={'/contacto'}>Contacto</Link>
        </div>
    )
}

export default Links