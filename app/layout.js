import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import AOSProvider from "../components/AOSProvider";
import SiteNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    display: "swap",
});

export const metadata = {
    title: {
        default: "Client Business Name",
        template: "%s | Client Business Name",
    },
    description: "Professional services offered by Client Business Name.",
    keywords: ["service", "business", "local services"],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-bs-theme="dark">
            <body className={roboto.className}>
                <AOSProvider>
                    <SiteNavbar />
                    {children}
                    <Footer />
                    </AOSProvider>
            </body>
        </html>
    );
}
