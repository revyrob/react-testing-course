# How project was built and what to add on


## This project was created using this command:
npm create vite@latest sundae-starter -- --template react

## Add Bootstrap
Add this line to src/main.jsx:
import "bootstrap/dist/css/bootstrap.min.css";

## Install future dependencies
npm install -D @testing-library/user-event msw
npm install axios

## Update port to 3000 and tests in the vite.config.js
To match the expectation of the sundae server, and avoid CORS errors, add this to the property / value to the defineConfig argument in vite.config.js:
  server: {
    port: 3000,
    // exit if port 3000 is in use (to avoid CORS errors; server expects port 3000)
    strict: true,
  },
    test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file created earlier
    setupFiles: "./src/setup.js",
    // you might want to disable the `css: true` line, since we don't have
    // tests that rely on CSS -- and parsing CSS is slow.
    // I'm leaving it in here because often people want to parse CSS in tests.
    css: true,
  },
  
## Add this to the package.json scripts array
"start": "vite",
"test": "vitest --watch"

## Create Test js file
Create setupTest.js file within the src file
Add this to it:
import "@testing-library/jest-dom";

## Update the eslint.config.js file to this; updates rules and plugins
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
