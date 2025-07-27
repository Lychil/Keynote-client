import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from '@/components/ui/FormInput/FormInput.module.css';
import shared from '@/styles/shared.module.css';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
}

export function FormInput({ label, register, error, ...rest }: FormInputProps) {
    return (
        <div className={styles.field}>
            <label className={styles.label}>{label}</label>
            <input {...register} {...rest} className={`${styles.input} ${rest.className || ''}`} />
            {error && <p className={shared.error}>{error.message}</p>}
        </div>
    );
}
