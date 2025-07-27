'use client';

import { useEffect, useState } from 'react';
import styles from '@/features/auth/components/WelcomeSlider/WelcomeSlider.module.css';
import { slides } from '@/features/auth/components/WelcomeSlider/slides';

export default function WelcomeSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className={styles.sliderWrapper}>
            <button className={`${styles.nav} ${styles.left}`} onClick={handlePrev}>
                {'<'}
            </button>

            <div className={styles.slider}>
                <div className={styles.icon}>{slides[index].icon}</div>
                <h2 className={styles.title}>{slides[index].title}</h2>
                <p className={styles.description}>{slides[index].description}</p>

                <div className={styles.indicators}>
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.dot} ${i === index ? styles.active : ''}`}
                        />
                    ))}
                </div>
            </div>

            <button className={`${styles.nav} ${styles.right}`} onClick={handleNext}>
                {'>'}
            </button>
        </div>
    );
}
