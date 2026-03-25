import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "https://docs.loghaven.dev",
        permanent: false,
      },
      {
        source: "/docs/:path*",
        destination: "https://docs.loghaven.dev/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
