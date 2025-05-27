/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.compressindia.co.in/',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000,       // (optional) Split sitemap into multiple files if URLs exceed this number
    // Additional options can be added here
};
