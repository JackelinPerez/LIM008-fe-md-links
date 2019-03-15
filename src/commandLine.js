#!/usr/bin/env node
import {option} from './util/util.js';
import {mdLinks} from './controllers.js';
import {statsAllFiles, statsValidateAllFiles} from './controllers/stats.js';
import {validateStats} from './controllers/validateStats.js';

const [,, ...args] = process.argv;
let inputUser = {
  validate: false,
  stats: false,
};

const inputPathUser = args[0];
inputUser = validateStats(args[1], inputUser);
inputUser = validateStats(args[2], inputUser);
option.validate = inputUser.validate;

export const cli = (inputPath, inputStats, option) => {
  return mdLinks(inputPath, option)
    .then((resultMdLinks) => {
      if (inputStats && option.validate) {
        return statsValidateAllFiles(resultMdLinks);
      } else if (inputStats) {
        return statsAllFiles(resultMdLinks);
      } else {
        return resultMdLinks;
      }
    })
    .catch((err) => {
      return err;
    });
};

cli(inputPathUser, inputUser.stats, option)
  .then((outMdlinks) => console.log(outMdlinks)
  );