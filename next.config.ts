import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático: la web se sirve desde cualquier hosting (Vercel, GitHub Pages, Netlify)
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
