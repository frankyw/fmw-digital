/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/gashawk/privacy',
        destination: 'https://gashawk.me/privacy',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
