import site from "@/lib/site-config.json";
import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p className="text-center mb-1">
                    &copy; {year} {site.businessName}. All rights reserved.
                </p>
                {site.credit && (
                    <p className={`mb-0 ${styles.credit}`}>
                        <a href={site.credit.href} target="_blank" rel="noopener noreferrer">
                            {site.credit.label}
                        </a>
                    </p>
                )}
            </div>
        </footer>
    );
}
