#!/usr/bin/env node
"use strict";

var _validateStats = require("./controllers/validateStats.js");

var _util = require("./util/util.js");

var _controllers = require("./controllers.js");

const [,, ...args] = process.argv;
const inputPath = args[0];
let statsValidate = _util.statsOrValidate;
statsValidate = (0, _validateStats.validateStats)(args[1], statsValidate);
statsValidate = (0, _validateStats.validateStats)(args[2], statsValidate);
(0, _controllers.mdLinks)(inputPath, statsValidate).then(resolve => {
  console.log(resolve);
}).catch(err => {
  console.log(err);
});