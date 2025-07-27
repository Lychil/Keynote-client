import Logo from '@/components/ui/Logo/Logo';
import WelcomeSlider from '@/features/auth/components/WelcomeSlider/WelcomeSlider';
import styles from "@/app/auth/welcome/page.module.css";
import WelcomeHeader from './WelcomeHeader';


export default function page() {
    return (
        <div>
            <WelcomeHeader />
            <div className={styles.logoWrapper}>
                <Logo />
            </div>
            <WelcomeSlider />
        </div>
    )
}
