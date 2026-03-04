"use client";

import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Container>
                {/* Centered main content */}
                <p className="text-center mb-1">
                    © {year} Client Business Name. All rights reserved.
                </p>
                <p className="text-center mb-0">
                    <a href="/privacy">Privacy Policy</a> |{" "}
                    <a href="/terms">Terms of Service</a>
                </p>

                {/* Credit link on its own line, right-aligned */}
                <p className={`mb-0 ${styles.credit}`}>
                    <a
                        href="https://kmweb.co.uk"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website by KM Web
                    </a>
                </p>
            </Container>
        </footer>
    );
}
