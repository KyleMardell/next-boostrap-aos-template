const site = require("./lib/site-config.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: site.siteUrl,
    outDir: "out",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    autoLastmod: false,
    exclude: ["/404", "/500", "/_not-found"],
};
