/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        YOUTUBE_KEY: process.env.YOUTUBE_KEY,
    },
};
module.exports = nextConfig
