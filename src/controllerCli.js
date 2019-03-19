#!/usr/bin/env node
import {cli, validateInputUser, statusOption} from './cli.js';

const [,,, ...args] = process.argv;
const path = process.argv[2];

const controllerCli = (path, args) => {
  const validateInput = validateInputUser(args);
  if (validateInput === 'OK') {
    cli(path, statusOption(args))
      .then((outMdlinks) => console.log(outMdlinks));
  } else console.log(validateInput);
};

controllerCli(path, args);

