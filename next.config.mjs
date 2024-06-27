/** @type {import('next').NextConfig} */

const nextConfig = {
  // crossOrigin: "use-credentials",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
