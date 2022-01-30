/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const config = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'custom',
    path: '/',
  },
}

module.exports = config
