module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    extends: [
        'eslint:recommended',
        'plugin:next/recommended',
    ],
    plugins: [
        'mongodb',
        'mongoose',
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
