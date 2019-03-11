"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllLinksFile = void 0;

var _util = require("../util/util.js");

const getAllLinksFile = fileMdPath => {
  let dataLinks = [];
  let linksMatch;

  const readFileMd = _util.fs.readFileSync(fileMdPath, 'utf8').toString();

  if (_util.reglinkMd.test(readFileMd)) {
    while ((linksMatch = _util.reglinkMd.exec(readFileMd)) !== null) {
      dataLinks.push({
        file: fileMdPath,
        text: linksMatch[1],
        href: linksMatch[2]
      });
    }
  } else dataLinks.push({
    file: fileMdPath,
    text: '',
    href: ''
  });

  return dataLinks;
};

exports.getAllLinksFile = getAllLinksFile;