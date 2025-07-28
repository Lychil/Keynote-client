'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/features/auth/components/ShowSeedPhrase/ShowSeedPhrase.module.css';

export default function ShowSeedPhrase() {
    const [seed] = useState(generateFakeSeed());
    const router = useRouter();

    const handleCopy = () => {
        navigator.clipboard.writeText(seed.join(' '));
    };

    const handleContinue = () => {
        router.push('/chat');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.notice}>
                Аккаунт создан
            </div>

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

            <button className={styles.copyButton} onClick={handleCopy}>
                Скопировать
            </button>

            <button className={styles.primaryButton} onClick={handleContinue}>
                Перейти в мессенджер
            </button>
        </div>
    );
}

function generateFakeSeed(): string[] {
    return [
        'apple', 'swallow', 'cup', 'brave',
        'forest', 'midnight', 'music', 'shield',
        'rocket', 'silent', 'ocean', 'glory',
    ];
}
