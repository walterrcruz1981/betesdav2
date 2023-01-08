
'use client'
import React, { useEffect } from 'react'
import styles from './donaciones.module.scss'

function Donaciones() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.breezechms.com/js/give.js";
        document.body.appendChild(script);
    }, [])
    return (

        <div className={styles.giveContainer + ' box-shadow'} id="breeze_giving_embed" data-subdomain="betesda" data-width="100%"
            data-background_color="f0ffff" data-text_color="000"
            data-donate_button_background_color="6495ED"
            data-donate_button_text_color="f0ffff" data-fund_id=""
            data-frequency="" data-amount="">
            <a href="https://betesda.breezechms.com/give/online" target="_blank" rel="noopener noreferrer"></a>

        </div>


    )
}

export default Donaciones