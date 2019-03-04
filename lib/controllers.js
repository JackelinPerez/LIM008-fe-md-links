"use strict";

var _getAllMd = require("./controllers/getAllMd.js");

let statsOrValidate = [];
const dir_ = process.argv[2];
statsOrValidate[0] = process.argv[4];
statsOrValidate[1] = process.argv[5];

const mdLinks = (dir, statsOrValidate) => {
  return new Promise((resolve, reject) => {
    try {
      return resolve((0, _getAllMd.getAllFilesMd)(dir, '.md', []));
    } catch (err) {
      reject(err);
    }
  });
};

mdLinks(dir_, statsOrValidate).then(resolve => {
  console.log(resolve);
}).catch(err => {
  console.log(err);
});