'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/features/auth/components/ConfirmationCodeForm/ConfirmationCodeForm.module.css';

export default function ConfirmationCodeForm() {
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
    const [resendTimer, setResendTimer] = useState(60);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '');
        e.target.value = value;

        if (value && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    useEffect(() => {
        if (resendTimer === 0) return;
        const timer = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [resendTimer]);

    const handleResend = () => {
        if (resendTimer > 0) return;
        setResendTimer(60);
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Введите код</h1>
            <div className={styles.description}>
                На вашу почту был отправлен подтверждающий код, введите его ниже
            </div>

            <div className={styles.codeWrapper}>
                {Array.from({ length: 4 }, (_, i) => (
                    <input
                        key={i}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        className={styles.input}
                        onChange={(e) => handleChange(i, e)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        ref={(el) => {
                            inputsRef.current[i] = el;
                        }}
                    />
                ))}
            </div>

            <div className={styles.buttonWrapper}>
                <button type="submit" className={styles.button} disabled={isLoading}>
                    Подтвердить
                </button>

                <button
                    type="button"
                    onClick={handleResend}
                    className={styles.resendButton}
                    disabled={resendTimer > 0}
                >
                    {resendTimer > 0
                        ? `Повторная отправка через ${resendTimer} сек`
                        : 'Отправить код повторно'}
                </button>
            </div>
        </div>
    );
}
