/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blogs/waterproofing-cost-per-sq-ft-in-lucknow-is-cheap-worth-it',
        destination: '/blogs/waterproofing-costs-per-sq-ft-in-lucknow-a-smart-homeowners-guide',
        permanent: true,
      },
      {
        source: '/blogs/waterproofing-cost-per-sq-ft-in-lucknow-maximize-your-budget-with-fiable',
        destination: '/blogs/waterproofing-costs-per-sq-ft-in-lucknow-a-smart-homeowners-guide',
        permanent: true,
      },
      {
        source: '/blogs/waterproofing-cost-per-sq-ft-in-lucknow-get-your-instant-quote',
        destination: '/blogs/waterproofing-costs-per-sq-ft-in-lucknow-a-smart-homeowners-guide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
