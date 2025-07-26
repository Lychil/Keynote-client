import React from "react";
import styles from "@/app/auth/layout.module.css";

export default function layout(
    { sidebar, children }: { sidebar: React.ReactNode; children: React.ReactNode; }
) {
    return (
        <div className={styles.wrapper}>
            {children}
            {sidebar}
        </div>
    )
}

