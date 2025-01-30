import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "th.bing.com"
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com"
      },
      {
        protocol: "https",
        hostname: "img.ltwebstatic.com"
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com"
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com"
      },
      {
        protocol: "https",
        hostname: "images.opumo.com"
      },
      {
        protocol: "https",
        hostname: "ae01.alicdn.com"
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com"
      },
    ],
  },
};

export default nextConfig;
