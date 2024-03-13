import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled } from 'react-icons/md'
export default function Rightbar() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image
                        src="/astronaut.png"
                        alt=""
                        fill
                        className={styles.bg}
                    />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notifications}>Awailable now</span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboard
                    </h3>
                    <span className={styles.subtitle}>
                        Takes 4 min to learn
                    </span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
        </div>
    )
}
