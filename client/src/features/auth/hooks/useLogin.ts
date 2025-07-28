'use client'

import { useState } from 'react';
import { LoginFormData } from '@/features/auth/types/types';

export function useLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function mutate(data: LoginFormData, onSuccess?: () => void) {
        setIsLoading(true);
        setError(null);

        setTimeout(() => {
            setIsLoading(false);
            onSuccess && onSuccess();
        }, 500);
    }

    return { mutate, isLoading, error };
}
