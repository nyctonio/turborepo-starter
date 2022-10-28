/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['ui']);
const path = require('path');

// path of .env file
module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.externals = [...(config.externals || []), '@prisma/client'];
    config.module.rules.push({
      test: /prisma-client\/index\.js$/,
      loader: 'string-replace-loader',
      options: {
        search: 'config.dirname = dirname',
        replace: `config.dirname = '${path.dirname(
          require.resolve('database/generated/prisma-client')
        )}'`,
      },
    });
    // Important: return the modified config
    return config;
  },
});
