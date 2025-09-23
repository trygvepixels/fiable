/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
