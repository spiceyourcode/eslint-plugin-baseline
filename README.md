# eslint-plugin-baseline

An ESLint plugin that enforces Baseline web standards by blocking the use of non-universally supported web APIs in your JavaScript code.

## Installation

```bash
npm install --save-dev eslint-plugin-baseline
```

## Usage

Add the plugin to your `.eslintrc.js` file:

```javascript
module.exports = {
  plugins: ['baseline'],
  rules: {
    'baseline/no-unstable-apis': 'error'
  }
};
```

## Rules

### `no-unstable-apis`

This rule detects the use of JavaScript APIs that are not yet universally supported according to the Baseline web standards.

#### Examples of incorrect code:

```javascript
// These will trigger errors if not universally supported
Object.groupBy(arr, callback);
array.toSorted();
structuredClone(obj);
```

#### Examples of correct code:

```javascript
// These are universally supported
Array.prototype.sort.call(arr);
Object.keys(obj);
JSON.parse(jsonString);
```

## Configuration

The rule can be configured with three severity levels:

- `"off"` or `0` - Disable the rule
- `"warn"` or `1` - Show warnings
- `"error"` or `2` - Show errors (default)

## Supported APIs

The plugin checks for the following APIs and their Baseline status:

- Array methods: `toSorted`, `toReversed`, `toSpliced`, `with`
- Object methods: `groupBy`, `hasOwn`
- Promise methods: `withResolvers`
- String methods: `isWellFormed`, `toWellFormed`
- Other: `at()`, `structuredClone()`

## Contributing

Contributions are welcome! Please read the [contributing guidelines](docs/configuration.md) for details.

## License

MIT
