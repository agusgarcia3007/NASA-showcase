/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mars.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "www.jpl.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
      },
    ],
  },
};

module.exports = nextConfig;
