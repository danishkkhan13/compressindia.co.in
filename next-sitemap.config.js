/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.compressindia.co.in/',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000,       // (optional) Split sitemap into multiple files if URLs exceed this number
    changefreq: 'daily',     // (optional) You can customize this to daily, weekly, etc.
    priority: 0.7,           // (optional) Priority of the URLs
    exclude: ['/404', '/admin/*'], // (optional) Exclude specific URLs if needed
};
