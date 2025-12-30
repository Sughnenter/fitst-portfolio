/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // <-- this tells Next to export as static HTML
  images: { unoptimized: true },  // <-- disable Next.js image optimization for static export
};

module.exports = nextConfig;
