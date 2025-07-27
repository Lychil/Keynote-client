import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '@/components/ui/PrivacyCheckbox/PrivacyCheckbox.module.css';
import shared from '@/styles/shared.module.css';

interface PrivacyCheckboxProps {
    register: UseFormRegisterReturn;
    error?: string;
}

export default function PrivacyCheckbox({ register, error }: PrivacyCheckboxProps) {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>
                <input type="checkbox" className={styles.hiddenCheckbox} {...register} />
                <span className={styles.customCheckbox}></span>
                <span>
                    Я принимаю{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                        политику конфиденциальности
                    </a>
                </span>
            </label>
            {error && <p className={shared.error}>{error}</p>}
        </div>
    );
};
