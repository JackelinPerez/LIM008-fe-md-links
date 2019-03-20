"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInputUser = exports.help = exports.statusOption = exports.cli = void 0;

var _mdLinks = require("./mdLinks.js");

var _stats = require("./controllers/stats.js");

const cli = (inputPath, option) => {
  return (0, _mdLinks.mdLinks)(inputPath, option).then(resultMdLinks => {
    return option.stats ? (0, _stats.statsOrValidate)(resultMdLinks, option.validate) : resultMdLinks;
  }).catch(err => {
    return err;
  });
};

exports.cli = cli;

const statusOption = args => {
  return [...args].reduce((obj, key) => {
    if (key === '--stats') obj.stats = true;else obj.validate = true;
    return obj;
  }, {
    stats: false,
    validate: false
  });
};

exports.statusOption = statusOption;

const help = existHelp => {
  return !existHelp ? 'OK' : ` \n Algun campo es incorrecto, por favor introduzca campos validos
    \n Ejemplo: mdLinks [path] --validate --stats
    \n          mdLinks [path] --stats
    \n          mdLinks [path] --validate`;
};

exports.help = help;

const validateInputUser = args => {
  const validateHelp = args.filter(ele => args.length >= 0 && ele !== '--stats' && ele !== '--validate');
  return help(validateHelp.length);
};

exports.validateInputUser = validateInputUser;