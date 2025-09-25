import type { NextConfig } from 'next';

const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  transpilePackages: [],
  typedRoutes: true,
  experimental: {
    cssChunking: true,
    reactCompiler: true,
    extensionAlias: {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.jsx': ['.tsx', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
      '.cjs': ['.cts', '.cjs'],
    },
  },
  compiler: { removeConsole: process.env.ENV === 'production' ? { exclude: ['error'] } : false },
  eslint: { ignoreDuringBuilds: true },
} satisfies NextConfig;

export default nextConfig;
