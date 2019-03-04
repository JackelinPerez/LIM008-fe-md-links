"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regTextHref = exports.reglinkIntoMd = exports.fs = exports.path = void 0;

const path = require('path');

exports.path = path;

const fs = require('fs');

exports.fs = fs;
const reglinkIntoMd = new RegExp(/[^!]\[(.*)\]\((.*)\)/g);
exports.reglinkIntoMd = reglinkIntoMd;
const regTextHref = new RegExp(/[^!]\[(.*)\]\((.*)\)/);
exports.regTextHref = regTextHref;