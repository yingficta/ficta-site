import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [],
    remotePatterns: [],
  },
  webpack: (config, { isServer }) => {
    // Add custom plugin to handle figma:asset imports
    config.plugins.push({
      apply: (compiler: any) => {
        compiler.hooks.normalModuleFactory.tap("FigmaAssetResolver", (nmf: any) => {
          nmf.hooks.beforeResolve.tap("FigmaAssetResolver", (resolveData: any) => {
            const request = resolveData.request;
            if (request && request.startsWith("figma:asset/")) {
              const hash = request.replace("figma:asset/", "");

              // Map Figma asset hashes to actual image files
              const assetMap: Record<string, string> = {
                // Logo
                "9b57b1f721b7529f390f9b7efdeb42384e37b266.png": path.resolve(
                  process.cwd(),
                  "public/images/logo.png"
                ),
                // Typewriter
                "7b4b926981c8f2b5834b29675e0eb4faf27cc08d.png": path.resolve(
                  process.cwd(),
                  "public/images/typewriter.png"
                ),
                // Ying Dong photo
                "d92992a735857595aeb9bf21070812a7f561e673.png": path.resolve(
                  process.cwd(),
                  "public/images/team/ying-dong.png"
                ),
              };

              const mappedPath = assetMap[hash];
              if (mappedPath) {
                resolveData.request = mappedPath;
              }
            }
          });
        });
      },
    });

    return config;
  },
};

export default nextConfig;
