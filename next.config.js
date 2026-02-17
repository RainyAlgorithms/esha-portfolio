/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/:path*" // Points to localhost:8000 in dev
            : "/api/", // Points to Vercel Serverless in prod
      },
    ];
  },
};

module.exports = nextConfig;