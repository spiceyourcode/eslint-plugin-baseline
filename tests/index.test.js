"use strict";

const assert = require("assert");
const plugin = require("../lib");

describe("eslint-plugin-baseline", () => {
  it("should export rules", () => {
    assert(plugin.rules, "Plugin should export rules");
    assert(plugin.rules["no-unstable-apis"], "Plugin should export no-unstable-apis rule");
  });

  it("should export configs", () => {
    assert(plugin.configs, "Plugin should export configs");
    assert(plugin.configs.recommended, "Plugin should export recommended config");
    assert(plugin.configs.recommended.plugins.includes("baseline"), "Recommended config should include baseline plugin");
    assert(plugin.configs.recommended.rules["baseline/no-unstable-apis"] === "error", "Recommended config should set no-unstable-apis to error");
  });
});
