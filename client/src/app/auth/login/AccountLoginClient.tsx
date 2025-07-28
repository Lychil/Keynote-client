'use client';

import { useState } from 'react';
import AccountCard from '@/features/auth/components/AccountCard/AccountCard';
import styles from '@/app/auth/login/page.module.css';

const MOCK_ACCOUNTS = [
    { id: '1', name: '@alpha123' },
    { id: '2', name: '@zulu987' },
];

export default function AccountLoginClient() {
    const [accounts, setAccounts] = useState<typeof MOCK_ACCOUNTS>(MOCK_ACCOUNTS);
    const [selected, setSelected] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    if (loading) return <div className={styles.loading}>Загрузка аккаунтов...</div>;

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Выберите аккаунт</h1>

            <div className={styles.accountList}>
                {accounts.map((acc) => (
                    <AccountCard
                        key={acc.id}
                        name={acc.name}
                        active={selected === acc.id}
                        onClick={() => setSelected(acc.id)}
                    />
                ))}
            </div>

            <button type='submit' className={styles.loginBtn} disabled={!selected}>
                Войти
            </button>

            <div className={styles.links}>
                <a href="/auth/register">Регистрация</a>
                <a href="/auth/recover">Вход по seed-фразе</a>
            </div>
        </div>
    );
}
