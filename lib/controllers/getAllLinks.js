"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllLinksFiles = void 0;

var _util = require("../util/util.js");

const getAllLinksFiles = dirFilesMds => {
  const arrayDataLinks = [];

  const readFileMd = _util.fs.readFileSync(dirFilesMds).toString();

  let arrayMatchLinks = readFileMd.match(_util.reglinkIntoMd);

  if (arrayMatchLinks !== null) {
    arrayMatchLinks.forEach(link => {
      const saveLinks = {
        file: '',
        href: '',
        text: ''
      };
      const dataLink = link.match(_util.regTextHref);
      saveLinks.file = dirFilesMds;
      saveLinks.text = dataLink[1];
      saveLinks.href = dataLink[2];
      arrayDataLinks.push(saveLinks);
    });
  }

  return arrayDataLinks;
};

exports.getAllLinksFiles = getAllLinksFiles;