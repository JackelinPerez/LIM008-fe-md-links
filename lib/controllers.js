"use strict";

var _getAllMd = require("./controllers/getAllMd.js");

var _getAllLinks = require("./controllers/getAllLinks.js");

var _validateStats = require("./controllers/validateStats.js");

var _validate = require("./controllers/validate.js");

var _stats = require("./controllers/stats.js");

var _util = require("./util/util.js");

const inputPath = process.argv[2];
let statsValidate = _util.statsOrValidate;
statsValidate = (0, _validateStats.validateStats)(process.argv[3], statsValidate);
statsValidate = (0, _validateStats.validateStats)(process.argv[4], statsValidate);

const mdLinks = (dir, statsOrValidate) => {
  return new Promise((resolve, reject) => {
    try {
      let saveDataFileMds = [];
      const files = (0, _getAllMd.getAllFilesMd)((0, _getAllMd.dirRelativeToAbsolute)(dir), '.md', []);

      if (statsOrValidate.states && statsOrValidate.validate) {
        const promises = files.map(file => (0, _validate.validate)((0, _getAllLinks.getAllLinksFile)(file)));
        Promise.all(promises).then(responses => {
          const dataAllLinks = responses.map(response => {
            const LinksBroken = response.filter(dataLink => dataLink.statusValue !== '200');
            return { ...(0, _stats.stats)(response),
              Broken: LinksBroken.length
            };
          });
          resolve(dataAllLinks);
        });
      } else if (statsOrValidate.states && !statsOrValidate.validate) {
        saveDataFileMds = files.map(file => (0, _stats.stats)((0, _getAllLinks.getAllLinksFile)(file)));
        resolve(saveDataFileMds);
      } else if (!statsOrValidate.states && statsOrValidate.validate) {
        const promises = files.map(file => (0, _validate.validate)((0, _getAllLinks.getAllLinksFile)(file)));
        Promise.all(promises).then(responses => resolve(responses));
      } else {
        saveDataFileMds = files.map(file => (0, _getAllLinks.getAllLinksFile)(file));
        resolve(saveDataFileMds);
      }
    } catch (err) {
      reject(err);
    }
  });
};

mdLinks(inputPath, _util.statsOrValidate).then(resolve => {
  console.log(resolve);
}).catch(err => {
  console.log(err);
});