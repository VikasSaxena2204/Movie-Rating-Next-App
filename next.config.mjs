/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org',
          pathname: '**',
        },
      ],
    },
    output: 'export',
  };
  
  export default nextConfig;

  