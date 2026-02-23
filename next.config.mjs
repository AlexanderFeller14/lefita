/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lefita.ch"
      },
      {
        protocol: "https",
        hostname: "www.lefita.ch"
      }
    ]
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
