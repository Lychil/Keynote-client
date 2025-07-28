import AccountLoginClient from '@/app/auth/login/AccountLoginClient';
import styles from "@/app/auth/login/page.module.css";

export default function page() {
    return (
        <div className={styles.page}>
            <AccountLoginClient />
        </div>
    );
}