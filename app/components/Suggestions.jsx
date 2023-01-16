
import styles from './component.module.scss'
import Link from 'next/link'

function Suggestions() {
    return (
        <div className={styles.suggestionsContainer}>
            <h3>Sugerencias</h3>
            <div className={styles.linksContainer}>
                <Link href={'/ministerios/betesda-media'}>Media</Link>
                <Link href={'/conectate'}>Conectate</Link>
                <Link href={'/pastorronald'}>Pastor Ronald</Link>
                <Link href={'/somos'}>Conocenos</Link>
                <Link href={'/conectate/grupos'}>Grupos Pequeños</Link>
            </div>
        </div>
    )
}

export default Suggestions