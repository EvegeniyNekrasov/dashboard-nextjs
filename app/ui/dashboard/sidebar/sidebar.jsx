import { menuItems } from '@/utils/sidebar-items'
import styles from './sidebar.module.css'
import MenuLink from './menuLink/menuLink'
import Image from 'next/image'
import { MdLogout } from 'react-icons/md'

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src="/noavatar.png"
                    alt="some image"
                    width="50"
                    height="50"
                    priority={false}
                />
                <div className={styles.userDetail}>
                    <span className={styles.userName}>John Doe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((item) => (
                    <li key={item.title}>
                        <span className={styles.item}>{item.title}</span>
                        {item.list.map((i) => (
                            <MenuLink item={i} key={i.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>
        </div>
    )
}
