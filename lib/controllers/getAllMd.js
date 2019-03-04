"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllFilesMd = void 0;

const getAllFilesMd = (dirAbsOrRel, extenFile, savefilesMD) => {
  const paths = require('path');

  const fs = require('fs');

  try {
    if (fs.statSync(dirAbsOrRel).isDirectory()) {
      let arrayChildDir = fs.readdirSync(dirAbsOrRel);
      arrayChildDir.forEach(childDir => {
        let dirAbsOrRelChild = paths.join(dirAbsOrRel, childDir);
        getAllFilesMd(dirAbsOrRelChild, extenFile, savefilesMD);
      });
    } else if (paths.extname(dirAbsOrRel) === extenFile) savefilesMD.push(dirAbsOrRel);

    return savefilesMD;
  } catch (err) {
    console.log(err.message);
  }
};

exports.getAllFilesMd = getAllFilesMd;