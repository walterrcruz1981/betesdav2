'use client'
import React, { useState } from 'react'
import styles from './tabs.module.scss'

function Tab({ content }) {
    const [active, setActive] = useState(0)
    return (
        <div className={styles.tabContainer}>
            <div className={styles.choices}>
                {content?.map((title, index) => (
                    <h3 onClick={() => setActive(index)} key={index} className={index === active ? styles.active : ''}>{title.title}</h3>
                ))}
            </div>
            <div className={styles.description}>
                {content?.map((description, index) => (
                    <p key={index}>{index === active ? description.description : ''}</p>
                ))}
            </div>
        </div >
    )
}

export default Tab