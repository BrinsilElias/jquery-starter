import js from '@eslint/js';
import globals from 'globals';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.jquery } } },
  js.configs.recommended,
  { ignores: ['dist/'] }
];
