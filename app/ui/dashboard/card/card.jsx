import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'

export default function Card() {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span className={styles.title}>Total users</span>
                <span className={styles.number}>10.000</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>10%</span>
                    more than previos week
                </span>
            </div>
        </div>
    )
}
