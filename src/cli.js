import {mdLinks} from './mdLinks.js';
import {statsOrValidate} from './controllers/stats.js';

export const cli = (inputPath, option) => {
  return mdLinks(inputPath, option)
    .then((resultMdLinks) => {
      return (option.stats) ? statsOrValidate(resultMdLinks, option.validate) : resultMdLinks;
    })
    .catch((err) => {
      return err;
    });
};

export const statusOption = (args) => {
  return [...args].reduce((obj, key) => {
    if (key === '--stats') obj.stats = true;
    else obj.validate = true;
    return obj;
  }, {stats: false, validate: false});
};

export const help = (existHelp) => {
  return !existHelp ? 'OK' : ` \n Algun campo es incorrecto, por favor introduzca campos validos
    \n Ejemplo: mdLinks [path] --validate --stats
    \n          mdLinks [path] --stats
    \n          mdLinks [path] --validate`;
};

export const validateInputUser = (args) => {
  const validateHelp = args.filter((ele) => (args.length >= 0) && (ele !== '--stats' && ele !== '--validate'));
  return help(validateHelp.length);
};