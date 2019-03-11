"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateStats = void 0;

const validateStats = (status, statsOrValidate) => {
  switch (status) {
    case '--validate':
      statsOrValidate.validate = true;
      break;

    case '--stats':
      statsOrValidate.stats = true;
      break;

    default:
      break;
  }

  return statsOrValidate;
};

exports.validateStats = validateStats;