import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/hokkaido-2027",
        assetPrefix: "/hokkaido-2027/",
        images: { unoptimized: true },
        // The repository also contains Cloudflare-only helper modules that are
        // not part of this static itinerary page.
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
