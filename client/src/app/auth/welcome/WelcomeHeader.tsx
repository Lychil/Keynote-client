'use client';

import Link from 'next/link';
import styles from '@/app/auth/welcome/WelcomeHeader.module.css';

export default function WelcomeHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.buttons}>
                <Link href="/auth/login" className={styles.button}>Войти</Link>
                <Link href="/auth/reg" className={styles.button}>Зарегистрироваться</Link>
            </div>
        </header>
    );
}
