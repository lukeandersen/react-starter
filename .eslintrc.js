module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    'rules': {
        'comma-dangle': 0,
        'indent': [0, 4],
        'react/jsx-indent': [2, 0],
        'max-len': [1, 100, 4, {
            'ignorePattern': '\\s*<' // Ignore length in JSX with HTML content
        }],
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'react/jsx-filename-extension': 0,
        'no-console': 0,
        'react/no-string-refs': 1,
        'no-unused-vars': [2, { 'varsIgnorePattern': '[iI]gnored' }]
    }
};
