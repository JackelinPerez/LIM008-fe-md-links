"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatedAccount = exports.reglinkMd = exports.fs = exports.path = void 0;

const path = require('path');

exports.path = path;

const fs = require('fs');

exports.fs = fs;
const reglinkMd = /(?<!!)\[(.*?)\]\((.*?)\)/g;
exports.reglinkMd = reglinkMd;

const repeatedAccount = data => {
  const keysData = [...data].reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1;
    return obj;
  }, {});
  return Object.keys(keysData);
};

exports.repeatedAccount = repeatedAccount;