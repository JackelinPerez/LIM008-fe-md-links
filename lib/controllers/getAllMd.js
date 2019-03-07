"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllFilesMd = exports.dirRelativeToAbsolute = void 0;

var _util = require("../util/util.js");

const dirRelativeToAbsolute = inputPath => {
  const pathIsAbsolute = _util.path.isAbsolute(inputPath);

  return pathIsAbsolute !== true ? _util.path.resolve(inputPath) : inputPath;
};

exports.dirRelativeToAbsolute = dirRelativeToAbsolute;

const getAllFilesMd = (absolutePath, extenFile, mdPaths) => {
  try {
    if (_util.fs.statSync(absolutePath).isDirectory()) {
      let childPaths = _util.fs.readdirSync(absolutePath);

      childPaths.forEach(childPath => {
        let absoluteChildPath = _util.path.join(absolutePath, childPath);

        getAllFilesMd(absoluteChildPath, extenFile, mdPaths);
      });
    } else if (_util.path.extname(absolutePath) === extenFile) mdPaths.push(absolutePath);

    return mdPaths;
  } catch (err) {
    return console.log(err.message);
  }
};

exports.getAllFilesMd = getAllFilesMd;