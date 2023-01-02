import styles from './description.module.scss'
import { somos } from "../somosContent"
export default function Description({ params: { description } }) {

    const data = somos?.find(item => item.slug === description)

    return (
        <div className={styles.descriptionContainer}>
            <h1>{data.title}</h1>
            {data.item?.map((item, index) => (<div key={index} className={styles.item}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>))}
        </div>
    )
}