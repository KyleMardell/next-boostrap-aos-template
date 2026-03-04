// Default metadata function, must be imported per page for best SEO
export function generateMetadata({ title, description, url, image }) {
    return {
        title: title,
        description: description,
        openGraph: {
            title,
            description,
            url,
            siteName: "Client Business Name", // Update to business name
            images: [
                {
                    url: image || `${url}/og-image.png`, // change image url to logo or similar
                    width: 1200,
                    height: 630,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image || `${url}/og-image.png`], // change image url to logo or similar
        },
    };
}
