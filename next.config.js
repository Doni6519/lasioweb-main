const { withNextVideo } = require('next-video/process')

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          }
        ]
      }
}

module.exports = withNextVideo(nextConfig)
