/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://yourdomain.com",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    robotsTxtOptions: {
        additionalSitemaps: ["https://yourdomain.com/sitemap.xml"],
    },
};
