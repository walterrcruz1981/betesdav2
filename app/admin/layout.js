'use client'
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react'

import styles from './admin.module.scss'

export default function RootLayout({ children }) {
    const { data: session, status } = useSession()
    console.log(session)
    const avatar = 'https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80'
    if (!session) {
        return (
            <div className={styles.restrictedSite}>
                <h5>This is a protected area of site</h5>
                <button onClick={() => signIn()}>Login</button>
            </div>
        )
    } else {
        return (
            <div className={styles.layoutContainer}>
                <div className={styles.userInfo}>
                    <div className={styles.userInfo}>
                        <Image src={session.user.image} width={75} height={75} alt="user avatar" />
                        <p>Hola! {session.user.name} comos estas</p>
                    </div>
                    <div className={styles.actionContainer}>
                        <Link href={'/admin/slides'}>Crear Slide</Link>
                        <Link href={'/admin/evento'}>Crear Evento</Link>
                        <button onClick={() => signOut()}>Sign Out</button>
                    </div>
                </div>
                {children}
            </div>
        )
    }
}
