/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  i18n: {
    locales: ['ca', 'es', 'en', 'fr'],
    defaultLocale: 'ca'
  }
};

module.exports = nextConfig;
