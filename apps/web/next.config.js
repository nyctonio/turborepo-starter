/** @type {import('next').NextConfig} */
require('dotenv').config({ path: __dirname + '/../../.env' });
const withTM = require('next-transpile-modules')(['ui']);

// path of .env file
module.exports = withTM({
  reactStrictMode: true,
});
