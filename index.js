module.exports = {
  "plugins": [
    "cycle",
    "no-class"
  ],

  "ecmaFeatures": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "unicodeCodePointEscapes": true,
    "restParams": true,
    "destructuring": true,
    "modules": true,
    "defaultParams": true,
    "classes": false,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralShorthandProperties": true,
    "experimentalObjectRestSpread": true,
    "generators": true,
    "forOf": true,
    "blockBindings": true
  },
  "rules": {
    "no-cond-assign": [2, "always"],
    "no-ex-assign": 2,
    "curly": 2,
    "max-len": [1, 80, 4],
    "max-depth": [2, 5],
    "complexity": [1, 8],
    "indent": [2, 2],
    "no-trailing-spaces": [2, {"skipBlankLines": false}],
    "one-var": [2, "never"],
    "func-names": 2,
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true
    }],
    "max-nested-callbacks": [2, 2],
    "new-cap": [0],
    "new-parens": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [1, {"max": 1}],
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "arrow-spacing": [2, {"before": true, "after": true}],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after"],
    "padded-blocks": [2, "never"],
    "quote-props": [2, "as-needed"],
    "keyword-spacing": 2,
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "object-curly-spacing": [2, "never"],
    "array-bracket-spacing": [2, "never"],
    "computed-property-spacing": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": [2, {"int32Hint": true}],
    "space-return-throw-case": 2,
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "no-delete-var": 2,
    "no-underscore-dangle": 0,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-undefined": 2,
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
    "no-use-before-define": 2,
    "yoda": [2, "never"],
    "consistent-return": 2,
    "spaced-line-comment": 0,
    "quotes": [2, "backtick"],
    "strict": [2, "never"],
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-labels": 2,
    "no-eval": 2,
    "no-fallthrough": 2,
    "default-case": 2,
    "no-iterator": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-new": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 2,
    "no-with": 2,
    "vars-on-top": 0,
    "wrap-iife": [2, "outside"],
    "valid-typeof": 2,
    "max-statements": [1, 30],
    "max-params": [1, 3],
    "no-var": 2,
    "semi": [2, "never"],
    "no-unexpected-multiline": 2,
    "dot-location": [2, "property"],
    "no-unreachable": 2,
    "no-negated-in-lhs": 2,
    "no-irregular-whitespace": 2,
    "no-invalid-regexp": 2,
    "no-func-assign": 2,
    "no-extra-semi": 2,
    "no-extra-parens": 2,
    "no-extra-boolean-cast": 2,
    "no-empty": 2,
    "no-duplicate-case": 2,
    "no-dupe-keys": 2,
    "no-dupe-args": 2,
    "no-constant-condition": 2,
    "no-cond-assign": 2,
    "comma-dangle": [2, "always-multiline"],
    "comma-style": [2, "last"],
    "eol-last": 2,
    "no-lonely-if": 2,

    // Cycle.js specific rules
    "cycle/brace-style": 2,

    // Third-party rules
    "no-class/no-class": 2
  }
};
