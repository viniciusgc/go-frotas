module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', 'js'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-undef': 'off',
    'import/prefer-default-export': 'off',
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    'no-unused-expressions': [
      'off',
      {
        extensions: ['.jsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': [0, { ignore: ['children'] }],
    'react/destructuring-assignment': 'off',
  },
  settings: {
    'import/core-modules': [],
  },
};
