import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "sockdreams.com",
            },
            {
                protocol: "https",
                hostname: "www.barcastores.com",
            },
            {
                protocol: "https",
                hostname: "cdn.mothersalwaysright.com",
            },
        ],
    },
};

export default nextConfig;
