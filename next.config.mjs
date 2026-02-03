// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
// };

// export default nextConfig;

// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ← CRITICAL: Enables static export for cPanel

  // Image configuration
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: true, // ← REQUIRED for static export
  },

  // Optional but helpful for cPanel
  trailingSlash: true, // Helps with routing on Apache servers

  // Disable features that won't work on static hosting
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Remove if you don't use TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },

  // Add basePath if using a subdirectory
  // basePath: '/subdirectory', // Only if deploying to a subfolder

  // Add assetPrefix for CDN if needed
  // assetPrefix: 'https://cdn.digitanotion.com.ng',

  // Redirects (will be exported to static/_redirects)
  async redirects() {
    return [
      {
        source: "/services/cyber-security",
        destination: "/services/cybersecurity",
        permanent: true,
      },
      {
        source: "/old-blog/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },

  // Rewrites won't work with static export
  // Use .htaccess instead for cPanel

  // Add security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
