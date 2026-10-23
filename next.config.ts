import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static website in the out/ directory
  output: "export",

  // Hide the development indicator
  devIndicators: false,

  // Support static hosting without a Next.js image optimization server
  images: {
    unoptimized: true,
  },

  // Preserve your existing Tailwind CSS Turbopack integration
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