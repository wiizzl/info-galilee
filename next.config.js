const { withContentlayer } = require("next-contentlayer2");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
