'use client';

import { useState } from 'react';
import styles from '@/features/auth/components/ShowSeedPhrase/ShowSeedPhrase.module.css';

export default function ShowSeedPhrase() {
    const [seed] = useState(generateFakeSeed());

    const handleCopy = () => {
        navigator.clipboard.writeText(seed.join(' '));
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Сохраните seed-фразу</h1>
            <p className={styles.subtitle}>
                Это единственный способ восстановить доступ к аккаунту. Запишите и храните в безопасном месте.
            </p>

            <div className={styles.grid}>
                {seed.map((word, i) => (
                    <div key={i} className={styles.word}>
                        <span className={styles.index}>{i + 1}.</span> {word}
                    </div>
                ))}
            </div>

            <button className={styles.button} onClick={handleCopy}>
                Скопировать
            </button>
        </div>
    );
}

function generateFakeSeed(): string[] {
    const mock = [
        'apple', 'swallow', 'cup', 'brave', 'forest', 'midnight',
        'music', 'shield', 'rocket', 'silent', 'ocean', 'glory',
    ];
    return mock;
}
