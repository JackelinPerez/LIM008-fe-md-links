"use strict";

var _getAllMd = require("./controllers/getAllMd.js");

var _getAllLinks = require("./controllers/getAllLinks.js");

let statsOrValidate = [];
const dir_ = process.argv[2];
statsOrValidate[0] = process.argv[4];
statsOrValidate[1] = process.argv[5];

const mdLinks = (dir, statsOrValidate) => {
  return new Promise((resolve, reject) => {
    try {
      const saveDataFileMds = [];
      const arrayDir = (0, _getAllMd.getAllFilesMd)((0, _getAllMd.dirRelativeToAbsolute)(dir), '.md', []);
      console.log(arrayDir);
      arrayDir.forEach(element => {
        saveDataFileMds.push((0, _getAllLinks.getAllLinksFiles)(element));
      });
      return resolve(saveDataFileMds);
    } catch (err) {
      reject(err);
    }
  });
};

mdLinks(dir_, statsOrValidate).then(resolve => {//console.log(resolve);
}).catch(err => {
  console.log(err);
});