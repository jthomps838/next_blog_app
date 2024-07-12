/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
};

module.exports = nextConfig;
