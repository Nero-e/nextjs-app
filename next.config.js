/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
      {
        source: "/short-break",
        destination: "/shortBreak",
      },
      {
        source: "/long-break",
        destination: "/longBreak",
      },
    ];
  },
};

module.exports = nextConfig;
