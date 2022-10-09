module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // #vue/max-attributes-per-line Проверка на максимальное количество атрибутов в строке:
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 3
      }
    }],
    // #comma-dangle Проверка  запятых:SS
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    // #vue/html-indent Проверка последовательного отступа в шаблоне <template>:
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: []
      }
    ],
    'space-before-function-paren': [
      'error',
      'always'
    ]
  },
  // убирает ошибку в тестовых файлах, не неопределенной переменной и наверно что-то еще
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.test.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
