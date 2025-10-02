"use strict";

const rules = require("./rules");

module.exports = {
  rules,
  configs: {
    recommended: {
      plugins: ["baseline"],
      rules: {
        "baseline/no-unstable-apis": "error",
      },
    },
  },
};
