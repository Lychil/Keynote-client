import { useForm } from 'react-hook-form';
import { FormInput } from '@/components/ui/FormInput/FormInput';
import { LoginFormData } from '@/features/auth/types/types';
import Logo from '@/components/ui/Logo/Logo';
import Link from 'next/link';
import styles from "@/features/auth/components/LoginForm/LoginForm.module.css";
import shared from "@/styles/shared.module.css";

interface LoginFormProps {
    onSubmit: (data: LoginFormData) => void;
    isLoading?: boolean;
    error?: string | null;
}

export default function LoginForm({ onSubmit, isLoading, error }: LoginFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.header}>
                <div className={styles.logoWrapper}>
                    <Logo />
                </div>
                <h1 className={styles.title}>Войдите в систему</h1>
            </div>
            <div className={styles.inner}>
                <FormInput
                    label="Email"
                    type="email"
                    placeholder='Укажите свой email...'
                    register={register('email', { required: 'Email обязателен' })}
                    error={errors.email}
                />
                <FormInput
                    label="Пароль"
                    type="password"
                    placeholder='Введите пароль...'
                    register={register('password', { required: 'Пароль обязателен' })}
                    error={errors.password}
                />
            </div>

            <div className={styles.buttonWrapper}>
                <button type="submit" className={styles.button} disabled={isLoading}>
                    {isLoading ? 'Загрузка...' : 'Войти'}
                </button>
                <div className={styles.switch}>
                    <span>У вас еще нет аккаунта? </span>
                    <Link className={styles.switchLink} href="/auth/reg">Зарегистрироваться</Link>
                </div>
            </div>
            {error && <p className={shared.error}>{error}</p>}
        </form>
    );
};
