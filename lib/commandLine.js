#!/usr/bin/env node
"use strict";

var _validateStats = require("./controllers/validateStats.js");

var _util = require("./util/util.js");

var _controllers = require("./controllers.js");

var _stats = require("./controllers/stats.js");

const [,, ...args] = process.argv;
const inputPath = args[0];
const validate = args.filter(arg => arg === '--validate');
if (validate.length > 0) _util.option.validate = true;
const inputStats = args.filter(arg => arg === '--stats').length;

const cli = (stats_, option) => {
  (0, _controllers.mdLinks)(inputPath, option).then(resultMdLinks => {
    if (stats_ && option.validate) {
      Promise.all(resultMdLinks).then(responses => {
        const dataAllLinks = responses.map(response => {
          const linksBroken = response.filter(dataLink => !(dataLink.statusValue.toString() >= 200 && dataLink.statusValue.toString() < 400) && dataLink.href !== undefined);
          return { ...(0, _stats.stats)(response),
            broken: linksBroken.length
          };
        });
        console.log(dataAllLinks);
      });
      console.log('funcion validate y stats');
    } else if (stats_) {
      const saveDataFileMds = resultMdLinks.map(resultMdLinks => (0, _stats.stats)(resultMdLinks));
      console.log(saveDataFileMds);
    } else {
      console.log(resultMdLinks);
    }
  }).catch(err => {
    console.log(err);
  });
};

cli(inputStats, _util.option);