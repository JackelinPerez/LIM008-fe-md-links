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

const getAllFilesMd = (absolutePath, mdPaths) => {
  try {
    if (_util.fs.statSync(absolutePath).isDirectory()) {
      let childPaths = _util.fs.readdirSync(absolutePath);

      childPaths.forEach(childPath => {
        let absoluteChildPath = _util.path.join(absolutePath, childPath);

        getAllFilesMd(absoluteChildPath, mdPaths);
      });
    } else if (_util.path.extname(absolutePath).toLowerCase() === '.md') mdPaths.push(absolutePath);

    return mdPaths;
  } catch (err) {
    throw err.message;
  }
};

exports.getAllFilesMd = getAllFilesMd;