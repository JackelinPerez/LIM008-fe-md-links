"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsOrValidate = exports.statsValidateAllFiles = exports.statsAllFiles = exports.stats = exports.groupObjectsPath = void 0;

var _util = require("../util/util.js");

const groupObjectsPath = allDataLinks => {
  const pathsMd = [...allDataLinks].map(obj => obj.file);
  return (0, _util.repeatedAccount)(pathsMd).reduce((acumm, pathMd) => {
    let pathsMdLinks = [...allDataLinks].filter(dataLink => dataLink.file === pathMd);
    acumm.push(pathsMdLinks);
    return acumm;
  }, []);
};

exports.groupObjectsPath = groupObjectsPath;

const stats = dataLinks => {
  const links = dataLinks.map(dataLink => dataLink.href);
  const saveUnike = (0, _util.repeatedAccount)(links);
  return {
    file: dataLinks[0].file,
    total: links.length,
    unique: saveUnike.length
  };
};

exports.stats = stats;

const statsAllFiles = arraysAllDataLinks => {
  return groupObjectsPath(arraysAllDataLinks).map(dataLinks => stats(dataLinks));
};

exports.statsAllFiles = statsAllFiles;

const statsValidateAllFiles = allDataLinks => {
  return groupObjectsPath(allDataLinks).map(ele => {
    const linksBroken = ele.filter(dataLink => !(dataLink.status >= 200 && dataLink.status < 400));
    return ele.length > 0 ? { ...stats(ele),
      broken: linksBroken.length
    } : {};
  });
};

exports.statsValidateAllFiles = statsValidateAllFiles;

const statsOrValidate = (dataLinks, validate) => {
  return validate ? statsValidateAllFiles(dataLinks) : statsAllFiles(dataLinks);
};

exports.statsOrValidate = statsOrValidate;