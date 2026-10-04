import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gardening-cms.huefinds.store',
        port: '',
        pathname: '/wp-content/uploads/**/**',
      },
    ],
  },
};

export default nextConfig;
