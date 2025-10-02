// Example code demonstrating usage of stable and unstable APIs

// Stable API usage - should not trigger lint errors
const stableArray = [1, 2, 3];
stableArray.sort();

const stableObject = { a: 1, b: 2 };
Object.keys(stableObject);

const jsonString = '{"key":"value"}';
JSON.parse(jsonString);

// Unstable API usage - should trigger lint errors
const unstableArray = [1, 2, 3];
unstableArray.toSorted();
unstableArray.toReversed();

const unstableObject = { a: 1 };
Object.groupBy([unstableObject], item => item.a);

structuredClone(unstableObject);

const str = "test";
str.isWellFormed();
