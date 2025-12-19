import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for easy deployment anywhere
  output: "export",

  // Optimize images
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
