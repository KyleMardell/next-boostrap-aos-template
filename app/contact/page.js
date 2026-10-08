import styles from "./page.module.css";
import { createPageMetadata } from "@/lib/metadata";
import site from "@/lib/site-config.json";

export const metadata = createPageMetadata({
    title: "Contact",
    description:
        `Get in touch with ${site.businessName} – find our contact details.`,
    path: "/contact",
});

export default function Contact() {
    return (
        <main id="main-content" tabIndex={-1} className={`container ${styles.contact}`}>
            {/* Hero / Intro */}
            <section className="text-center" data-aos="fade-up">
                <h1>Contact Us</h1>
                <p>
                    We’d love to hear from you! Use our contact details below.
                </p>
            </section>

            {/* Contact Form Section */}
            <section className="mt-5" data-aos="fade-up" data-aos-delay="200">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <p id="form-example-note" className="mb-4">Example form only: messages cannot be sent until a client form service is connected.</p>
                        <form aria-describedby="form-example-note">
                            <fieldset disabled>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    autoComplete="name"
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
                                    name="email"
                                    autoComplete="email"
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
                                    name="message"
                                    rows="5"
                                    placeholder="Your message"></textarea>
                            </div>

                            <button
                                type="button"
                                className="btn btn-primary w-100">
                                Send Message (example only)
                            </button>
                        </fieldset>
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
                <p>Email: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
                <p>Phone: <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`}>{site.contact.phone}</a></p>
                <p>Address: {site.contact.address}</p>
            </section>
        </main>
    );
}
