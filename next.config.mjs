/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'cdn.dummyjson.com',
              port: '',  // Leave empty if not needed
              pathname: '/**',  // Allow images from any path
          },
      ],
  },
};

export default nextConfig;
