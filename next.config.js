/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  output: 'export',
  trailingSlash: true,
  // 使用重定向替代 rewrites
  async redirects() {
    return [
      {
        source: '/crazy-cattle-3d.embed',
        destination: '/game/crazycattle3d/index.html',
        permanent: true,
      },
      {
        source: '/crazy-cow-3d.embed',
        destination: '/game/crazycow3d/index.html',
        permanent: true,
      },
      {
        source: '/cheese-chompers-3d.embed',
        destination: '/game/cheesechompers3d/index.html',
        permanent: true,
      },
      {
        source: '/brainrot-clicker.embed',
        destination: '/game/brainrot-clicker/index.html',
        permanent: true,
      },
      {
        source: '/basketball-bros-unblocked.embed',
        destination: '/game/basketball-bros-unblocked/index.html',
        permanent: true,
      },
      {
        source: '/pokemon-gamma-emerald.embed',
        destination: '/game/pokemon-gamma-emerald/index.html',
        permanent: true,
      },
      {
        source: '/crazy-chicken-3d.embed',
        destination: '/game/crazy-chicken-3d/index.html',
        permanent: true,
      },
      {
        source: '/sprunki-incredibox.embed',
        destination: '/game/sprunki-incredibox/index.html',
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig;


