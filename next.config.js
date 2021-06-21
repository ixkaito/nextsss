/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const config = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = config
