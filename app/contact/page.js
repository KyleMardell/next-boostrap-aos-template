import styles from "./page.module.css";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
    title: "Contact",
    description:
        "Get in touch with Client Business Name – send us a message or find our contact details.",
    url: "https://yourdomain.com/contact",
});

export default function Contact() {
    return (
        <main className={`container ${styles.contact}`}>
            {/* Hero / Intro */}
            <section className="text-center" data-aos="fade-up">
                <h1>Contact Us</h1>
                <p>
                    We’d love to hear from you! Fill out the form below or use
                    our contact details.
                </p>
            </section>

            {/* Contact Form Section */}
            <section className="mt-5" data-aos="fade-up" data-aos-delay="200">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Your email"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="5"
                                    placeholder="Your message"></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Contact Details / Optional */}
            <section
                className="mt-5 text-center"
                data-aos="fade-up"
                data-aos-delay="400">
                <h2>Other Ways to Contact Us</h2>
                <p>Email: info@clientbusiness.com</p>
                <p>Phone: +44 1234 567890</p>
                <p>Address: 123 Business Street, City, Postcode</p>
            </section>
        </main>
    );
}
