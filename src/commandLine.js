import {validateStats} from './controllers/validateStats.js';
import {statsOrValidate} from './util/util.js';

const [,, ...args] = process.argv;

export const inputPath = args[0];
export let statsValidate = statsOrValidate;
statsValidate = validateStats(args[1], statsValidate);
statsValidate = validateStats(args[2], statsValidate);
