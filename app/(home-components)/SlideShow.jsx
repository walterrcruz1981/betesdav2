'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/skyblue';
import styles from './home.module.scss'
import Image from 'next/image';
import somosImage from '../../public/images/hero/somos.webp'
import ministeriosImage from '../../public/images/ministerios/media.webp'
import Link from 'next/link';

export default function SlideShow() {
    return (
        <Splide options={{ arrows: false, gap: 10 }}>
            <SplideSlide className={styles.slide}>
                <Link href={'/somos'}><button className='primary-button'>Quien Somos</button></Link>
                <Image src={somosImage} width={600} height={500} alt='somos  image' />
            </SplideSlide >
            <SplideSlide className={styles.slide}>
                <Link href={'/ministerios'}><button className='primary-button'>Ministerio de Media</button></Link>
                <Image src={ministeriosImage} width={600} height={500} alt='ministerios image' />
            </SplideSlide>
        </Splide>
    )
}