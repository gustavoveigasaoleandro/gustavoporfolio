const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pages/home",
        permanent: true,
      },
      {
        source: "/studies",
        destination: "/pages/studies",
        permanent: true,
      },
      {
        source: "/experiences",
        destination: "/pages/experiences",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
