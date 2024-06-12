/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.freepnglogos.com',
      'brandeps.com',
      'd2khtgq7ihsmbk.cloudfront.net'
    ],
  },  
  output: 'export',
};

export default nextConfig;
