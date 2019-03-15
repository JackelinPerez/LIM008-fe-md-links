"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _getAllMd = require("./controllers/getAllMd.js");

var _getAllLinks = require("./controllers/getAllLinks.js");

var _validate = require("./controllers/validate.js");

const mdLinks = (dir, option) => {
  return new Promise((resolve, reject) => {
    try {
      const files = (0, _getAllMd.getAllFilesMd)((0, _getAllMd.dirRelativeToAbsolute)(dir), []);
      return option.validate ? (0, _validate.validates)(files).then(links => resolve(links)) : resolve((0, _getAllLinks.getAllLinksFiles)(files));
    } catch (err) {
      reject(err);
    }
  });
};

exports.mdLinks = mdLinks;