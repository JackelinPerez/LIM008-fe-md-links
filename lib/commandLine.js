#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _util = require("./util/util.js");

var _controllers = require("./controllers.js");

var _stats = require("./controllers/stats.js");

var _validateStats = require("./controllers/validateStats.js");

const [,, ...args] = process.argv;
let inputUser = {
  validate: false,
  stats: false
};
const inputPathUser = args[0];
inputUser = (0, _validateStats.validateStats)(args[1], inputUser);
inputUser = (0, _validateStats.validateStats)(args[2], inputUser);
_util.option.validate = inputUser.validate;

const cli = (inputPath, inputStats, option) => {
  return (0, _controllers.mdLinks)(inputPath, option).then(resultMdLinks => {
    if (inputStats && option.validate) {
      return (0, _stats.statsValidateAllFiles)(resultMdLinks);
    } else if (inputStats) {
      return (0, _stats.statsAllFiles)(resultMdLinks);
    } else {
      return resultMdLinks;
    }
  }).catch(err => {
    return err;
  });
};

exports.cli = cli;
cli(inputPathUser, inputUser.stats, _util.option).then(outMdlinks => console.log(outMdlinks));