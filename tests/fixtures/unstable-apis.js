// Unstable APIs - should fail linting
const arr = [1, 2, 3];
arr.toSorted();
arr.toReversed();
arr.toSpliced(1, 1);
arr.with(0, 10);

const obj = { a: 1 };
Object.groupBy([obj], item => item.a);
Object.hasOwn(obj, 'a');

const promise = Promise.withResolvers();

const str = "test";
str.isWellFormed();
str.toWellFormed();

structuredClone(obj);
