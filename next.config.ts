import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',          // Required for static site export
  devIndicators: false,      // Hides the floating Next.js / Turbopack dev badge
  images: {
    unoptimized: true,       // Disables default Image Optimization for static export
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;