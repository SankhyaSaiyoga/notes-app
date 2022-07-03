/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    MONGO_URI: "mongodb+srv://newExe:<password>@cluster0.j2s1p.mongodb.net/?retryWrites=true&w=majority"
  }
}
