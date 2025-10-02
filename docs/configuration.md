# Configuration

## Installation

Install the plugin and its peer dependencies:

```bash
npm install --save-dev eslint-plugin-baseline eslint
```

## Basic Configuration

Add the plugin to your `.eslintrc.js` file:

```javascript
module.exports = {
  plugins: ['baseline'],
  rules: {
    'baseline/no-unstable-apis': 'error'
  }
};
```

## Recommended Configuration

Use the recommended configuration which includes the plugin and sets the rule to error:

```javascript
module.exports = {
  extends: ['eslint:recommended'],
  ...require('eslint-plugin-baseline').configs.recommended
};
```

## Rule Configuration

The `no-unstable-apis` rule supports the standard ESLint severity levels:

- `"off"` or `0` - Disable the rule
- `"warn"` or `1` - Show warnings
- `"error"` or `2` - Show errors (recommended)

```javascript
{
  rules: {
    'baseline/no-unstable-apis': 'warn'  // or 'error' or 'off'
  }
}
```

## Contributing

When contributing new API mappings, ensure they are added to the `API_FEATURE_MAP` in `lib/rules/no-unstable-apis.js` and the corresponding feature ID exists in the web-features data.

Test your changes by running:

```bash
npm test
```

## Troubleshooting

If you encounter issues with the plugin not recognizing certain APIs, check that:

1. The API is included in the `API_FEATURE_MAP`
2. The feature ID matches the one in web-features data
3. Your ESLint configuration is correct
