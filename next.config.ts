import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [],
  allowedDevOrigins: ["127.0.0.1:3000", "127.0.0.1", "localhost"],
};

export default nextConfig;
