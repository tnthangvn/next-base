/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    gtmID: process.env.NEXT_PUBLIC_GTM_ID || '',
  },
};

export default nextConfig;
