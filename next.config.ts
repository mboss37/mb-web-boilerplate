import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable typed routes for better type safety
  typedRoutes: true,
  
  // Allow cross-origin requests from development IPs
  allowedDevOrigins: ['192.168.188.75'],
  
  // Experimental features
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Image optimization
  images: {
    // Add your image domains here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      // Add your redirects here
      // Example:
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ];
  },

  // Rewrites
  async rewrites() {
    return [
      // Add your rewrites here
      // Example:
      // {
      //   source: '/api/:path*',
      //   destination: 'https://api.example.com/:path*',
      // },
    ];
  },

  // Webpack configuration (if needed)
  // webpack: (config, { dev, isServer }) => {
  //   // Add custom webpack config here if needed
  //   return config;
  // },

  // Production optimizations
  poweredByHeader: false,
  compress: true,
  
  // React strict mode for better debugging
  reactStrictMode: true,
};

export default nextConfig;
