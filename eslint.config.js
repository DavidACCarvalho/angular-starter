// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      prettier,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/prefer-on-push-component-change-detection": ["error"],
      "@angular-eslint/prefer-standalone": ["error"],
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "ngdc", style: "camelCase" }
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "ngdc", style: "kebab-case" }
      ],
      "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1 }],
      "no-unused-vars": "off",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-useless-constructor": "warn",
      "@typescript-eslint/no-empty-function": "warn"
    }
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility
    ],
    rules: {
      "@angular-eslint/template/prefer-control-flow": ["error"],
      "@angular-eslint/template/prefer-ngsrc": ["error"],
      "@angular-eslint/template/prefer-self-closing-tags": ["error"]
    }
  }
);
