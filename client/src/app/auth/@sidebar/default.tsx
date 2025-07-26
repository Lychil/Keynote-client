import styles from "@/app/auth/@sidebar/sidebar.module.css";

export default function Default() {
    return (
        <aside className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <img className={styles.logoImg} src="/icons/logo-light.svg" alt="Логотип(светлая тема) Keynote" />
                <div className={styles.logoText}>Keynote</div>
            </div>
        </aside>
    )
}
