import {getAllFilesMd, dirRelativeToAbsolute} from './controllers/getAllMd.js';
import {getAllLinksFile} from './controllers/getAllLinks.js';
import {validate} from './controllers/validate.js';
import {stats} from './controllers/stats.js';

export const mdLinks = (dir, option) => {  
  return new Promise((resolve, reject) => {
    try {
      let saveDataFileMds = [];
      const files = getAllFilesMd(dirRelativeToAbsolute(dir), []);
	
      if (option.stats && option.validate) {
        const promises = files.map(file => validate(getAllLinksFile(file)));
        Promise.all(promises).then(responses => {
          const dataAllLinks = responses.map((response) => {
            const linksBroken = response.filter((dataLink) => (!((dataLink.statusValue.toString() >= 200) && (dataLink.statusValue.toString() < 400))));
            return {...stats(response), broken: linksBroken.length};
          });
          resolve(dataAllLinks);
        });
      } else if (option.stats && !option.validate) {
        saveDataFileMds = files.map(file => stats(getAllLinksFile(file)));
        resolve(saveDataFileMds);				
      } else if (!option.stats && option.validate) {
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
