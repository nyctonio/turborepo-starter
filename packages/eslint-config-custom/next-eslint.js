// add no used variables false
module.exports = {
  extends: [
    'next/core-web-vitals',
    'next',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  globals: {
    React: 'readonly',
  },
  rules: {
    'no-unused-vars': ['off'],
  },
  ignorePatterns: [
    'node_modules',
    'out',
    '.next',
    '.turbo',
    '**/*.js',
    '**/*.json',
  ],
};
