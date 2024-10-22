/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**', // Tillåt alla sökvägar under Firebase Storage-domänen
      },
    ],
  },
};

export default nextConfig;
