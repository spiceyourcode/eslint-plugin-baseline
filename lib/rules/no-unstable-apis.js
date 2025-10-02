"use strict";

const baselineChecker = require("../utils/baseline-checker");

// API mappings to Baseline feature IDs
const API_FEATURE_MAP = {
  // Array methods
  "toSorted": "array-by-copy",
  "toReversed": "array-by-copy",
  "toSpliced": "array-splice",
  "with": "array-with",
  "at": "array-at",

  // Object methods
  "groupBy": "array-group",

  // Promise methods
  "withResolvers": "promise-withresolvers",

  // String methods
  "isWellFormed": "string-wellformed",
  "toWellFormed": "string-wellformed",
};

// Global functions
const GLOBAL_APIS = {
  "structuredClone": "structured-clone",
};

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow use of non-universally supported web APIs",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
    messages: {
      unstableApi: "Use of '{{api}}' is not universally supported. Baseline status: {{status}} (since {{year}})",
    },
  },

  create(context) {
    return {
      MemberExpression(node) {
        // Check for method calls like array.toSorted()
        if (node.property.type === "Identifier" && API_FEATURE_MAP[node.property.name]) {
          const featureId = API_FEATURE_MAP[node.property.name];
          const status = baselineChecker.getFeatureStatus(featureId);
          if (!status.isUniversallySupported) {
      context.report({
        node,
        messageId: "unstableApi",
        data: {
          api: node.property.name,
          status: status.baseline || "unknown",
          year: status.year || "N/A",
        },
      });
          }
        }
      },

      CallExpression(node) {
        // Check for global function calls like structuredClone()
        if (node.callee.type === "Identifier" && GLOBAL_APIS[node.callee.name]) {
          const featureId = GLOBAL_APIS[node.callee.name];
          const status = baselineChecker.getFeatureStatus(featureId);
          if (!status.isUniversallySupported) {
            context.report({
              node,
              messageId: "unstableApi",
              data: {
                api: node.callee.name,
                status: status.baseline || "unknown",
                year: status.year || "N/A",
              },
            });
          }
        }
      },
    };
  },
};
