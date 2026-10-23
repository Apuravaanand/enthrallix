import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for static site export (Netlify / GitHub Pages)
  output: 'export',

  // Disables default image optimization server requirement for static output
  images: {
    unoptimized: true,
  },

  // Hides floating Turbopack / Next.js dev indicator badge in local development
  devIndicators: false,
};

export default nextConfig;