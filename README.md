
yarn add eslint --dev --dev @typescript-eslint/eslint-plugin // k dùng

angular lint

Install Angular ESLint
ng add @angular-eslint/schematics

Install Prettier and Prettier-ESLint dependencies
yarn add  prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier  --dev 

filename: .eslintrc.json
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["tsconfig.json", "e2e/tsconfig.json"],
        "createDefaultProgram": true
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      "rules": {
        "@angular-eslint/component-class-suffix": [
          "error",
          {
            "suffixes": ["Page", "Component"]
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@typescript-eslint/member-ordering": 0,
        "@typescript-eslint/naming-convention": 0
      }
    },
    // NOTE: WE ARE NOT APPLYING PRETTIER IN THIS OVERRIDE, ONLY @ANGULAR-ESLINT/TEMPLATE
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    },
    // NOTE: WE ARE NOT APPLYING @ANGULAR-ESLINT/TEMPLATE IN THIS OVERRIDE, ONLY PRETTIER
    {
      "files": ["*.html"],
      "excludedFiles": ["*inline-template-*.component.html"],
      "extends": ["plugin:prettier/recommended"],
      "rules": {
        // NOTE: WE ARE OVERRIDING THE DEFAULT CONFIG TO ALWAYS SET THE PARSER TO ANGULAR (SEE BELOW)
        "prettier/prettier": ["error", { "parser": "angular" }]
      }
    }
  ]
}

filename: .eslintrc.json { tham khảo }
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": 12,
        "project": ["tsconfig.json", "e2e/tsconfig.json"],
        "createDefaultProgram": true
    },
      "plugins": [
        "@typescript-eslint/eslint-plugin",
        "prettier"
      ],
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      "rules": {
        "@angular-eslint/component-class-suffix": [
          "error",
          {
            "suffixes": ["Page", "Component"]
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "style": "camelCase"
          }
        ],
       
        // 0 == "off", 1 == "warn", 2 == "error"
        "@typescript-eslint/member-ordering": 0, 
        "@typescript-eslint/naming-convention": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "prettier/prettier": [ // hủy cảnh báo "Delete `␍`eslintprettier/prettier"
          "error",
          {
            "endOfLine": "auto"
          }
        ],
        // "no-unused-vars": ["error", { "vars": "all" }], // báo lỗi ĐỎ nếu có biến k dùng tới
        "semi": ["error", "always"] // thêm dấu ; cuối dòng code
      }
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    },
    {
      "files": ["*.html"],
      "excludedFiles": ["*inline-template-*.component.html"],
      "extends": ["plugin:prettier/recommended"],
      "rules": {
        "prettier/prettier": [ // hủy cảnh báo "Delete `␍`eslintprettier/prettier"
          "error",
          {
            "endOfLine": "auto"
          },
          { "parser": "angular" }
        ]
      }
    }
  ]
}


Filename: .prettierrc

{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80
}

Filename: .prettierignore

build
coverage
e2e
node_modules

Filename angular.json 
"lint": {
  "builder": "@angular-eslint/builder:lint",
  "options": {
    "lintFilePatterns": [
      "src/**/*.ts",
      "src/**/*.html"
    ]
  }
},

.vscode/settings.json file:
==> ctrl + shift + P, gõ Prefểnces: Open settings (JSON)
 "[typescript]": {
    // "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.formatOnSave": false
  },
"editor.suggest.snippetsPreventQuickSuggestions": false,
"editor.inlineSuggest.enabled": true


======> Tự động hoá với Lint-staged và Husky

yarn add --dev lint-staged

package.json
"lint-staged": {
    "*.ts": [
      "npm run lint",
      "npm run format",
      "git add ." // có hoặc k vẫn ok
    ]
}

yarn add --dev husky
yarn husky install
yarn husky add .husky/pre-commit "yarn lint-staged"

file pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint-staged

file package.json
"scripts": {
...
"postinstall": "husky install"
}



---- style lint ----
yarn add stylelint stylelint-scss

yarn add --dev stylelint-config-standard stylelint-config-standard-scss stylelint-config-prettier stylelint-config-prettier-scss