import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import AOSProvider from "../components/AOSProvider";
import SiteNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import site from "@/lib/site-config.json";
import { createPageMetadata } from "@/lib/metadata";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
});

export const metadata = {
    ...createPageMetadata(),
    metadataBase: new URL(site.siteUrl),
    title: { default: site.businessName, template: `%s | ${site.businessName}` },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-bs-theme="dark">
            <body className={roboto.className}>
                <a className="skip-link" href="#main-content">Skip to main content</a>
                <AOSProvider>
                    <SiteNavbar />
                    {children}
                    <Footer />
                </AOSProvider>
            </body>
        </html>
    );
}
