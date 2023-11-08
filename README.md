
![Supaapps Logo](https://supaapps.com/wp-content/uploads/logo.png)

## ESLint Config Supaapps

Starting on lintting for each application can be a hustle, getting into a lintting pattern to follow then starting the poilerplate every time is wasting a time. `eslint-config-supaapps` aims to simplify this. 

`eslint-config-supaapps` is an easy-to-use package developed by Supaapps GmbH to start a solid eslint approach for linting app code under one of the most of standard & common lintting approaches are used. Although intended for internal use, we've made this package available under the MIT license. Feel free to integrate it into your projects.



## Installation

```bash
npm install eslint-config-supaapps
```
Or using Yarn:
```bash
yarn add eslint-config-supaapps
```

### Adding Dependancies

```bash
npx install-peerdeps --dev eslint-config-supaapps
```
Or using Yarn:
```bash
# Getting peer deps info
yarn info eslint-config-supaapps peerDependencies

# You will see info like this in terminal:
{
  "eslint": "^8.47.0",
  "eslint-plugin-import": "^2.28.0",
  "prettier": "^3.0.2",
  # The rest of peer deps...
}

# Installing these peer deps
yarn add eslint eslint-plugin-import prettier --dev
```

### Adding Formatter configuration
Create a new file called `.prettierrc` in the root directory and paste this `json` :

```json
{
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 70,
    "tabWidth": 2
}
```

## Usage

#### You should extend the package name in the file of `.eslintrc`
Below is a clarification and how to use it within your package.

```json
{
  "extends": "supaapps"
}
```

## License

Notice:  While this software is open-source under the MIT License, the "Supaapps" name, branding, and logo are proprietary and copyrighted by Supaapps GmbH. Any use, reproduction, or distribution of the "Supaapps" brand assets without explicit permission is strictly prohibited.

MIT License