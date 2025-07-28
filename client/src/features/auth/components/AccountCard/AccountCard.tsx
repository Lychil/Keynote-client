import styles from '@/features/auth/components/AccountCard/AccountCard.module.css';

interface Props {
    name: string;
    active?: boolean;
    onClick: () => void;
}

export default function AccountCard({ name, active = false, onClick }: Props) {
    return (
        <div
            className={`${styles.card} ${active ? styles.active : ''}`}
            onClick={onClick}
        >
            {name}
        </div>
    );
}
