"use strict";

var _getAllMd = require("./controllers/getAllMd");

let statsOrValidate = [];
const dir = process.argv[2];
const exten = process.argv[3];
statsOrValidate[0] = process.argv[4];
statsOrValidate[1] = process.argv[5];

const mdLinks = (dir, exten, statsOrValidate) => {
  let contAllFile = [];
  const resultMds = (0, _getAllMd.getAllMds)(dir, exten, contAllFile, 0, 0);
  console.log(resultMds);
  return 1;
};

mdLinks(dir, exten, statsOrValidate);