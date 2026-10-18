import type { NextConfig } from "next";

// GitHub Pages hosts this project under /portfolio/. Keep local development at /.
const basePath = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
};

export default nextConfig;
