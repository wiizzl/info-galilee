const { withContentlayer } = require("next-contentlayer2");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.imgur.com",
            },
        ],
    },
};

module.exports = withContentlayer(nextConfig);
