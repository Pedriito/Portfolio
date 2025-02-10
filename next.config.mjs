/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration des images pour autoriser les URLs distantes spécifiques
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

  // Désactiver ou activer React Strict Mode (optionnel)
  reactStrictMode: true,

  // Configuration du dossier de sortie (optionnel, par défaut `.next`)
  // distDir: '.next',

  // Optimisation des performances et du cache (optionnel)
  experimental: {
    appDir: true, // Active la nouvelle structure `app` (si vous utilisez Next.js 13+)
  },
};

// Exportez la configuration comme un module ES
export default nextConfig;