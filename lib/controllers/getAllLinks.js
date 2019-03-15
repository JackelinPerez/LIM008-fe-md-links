"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllLinksFiles = exports.getAllLinksFile = void 0;

var _util = require("../util/util.js");

const getAllLinksFile = fileMdPath => {
  let dataLinks = [];
  let linksMatch;

  const readFileMd = _util.fs.readFileSync(fileMdPath, 'utf8').toString();

  while ((linksMatch = _util.reglinkMd.exec(readFileMd)) !== null) {
    dataLinks.push({
      file: fileMdPath,
      text: linksMatch[1].substr(0, 50),
      href: linksMatch[2]
    });
  }

  return dataLinks;
};

exports.getAllLinksFile = getAllLinksFile;

const getAllLinksFiles = files => {
  return files.map(file => getAllLinksFile(file));
};

exports.getAllLinksFiles = getAllLinksFiles;