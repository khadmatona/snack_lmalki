import type { NextConfig } from "next";

// Static export: `npm run build` produces an `out/` folder you can host anywhere
// (Netlify, Vercel, GitHub Pages, any shared hosting).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // emits menu/index.html so plain nginx serves /menu
  trailingSlash: true,
};

export default nextConfig;
