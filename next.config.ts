import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
  },

  images:{
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
      },
      {
        protocol:'https',
        hostname:'lh3.googleusercontent.com',
        port:''
      }
  
  ]
  }
  /* config options here */
};

export default nextConfig;
