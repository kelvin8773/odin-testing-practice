module.exports = {
    "env": {
        "es6": true,
        "jest/globals": true,
    },
    "plugins": ["jest"],
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        'no-shadow': 0,
        'no-param-reassign': 0,
        'eol-last': 0,
        "no-use-before-define": [1, "nofunc"],
        "import/no-unresolved": "off",
        "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    }
};