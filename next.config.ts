import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: 'i.ibb.co',
      },
      {
        hostname: 'example.com',
      },
      {
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        hostname: '*',
      }
    ],
  },
};

export default nextConfig;
