/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com', // Autorise les images provenant de LinkedIn
        port: '', // Laissez vide si le port n'est pas spécifié
        pathname: '**', // Autorise tous les chemins sous media.licdn.com
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;