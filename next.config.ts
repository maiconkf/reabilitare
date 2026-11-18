import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  experimental: {
    esmExternals: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 136, 256, 336, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://*.google.com https://*.doubleclick.net https://use.typekit.net https://elfsightcdn.com https://*.elfsight.com https://*.elfsightcdn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://use.typekit.net https://p.typekit.net https://*.elfsight.com https://*.elfsightcdn.com; img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://*.google.com.br https://*.doubleclick.net https://*.googleadservices.com https://*.gstatic.com https://*.googleapis.com https://*.googleusercontent.com https://*.ggpht.com https://p.typekit.net https://*.elfsight.com https://*.elfsightcdn.com; font-src 'self' https://fonts.gstatic.com https://use.typekit.net https://*.elfsight.com https://*.elfsightcdn.com data:; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.doubleclick.net https://*.google.com https://*.google.com.br https://*.googleadservices.com https://*.typekit.net https://*.elfsight.com https://*.elfsightcdn.com; frame-src 'self' https://forms.gle https://*.google.com https://*.doubleclick.net https://*.elfsight.com; object-src 'none'; base-uri 'self';",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/fisioterapia-pilates-pelotas",
        destination: "/fisioterapia-pilates-quiropraxia-pelotas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
