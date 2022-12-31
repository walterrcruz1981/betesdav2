
import styles from './component.module.scss'
import Link from 'next/link'

function Suggestions() {
    return (
        <div className={styles.suggestionsContainer}>
            <h3>Sugerencias</h3>
            <div className={styles.linksContainer}>
                <Link href={'/ministerios/media'}>Media</Link>
                <Link href={'/somos/pastorronald'}>Pastor Ronald</Link>
                <Link href={'/conectate/clases'}>Clases</Link>
                <Link href={'/conectate/grupos'}>Grupos Pequeños</Link>
            </div>
        </div>
    )
}

export default Suggestions