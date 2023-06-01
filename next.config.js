/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DATABASE_CONNECTION:
      "mongodb+srv://chrisdietrich366:Devindiet1@dietrichlandcare.kq6v5mn.mongodb.net/dietrich_construction",
  },
};

module.exports = nextConfig;
