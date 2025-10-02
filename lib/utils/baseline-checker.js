"use strict";

const webFeatures = require("web-features");

function getFeatureStatus(featureId) {
  const feature = webFeatures.features[featureId];
  if (!feature) {
    // Unknown feature, assume unstable
    return {
      isUniversallySupported: false,
      baseline: "unknown",
      year: "N/A",
    };
  }

  const status = feature.status;
  let isUniversallySupported = false;
  let baseline = "unknown";
  let year = "N/A";

  if (typeof status === "object" && status.baseline) {
    baseline = status.baseline;
    isUniversallySupported = baseline === "high";
    if (status.baseline_low_date) {
      year = new Date(status.baseline_low_date).getFullYear().toString();
    }
  }

  return {
    isUniversallySupported,
    baseline,
    year,
  };
}

module.exports = {
  getFeatureStatus,
};
