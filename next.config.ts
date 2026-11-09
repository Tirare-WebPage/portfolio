import type { NextConfig } from "next";

// GitHub Pages hosts this repository under /portfolio/. The same public asset
// paths are used in local development and under the exported base path.
const basePath = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
