/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    compiler: {
      styledComponents: true
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'kleutons.github.io',
          port: '',
          pathname: '/store-api/img/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;