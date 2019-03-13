#!/usr/bin/env node
import {option} from './util/util.js';
import {mdLinks} from './controllers.js';
import {stats} from './controllers/stats.js';

const [,, ...args] = process.argv;

const inputPath = args[0];
const validate = args.filter(arg => arg === '--validate');
if (validate.length > 0) option.validate = true;
const inputStats = args.filter(arg => arg === '--stats').length;

const cli = (stats_, option) => {
  mdLinks(inputPath, option)
    .then((resultMdLinks) => {
      if (stats_ && option.validate) {
        Promise.all(resultMdLinks).then(responses => {
          const dataAllLinks = responses.map((response) => {
            const linksBroken = response.filter((dataLink) => (!((dataLink.statusValue.toString() >= 200) 
            && (dataLink.statusValue.toString() < 400)) && dataLink.href !== undefined));
            return {...stats(response), broken: linksBroken.length};
          });
          console.log(dataAllLinks);
        });
        console.log('funcion validate y stats');
      } else if (stats_) {
        const saveDataFileMds = resultMdLinks.map(resultMdLinks => stats(resultMdLinks));
        console.log(saveDataFileMds);
      } else {
        console.log(resultMdLinks);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

cli(inputStats, option);