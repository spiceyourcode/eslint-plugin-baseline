const { ESLint } = require('eslint');
const baselinePlugin = require('../lib/index.js');

console.log('Starting ESLint Plugin Baseline Demo...');

// Create an ESLint instance with the baseline plugin
const eslint = new ESLint({
  plugins: {
    baseline: baselinePlugin
  },
  overrideConfig: {
    plugins: ['baseline'],
    rules: {
      'baseline/no-unstable-apis': 'error'
    },
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
    }
  }
});

// Lint the example code
async function runDemo() {
  try {
    const results = await eslint.lintFiles(['example-code.js']);

    console.log('=== ESLint Plugin Baseline Demo ===\n');

    for (const result of results) {
      console.log(`File: ${result.filePath}`);
      console.log(`Error count: ${result.errorCount}`);

      if (result.messages.length > 0) {
        console.log('\nLinting errors:');
        result.messages.forEach((message, index) => {
          console.log(`${index + 1}. ${message.message}`);
          console.log(`   Line ${message.line}, Column ${message.column}`);
          console.log(`   Rule: ${message.ruleId}`);
          console.log('');
        });
      } else {
        console.log('✅ No linting errors found!');
      }
      console.log('---\n');
    }
  } catch (error) {
    console.error('Error running demo:', error.message);
  }
}

runDemo();
