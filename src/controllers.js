import {getAllFilesMd, dirRelativeToAbsolute} from './controllers/getAllMd.js';
import {getAllLinksFile} from './controllers/getAllLinks.js';
import {validate} from './controllers/validate.js';

export const mdLinks = (dir, option) => {  
  return new Promise((resolve, reject) => {
    try {
      let saveDataFileMds = [];
      const files = getAllFilesMd(dirRelativeToAbsolute(dir), []);
	
      if (option.validate) {
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
