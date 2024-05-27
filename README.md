
![Supaapps Logo](https://supaapps.com/wp-content/uploads/logo.png)

## ESLint Config Supaapps

Starting on lintting for each application can be a hustle, getting into a lintting pattern to follow then starting the poilerplate every time is wasting a time. `eslint-config-supaapps` aims to simplify this. 

`eslint-config-supaapps` is an easy-to-use package developed by Supaapps GmbH to start a solid eslint approach for linting app code under one of the most of standard & common lintting approaches are used. Although intended for internal use, we've made this package available under the MIT license. Feel free to integrate it into your projects.



## Installation

```bash
npm install --save-dev eslint-config-supaapps
# install peer dependencies

npm install --save-dev @next/eslint-plugin-next \
  @types/node \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint\
  eslint-config-airbnb-base \
  eslint-config-airbnb-typescript\
  eslint-config-next\
  eslint-config-next \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  prettier



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