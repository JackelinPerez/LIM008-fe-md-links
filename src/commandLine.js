#!/usr/bin/env node
import {validateStats} from './controllers/validateStats.js';
import {statsOrValidate} from './util/util.js';
import {mdLinks} from './controllers.js';
const [,, ...args] = process.argv;

const inputPath = args[0];
let statsValidate = statsOrValidate;
statsValidate = validateStats(args[1], statsValidate);
statsValidate = validateStats(args[2], statsValidate);

mdLinks(inputPath, statsValidate)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.log(err);
  });