"use strict";

var _getAllMd = require("./controllers/getAllMd.js");

var _getAllLinks = require("./controllers/getAllLinks.js");

var _validateStats = require("./controllers/validateStats.js");

var _readLinks = require("./controllers/readLinks.js");

const inputPath = process.argv[2];
let statsOrValidate = {
  validate: false,
  states: false
};
statsOrValidate = (0, _validateStats.validateStats)(process.argv[3], statsOrValidate);
statsOrValidate = (0, _validateStats.validateStats)(process.argv[4], statsOrValidate);

const mdLinks = (dir, statsOrValidate) => {
  return new Promise((resolve, reject) => {
    try {
      const saveDataFileMds = [];
      const arrayDir = (0, _getAllMd.getAllFilesMd)((0, _getAllMd.dirRelativeToAbsolute)(dir), '.md', []); // console.log(arrayDir);

      console.log(statsOrValidate);

      if (statsOrValidate.states === true && statsOrValidate.validate === true) {} else if (statsOrValidate.states === true && statsOrValidate.validate === false) {} else if (statsOrValidate.states === false && statsOrValidate.validate === true) {
        const files = arrayDir;
        const promises = files.map(file => (0, _readLinks.getResponse)(file));
        Promise.all(promises).then(responses => resolve(responses));
      } else {
        arrayDir.forEach(dirMd => {
          saveDataFileMds.push((0, _getAllLinks.getAllLinksFiles)(dirMd));
        });
        return resolve(saveDataFileMds);
      }
    } catch (err) {
      reject(err);
    }
  });
};

mdLinks(inputPath, statsOrValidate).then(resolve => {
  console.log(resolve);
}).catch(err => {
  console.log(err);
});