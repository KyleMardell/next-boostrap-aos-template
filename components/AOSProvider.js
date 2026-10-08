"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

// AOS has no destroy API; initialise its global listeners only once.
let initialised = false;

export default function AOSProvider({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        const root = document.documentElement;
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const initialise = () => {
            root.classList.remove("aos-ready");
            if (motion.matches) return;
            try {
                if (!initialised) {
                    AOS.init({ duration: 800, once: true });
                    initialised = true;
                }
                AOS.refreshHard();
                root.classList.add("aos-ready");
            } catch (error) {
                root.classList.remove("aos-ready");
                console.warn("Scroll animations unavailable; content remains visible.", error);
            }
        };
        initialise();
        motion.addEventListener("change", initialise);
        return () => {
            motion.removeEventListener("change", initialise);
            root.classList.remove("aos-ready");
        };
    }, []);

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            if (document.documentElement.classList.contains("aos-ready")) {
                try {
                    AOS.refreshHard();
                } catch {
                    document.documentElement.classList.remove("aos-ready");
                }
            }
        });
        return () => cancelAnimationFrame(frame);
    }, [pathname]);

    return children;
}
