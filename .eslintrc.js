module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
    'next/core-web-vitals', // Includes Next.js-specific rules
  ],
  parser: '@typescript-eslint/parser', // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier'], // Includes Prettier as a plugin
  rules: {
    // General Rules
    'no-unused-vars': 'off', // Disable base ESLint rule (use TS rule instead)
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore variables starting with "_"
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],

    // Import Rules
    'import/no-default-export': 'error', // Disallow default exports
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        pathGroups: [
          { pattern: 'test/test-utils', group: 'internal', position: 'before' },
          {
            pattern: '@/dep_components/**',
            group: 'internal',
            position: 'after',
          },
          { pattern: '@/dep_hooks/**', group: 'internal', position: 'after' },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],

    // React Rules
    'react/react-in-jsx-scope': 'off', // Not required in React 17+
    'react/prop-types': 'off', // Disable prop-types rule for TypeScript

    // Prettier Rules
    'prettier/prettier': 'error', // Treat Prettier formatting issues as errors
  },
  overrides: [
    {
      files: [
        './src/pages/**/*.tsx',
        './src/pages/**/*.ts',
        './src/middleware.ts',
        './.storybook/*.{ts,tsx}',
        './**/*.stories.tsx',
        './src/app/**/*.tsx',
      ],
      rules: {
        'import/no-default-export': 'off', // Allow default exports for specific files
        'import/prefer-default-export': 'error', // Prefer default exports where applicable
      },
    },
    {
      files: ['./**/*.stories.tsx'],
      rules: {
        '@next/next/no-html-link-for-pages': 'off', // Relax rule for Storybook stories
      },
    },
  ],
  ignorePatterns: [
    'next-env.d.ts', // Ignore generated TypeScript types
    './.generators/**/*', // Ignore generators directory
  ],
};
