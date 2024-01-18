

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/ayo",
    async redirects() {
      return [
        {
          source: "/",
          destination: "/home",
          permanent: false,
        },
      ];
    },
    // optimizeFonts: false,
  };
  
  module.exports = nextConfig;
  
