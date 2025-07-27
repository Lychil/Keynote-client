import Link from 'next/link';
import styles from "@/components/ui/Logo/Logo.module.css";

interface LogoProps {
    link?: boolean;
}

export default function Logo({ link = false }: LogoProps) {
    const content = (
        <img className={styles.logo} src="/icons/logo-dark.svg" alt='Логотип(темная тема) Keynote' />
    );

    return link ? <Link href="/">{content}</Link> : content;
};
