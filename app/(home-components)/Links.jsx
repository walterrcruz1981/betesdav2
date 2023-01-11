
import Link from 'next/link'
import React from 'react'
import styles from './home.module.scss'
import { menuLinks } from './menuLinks'
function Links() {
    return (
        <>
            {menuLinks?.map((link, index) => (
                <Link key={index} href={link.url}>{link.name}</Link>
            ))}
        </>
    )
}

export default Links