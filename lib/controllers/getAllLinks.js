"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllLinksFile = void 0;

var _util = require("../util/util.js");

const getAllLinksFile = fileMdPath => {
  let dataLinks = [];

  const readFileMd = _util.fs.readFileSync(fileMdPath, 'utf8').toString();

  let linksMatch = readFileMd.match(_util.reglinkIntoMd);

  if (linksMatch !== null) {
    dataLinks = linksMatch.reduce((dataLink, link) => {
      const textHref = link.match(_util.regTextHref);
      dataLink.push({
        file: fileMdPath,
        text: textHref[1],
        href: textHref[2]
      });
      return dataLink;
    }, []);
  } else dataLinks.push({
    file: fileMdPath,
    text: '',
    href: ''
  });

  return dataLinks;
};

exports.getAllLinksFile = getAllLinksFile;