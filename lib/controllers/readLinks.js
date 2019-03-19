"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readLinks = void 0;

const fetch = require('node-fetch');

const readLinks = url => {
  return fetch(url).catch(err => {
    // return {status: err.message};
    return {
      status: 'No existe Dominio'
    };
  });
};

exports.readLinks = readLinks;