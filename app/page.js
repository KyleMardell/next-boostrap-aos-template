import styles from "./page.module.css";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
    title: "Home",
    description:
        "Welcome to Client Business Name – professional services for your needs.",
    url: "https://yourdomain.com",
});

export default function Home() {
    return (
        <main className={`container ${styles.home}`}>
            {/* Hero Section */}
            <section className="text-center" data-aos="fade-up">
                <h1>Hello World</h1>
                <p>Your site is ready.</p>
            </section>

            {/* About / Info Section */}
            <section
                className="text-center mt-5"
                data-aos="fade-up"
                data-aos-delay="200">
                <h2>Example</h2>
                <p>
                    This is an example
                </p>
            </section>

            {/* Services / Features Section */}
            <section
                className="text-center mt-5"
                data-aos="fade-up"
                data-aos-delay="200">
                <h2>Example</h2>
                <p>
                    This is an example
                </p>
            </section>

            {/* Call to Action Section */}
            <section
                className="text-center mt-5 mb-5"
                data-aos="fade-up"
                data-aos-delay="200">
                <h2>Example</h2>
                <p>
                    This is an example
                </p>
            </section>
        </main>
    );
}
