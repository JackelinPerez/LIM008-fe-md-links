"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsValidate = exports.inputPath = void 0;

var _validateStats = require("./controllers/validateStats.js");

var _util = require("./util/util.js");

const [,, ...args] = process.argv;
const inputPath = args[0];
exports.inputPath = inputPath;
let statsValidate = _util.statsOrValidate;
exports.statsValidate = statsValidate;
exports.statsValidate = statsValidate = (0, _validateStats.validateStats)(args[1], statsValidate);
exports.statsValidate = statsValidate = (0, _validateStats.validateStats)(args[2], statsValidate);