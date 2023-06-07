/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './app/image.ts',
    },
    compiler: {
        styledComponents: true
    }
  }
  
  module.exports = nextConfig