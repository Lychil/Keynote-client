'use client';

import { useState } from 'react';
import styles from "@/features/auth/components/RecoverAccountForm/RecoverAccountForm.module.css";

export default function RecoverAccountForm() {
    const [seed, setSeed] = useState(Array(12).fill(''));

    const handleChange = (index: number, value: string) => {
        const newSeed = [...seed];
        newSeed[index] = value.trim().toLowerCase();
        setSeed(newSeed);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const fullSeed = seed.join(' ');
    };

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Восстановление доступа</h1>
            <p className={styles.subtitle}>Введите вашу seed-фразу из 12 слов</p>
            <div className={styles.grid}>
                {seed.map((word, i) => (
                    <input
                        key={i}
                        value={word}
                        onChange={(e) => handleChange(i, e.target.value)}
                        placeholder={`${i + 1}`}
                        className={styles.input}
                    />
                ))}
            </div>
            <button type="submit" className={styles.button}>
                Восстановить
            </button>
        </form>
    );
}
