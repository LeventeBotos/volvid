/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    i18n: {
        locales: ['hu', 'en', 'de'],
        defaultLocale: 'hu',
        localeDetection: false
    }
}

module.exports = nextConfig
