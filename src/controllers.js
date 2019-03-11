#!/usr/bin/env node
import {getAllFilesMd, dirRelativeToAbsolute} from './controllers/getAllMd.js';
import {getAllLinksFile} from './controllers/getAllLinks.js';
import {validate} from './controllers/validate.js';
import {stats} from './controllers/stats.js';
import {inputPath, statsValidate} from './commandLine.js';

const mdLinks = (dir, statsOrValidate) => {
  return new Promise((resolve, reject) => {
    try {
      let saveDataFileMds = [];
      const files = getAllFilesMd(dirRelativeToAbsolute(dir), []);
	
      if (statsOrValidate.stats && statsOrValidate.validate) {
        const promises = files.map(file => validate(getAllLinksFile(file)));
        Promise.all(promises).then(responses => {
          const dataAllLinks = responses.map((response) => {
            const linksBroken = response.filter((dataLink) => dataLink.statusValue !== '200');
            return {...stats(response), broken: linksBroken.length};
          });
          resolve(dataAllLinks);
        });
      } else if (statsOrValidate.stats && !statsOrValidate.validate) {
        saveDataFileMds = files.map(file => stats(getAllLinksFile(file)));
        resolve(saveDataFileMds);				
      } else if (!statsOrValidate.stats && statsOrValidate.validate) {
        const promises = files.map(file => validate(getAllLinksFile(file)));
        Promise.all(promises).then(responses => resolve(responses));
      } else {
        saveDataFileMds = files.map(file => getAllLinksFile(file));
        resolve(saveDataFileMds);	
      }
    } catch (err) {
      reject(err);
    }    
  });
};

mdLinks(inputPath, statsValidate)
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.log(err);
  });