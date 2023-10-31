module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "airbnb-typescript/base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  plugins: ["react", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  rules: {
    "no-undef": "off",
    "import/extensions": "off",
  },
};
