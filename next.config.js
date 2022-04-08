/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        YOUTUBE_KEY: process.env.YOUTUBE_KEY,
        URL_FETCH_MAIL: process.env.URL_FETCH_MAIL,
    },
};
module.exports = nextConfig
