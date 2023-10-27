// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        'no-extra-parens': [
            'error',
            'all',
            {
                ignoreJSX: 'all'
            }
        ],
        'eol-last': [
            'error'
        ],
        '@typescript-eslint/ban-ts-comment': [
            'off'
        ],
        '@typescript-eslint/no-explicit-any': [
            'off'
        ],
        indent: [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'never'
        ],
        'no-trailing-spaces': [
            'error'
        ],
    }
}
