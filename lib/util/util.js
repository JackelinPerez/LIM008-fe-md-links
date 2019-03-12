"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsOrValidate = exports.reglinkMd = exports.fs = exports.path = void 0;

const path = require('path');

exports.path = path;

const fs = require('fs');

exports.fs = fs;
const reglinkMd = /[^!]\[(.*)\]\((.*)\)/g;
exports.reglinkMd = reglinkMd;
const statsOrValidate = {
  validate: false,
  stats: false
};
exports.statsOrValidate = statsOrValidate;