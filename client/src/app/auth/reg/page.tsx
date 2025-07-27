'use client'

import RegForm from "@/features/auth/components/RegForm/RegForm";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { LoginFormData } from "@/features/auth/types/types";

export default function page() {
    const { mutate, isLoading, error } = useLogin();

    const onSubmit = (data: LoginFormData) => {
        mutate(data, () => console.log("Успешная регистрироваться"));
    };

    return (<RegForm onSubmit={onSubmit} isLoading={isLoading} error={error} />);
}