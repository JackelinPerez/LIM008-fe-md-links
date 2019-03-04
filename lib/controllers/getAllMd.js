"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllFilesMd = exports.dirRelativeToAbsolute = void 0;

var _util = require("../util/util.js");

const dirRelativeToAbsolute = inputPath => {
  const pathIsAbsolute = _util.path.isAbsolute(inputPath);

  return pathIsAbsolute !== true ? _util.path.resolve(__dirname, inputPath) : inputPath;
};

exports.dirRelativeToAbsolute = dirRelativeToAbsolute;

const getAllFilesMd = (dirAbsOrRel, extenFile, savefilesMD) => {
  try {
    if (_util.fs.statSync(dirAbsOrRel).isDirectory()) {
      let arrayChildDir = _util.fs.readdirSync(dirAbsOrRel);

      arrayChildDir.forEach(childDir => {
        let dirAbsOrRelChild = _util.path.join(dirAbsOrRel, childDir);

        getAllFilesMd(dirAbsOrRelChild, extenFile, savefilesMD);
      });
    } else if (_util.path.extname(dirAbsOrRel) === extenFile) savefilesMD.push(dirAbsOrRel);

    return savefilesMD;
  } catch (err) {
    console.log(err.message);
  }
};

exports.getAllFilesMd = getAllFilesMd;