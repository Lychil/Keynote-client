'use client'

import { useEffect } from 'react'
import styles from '@/features/auth/components/CreateAccount/CreateAccount.module.css';
import { useRouter } from 'next/navigation';

export default function CreateAccount() {
    const router = useRouter()
    useEffect(() => {
        const timeout = setTimeout(() => {
            // ToDo: добавить лоогику генерации фразы и ключей
            router.push('/auth/show-seed');
        }, 10000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.spinner}></div>
            <p className={styles.text}>Создаём ваш безопасный аккаунт…</p>
        </div>
    )
}
