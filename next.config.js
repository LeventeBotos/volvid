/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // i18n: {
    //     locales: ['hu', 'en', 'de'],
    //     defaultLocale: 'hu',
    //     localeDetection: true
    // },
    async redirects() {
            return [
              {
                source: '/hu',
                destination: '/',
                permanent: true,
              },
            ]
         
        }
}

module.exports = nextConfig
