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
      {
        protocol: "https",
        hostname: "www.kindercare.com"
      },
      {
        protocol: "https",
        hostname: "www.shauryasanadhya.com"
      },
      {
        protocol: "https",
        hostname: "img.kwcdn.com"
      },
      {
        protocol: "https",
        hostname: "www.dhresource.com"
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com"
      },
      {
        protocol: "https",
        hostname: "hips.hearstapps.com"
      },
      {
        protocol: "https",
        hostname: "gift-bagz.com"
      },
    ],
  },
};

export default nextConfig;
