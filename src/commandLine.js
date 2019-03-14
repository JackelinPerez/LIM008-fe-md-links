#!/usr/bin/env node
import {option} from './util/util.js';
import {mdLinks} from './controllers.js';
import {stats} from './controllers/stats.js';
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
        return Promise.all(resultMdLinks).then(responses => {
          const dataAllLinks = responses.map((response) => {
            const linksBroken = response.filter((dataLink) => (!(dataLink.status >= 200 && dataLink.status < 400)));
            if (response.length > 0) return {...stats(response), broken: linksBroken.length};
          });
          return dataAllLinks;
        });
      } else if (inputStats) {
        const saveDataFileMds = resultMdLinks.map(resultMdLinks => stats(resultMdLinks));
        return saveDataFileMds;
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