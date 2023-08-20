/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    compiler: {
      styledComponents: true
    },
    // output: 'export',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'storage.googleapis.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;