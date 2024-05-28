/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  child-src *.psslai.com;
  style-src 'self' 'unsafe-inline' *.psslai.com;
  font-src 'self';  
  img-src 'self' data:;
  connect-src 'self' ws:;
`

const headersConfig = [{
  source: "/:path*",
  headers: [{
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  }, {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  }, {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }, {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  }, {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }, {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  // }, {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  // }
  },
  ]
}];

const nextConfig = {
output: 'standalone',
  headers: async () => headersConfig,
  reactStrictMode: false,
  poweredByHeader: false,
  rewrites: async () => [], 
  compress:true,
  generateEtags: false,
  //distDir: 'build',
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config
  },

};

export default nextConfig;
