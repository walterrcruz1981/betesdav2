import styles from './evento.module.scss'

export default function CrearSlide() {
    return (
        <div>
            <form className={styles.form}>
                <label htmlFor="image">Image  <input type="file" accept='image/jpg, image/png, image/jpeg' name="image" /></label>
                <label htmlFor="button-text">Button Text<input type="text" /></label>

                <button>Crear slide</button>
            </form>
        </div>
    )
}