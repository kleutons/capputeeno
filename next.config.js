/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    compiler: {
        styledComponents: true
    },
    output: {
        exportTrailingSlash: true
    }
};

module.exports = nextConfig;