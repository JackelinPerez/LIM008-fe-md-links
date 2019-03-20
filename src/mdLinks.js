import {getAllFilesMd, dirRelativeToAbsolute} from './controllers/getAllMd.js';
import {getAllLinksFiles} from './controllers/getAllLinks.js';
import {validates} from './controllers/validate.js';

export const mdLinks = (dir, option) => {  
  return new Promise((resolve, reject) => {
    try {
      const files = getAllFilesMd(dirRelativeToAbsolute(dir), []);
      return (option.validate) ? validates(files).then(links => resolve(links)) : resolve(getAllLinksFiles(files));
    } catch (err) {
      reject('\n Directorio No existe');
    }    
  });
};
