// next.config.mjs
import createAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default withBundleAnalyzer(nextConfig);
