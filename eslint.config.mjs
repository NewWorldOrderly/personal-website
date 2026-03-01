import nextConfig from 'eslint-config-next';

export default [
  {
    ignores: ['**/fixtures/**', '.next/**', 'node_modules/**'],
  },
  ...nextConfig,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
    settings: {
      next: {
        rootDir: ['.'],
      },
    },
  },
];
