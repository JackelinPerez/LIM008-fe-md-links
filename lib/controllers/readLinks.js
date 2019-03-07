"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readLinks = void 0;

const fetch = require('node-fetch');

const readLinks = url => {
  return fetch(url).catch(err => null);
};

exports.readLinks = readLinks;