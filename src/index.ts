module.exports = {
  root: true,
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "eslint:recommended",
    "airbnb-typescript/base",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "next/core-web-vitals",
  ],
  plugins: ["prettier"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {
    "react/button-has-type": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/alt-text": 0,
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "comma",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "comma",
          "requireLast": true
        },
        "overrides": {
          "interface": {
            "multiline": {
              "delimiter": "semi",
              "requireLast": true
            }
          }
        }
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "react-hooks/exhaustive-deps": 0,
    "no-underscore-dangle": 0
  },
};
