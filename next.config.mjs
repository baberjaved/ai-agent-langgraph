/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: process.env.ANTHROPIC_API_KEY,
    webpack(config, { isServer }) {
        if (process.env.NEXT_DEBUG === 'true') {
          console.log("Debug Mode Enabled");
        }

        return config;
    }
};

export default nextConfig;
