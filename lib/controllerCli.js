#!/usr/bin/env node
"use strict";

var _cli = require("./cli.js");

const [,,, ...args] = process.argv;
const path = process.argv[2];

const controllerCli = (path, args) => {
  const validateInput = (0, _cli.validateInputUser)(args);

  if (validateInput === 'OK') {
    (0, _cli.cli)(path, (0, _cli.statusOption)(args)).then(outMdlinks => console.log(outMdlinks));
  } else console.log(validateInput);
};

controllerCli(path, args);