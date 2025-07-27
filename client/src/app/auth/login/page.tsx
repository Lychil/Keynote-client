'use client'

import LoginForm from "@/features/auth/components/LoginForm/LoginForm";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { LoginFormData } from "@/features/auth/types/types";

export default function page() {
    const { mutate, isLoading, error } = useLogin();

    const onSubmit = (data: LoginFormData) => {
        mutate(data, () => console.log("Успешный вход"));
    };

    return (<LoginForm onSubmit={onSubmit} isLoading={isLoading} error={error} />);
}
