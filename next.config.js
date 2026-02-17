/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/:path*" // Points to localhost in dev
            : "/api/index", // Points explicitly to index.py in prod
      },
    ];
  },
};

module.exports = nextConfig;