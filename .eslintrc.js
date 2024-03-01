module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    // "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "_" }],
    "no-unused-vars": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "import/no-default-export": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order:
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
        },
        pathGroups: [
          {
            pattern: "test/test-utils",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/dep_components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/dep_hooks/**",
            group: "internal",
            position: "after",
          },
        ],
        groups: [
          "builtin",
          "external",
          "internal",
          "sibling",
          "parent",
          "index",
          "object",
          "type",
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        "./src/pages/**/*.tsx",
        "./src/pages/**/*.ts",
        "./src/middleware.ts",
        "./.storybook/*.{ts,tsx}",
        "./**/*.stories.tsx",
      ],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "error",
      },
    },
    {
      files: ["./**/*.stories.tsx"],
      rules: {
        "@next/next/no-html-link-for-pages": "off",
      },
    },
  ],
  ignorePatterns: ["next-env.d.ts", "./.generators/**/*"],
};
