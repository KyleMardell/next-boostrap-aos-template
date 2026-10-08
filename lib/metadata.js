import site from "./site-config.json";

export function createPageMetadata({ title, description = site.description, path = "/", image = site.socialImage } = {}) {
    const url = new URL(path, site.siteUrl).href;
    const images = image ? [new URL(image, site.siteUrl).href] : [];
    const sharingTitle = title ? `${title} | ${site.businessName}` : site.businessName;
    return {
        ...(title ? { title } : {}),
        description,
        alternates: { canonical: url },
        openGraph: { title: sharingTitle, description, url, siteName: site.businessName, type: "website", images },
        twitter: { card: image ? "summary_large_image" : "summary", title: sharingTitle, description, images },
    };
}
