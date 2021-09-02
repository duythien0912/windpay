module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-unused-vars": 1,
    "react/prop-types": 1,
    "react/no-children-prop": 1,
    "react/no-unescaped-entities": 1,
  },
  ignorePatterns: ["**/*.test.js"],
}
