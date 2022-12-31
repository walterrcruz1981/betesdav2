'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import styles from './home.module.scss'

export default function SlideShow() {
    return (
        <Splide options={{ arrows: false, gap: 10 }}>
            <SplideSlide className={styles.slide}>
                <button className='primary-button'>helllo</button>
            </SplideSlide >
            <SplideSlide className={styles.slide}>
                <button className='primary-button'>helllo</button>
            </SplideSlide>
            <SplideSlide className={styles.slide}>
                <button className='primary-button'>helllo</button>
            </SplideSlide>

        </Splide>
    )
}