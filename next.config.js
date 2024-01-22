/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/ayo",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/ayo/home",
        basePath: false,
        permanent: false,
      },
    ];
  },
  // optimizeFonts: false,
};

module.exports = nextConfig;
