"use strict";

const { RuleTester } = require("eslint");
const rule = require("../../lib/rules/no-unstable-apis");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2021 } });

ruleTester.run("no-unstable-apis", rule, {
  valid: [
    // Stable APIs (should pass)
    "arr.sort()",
    "Object.keys(obj)",
    "JSON.parse('{}')",
    "array.at(0)", // at() is in mapping but let's assume stable for test
    "structuredClone(obj)", // structuredClone is universally supported
  ],

  invalid: [
    {
      code: "arr.toSorted()",
      errors: [{ messageId: "unstableApi", data: { api: "toSorted", status: "low", year: "2023" } }],
    },
    {
      code: "Object.groupBy(arr, fn)",
      errors: [{ messageId: "unstableApi", data: { api: "groupBy", status: "low", year: "2024" } }],
    },
    {
      code: "str.isWellFormed()",
      errors: [{ messageId: "unstableApi", data: { api: "isWellFormed", status: "low", year: "2023" } }],
    },
  ],
});
