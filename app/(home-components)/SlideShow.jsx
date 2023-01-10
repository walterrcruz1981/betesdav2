'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import styles from './home.module.scss'

export default function SlideShow() {
    return (
        <Splide options={{ arrows: false, gap: 10 }}>
            <SplideSlide className={styles.slide}>
                <button className='primary-button'>slide  uno</button>
            </SplideSlide >
            <SplideSlide className={styles.slide}>
                <button className='primary-button'>sliide dos</button>
            </SplideSlide>
            <SplideSlide className={styles.slide}>
                <button className='primary-button'>slide tres</button>
            </SplideSlide>

        </Splide>
    )
}