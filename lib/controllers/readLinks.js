"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readLinks = void 0;

const fetch = require('node-fetch');

const readLinks = (urlHttp, callback) => {
  fetch(urlHttp).then(response => {
    callback(response);
  }).catch(error => {
    callback(error.message);
  });
};

exports.readLinks = readLinks;