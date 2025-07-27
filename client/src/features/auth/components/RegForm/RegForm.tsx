import { useForm } from 'react-hook-form';
import { FormInput } from '@/components/ui/FormInput/FormInput';
import { RegFormData } from '@/features/auth/types/types';
import Logo from '@/components/ui/Logo/Logo';
import Link from 'next/link';
import PrivacyCheckbox from '@/components/ui/PrivacyCheckbox/PrivacyCheckbox';
import styles from "@/features/auth/components/RegForm/RegForm.module.css";
import shared from "@/styles/shared.module.css";

interface RegFormProps {
    onSubmit: (data: RegFormData) => void;
    isLoading?: boolean;
    error?: string | null;
}

export default function RegForm({ onSubmit, isLoading, error }: RegFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<RegFormData>();

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.header}>
                <div className={styles.logoWrapper}>
                    <Logo />
                </div>
                <h1 className={styles.title}>Создайте аккаунт</h1>
            </div>
            <div className={styles.inner}>
                <FormInput
                    label="Username"
                    type="username"
                    placeholder='Укажите свой username...'
                    register={register('username', { required: 'Username обязателен' })}
                    error={errors.email}
                />
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
                <FormInput
                    label="Повторите пароль"
                    type="confirmPassword"
                    placeholder='Повторите пароль...'
                    register={register('confirmPassword', { required: 'Повторите пароль' })}
                    error={errors.password}
                />
            </div>

            <PrivacyCheckbox
                register={register('acceptPrivacy', { required: 'Вы должны принять политику' })}
                error={errors.acceptPrivacy?.message}
            />

            <div className={styles.buttonWrapper}>
                <button type="submit" className={styles.button} disabled={isLoading}>
                    {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
                </button>
                <div className={styles.switch}>
                    <span>У вас еще нет аккаунта? </span>
                    <Link className={styles.switchLink} href="/auth/login">Войти</Link>
                </div>
            </div>
            {error && <p className={shared.error}>{error}</p>}
        </form>
    );
};
