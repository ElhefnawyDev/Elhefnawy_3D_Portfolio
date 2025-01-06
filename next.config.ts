import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],

  webpack(config) {
    // Add rule to handle .gltf files
    config.module.rules.push({
      test: /\.(gltf|glb)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/assets/',
            publicPath: '/_next/static/assets/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
