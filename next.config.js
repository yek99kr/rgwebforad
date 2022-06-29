/** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n: {
//     locales: ["en-US"],
//     defaultLocale: "en-US",
//   },
//   reactStrictMode: false,
// };

// module.exports = nextConfig;

// module.exports = () => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/deck",
//         destination: "https://deckrealgood.netlify.app",
//       },
//     ];
//   };
//   return {
//     rewrites,
//   };
// };

module.exports = {
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  // basePath: '/docs',
  reactStrictMode: false,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/deck",
          destination: `https://deck.realgood.tv`,
          basePath: false,
        },
      ],
    };
  },
};

// module.exports = {
//   i18n: {
//     locales: ["en-US"],
//     defaultLocale: "en-US",
//   },
//   reactStrictMode: false,
//   async rewrites() {
//     return [
//       {
//         source: "/deck",
//         destination: "https://deck.realgood.tv",
//       },
//     ];
//   },
// };

// module.exports = {
//   env: {
//     SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
//     SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
//   },
//   images: {
//     domains: ["cdn.shopify.com"],
//   },
// };
