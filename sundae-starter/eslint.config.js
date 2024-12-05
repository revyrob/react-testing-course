import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import testingLibrary from "eslint-plugin-testing-library";
import vitest from "eslint-plugin-vitest";
import jestDom from "eslint-plugin-jest-dom";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Include globals for browser environment
        ...vitest.environments.env.globals, // Include Vitest globals
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "testing-library": testingLibrary,
      vitest,
      "jest-dom": jestDom,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Testing Library rules
      "testing-library/react": "error", // You can adjust the severity as needed
      // Vitest rules
      "vitest/prefer-expect-assertions": "warn", // Example rule
      // Jest-DOM rules
      "jest-dom/prefer-to-have-text-content": "error", // Example rule
      "no-unused-vars": "warn", // warning, not error
      "vitest/expect-expect": "off", // eliminate distracting red squiggles while writing tests
      "react/prop-types": "off", // turn off props validation
    },
  },
];
