"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _getAllMd = require("./controllers/getAllMd.js");

var _getAllLinks = require("./controllers/getAllLinks.js");

var _validate = require("./controllers/validate.js");

var _stats = require("./controllers/stats.js");

const mdLinks = (dir, statsOrValidate) => {
  return new Promise((resolve, reject) => {
    try {
      let saveDataFileMds = [];
      const files = (0, _getAllMd.getAllFilesMd)((0, _getAllMd.dirRelativeToAbsolute)(dir), []);

      if (statsOrValidate.stats && statsOrValidate.validate) {
        const promises = files.map(file => (0, _validate.validate)((0, _getAllLinks.getAllLinksFile)(file)));
        Promise.all(promises).then(responses => {
          const dataAllLinks = responses.map(response => {
            const linksBroken = response.filter(dataLink => !(dataLink.statusValue.toString() >= 200 && dataLink.statusValue.toString() < 400));
            return { ...(0, _stats.stats)(response),
              broken: linksBroken.length
            };
          });
          resolve(dataAllLinks);
        });
      } else if (statsOrValidate.stats && !statsOrValidate.validate) {
        saveDataFileMds = files.map(file => (0, _stats.stats)((0, _getAllLinks.getAllLinksFile)(file)));
        resolve(saveDataFileMds);
      } else if (!statsOrValidate.stats && statsOrValidate.validate) {
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

exports.mdLinks = mdLinks;