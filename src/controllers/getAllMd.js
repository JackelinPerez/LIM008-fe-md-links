import {path, fs} from '../util/util.js';

export const dirRelativeToAbsolute = (inputPath) => {
  const pathIsAbsolute = path.isAbsolute(inputPath);
  return !pathIsAbsolute ? path.resolve(inputPath) : inputPath;
};
export const getAllFilesMd = (absolutePath, mdPaths) => {
  try {
    if (fs.statSync(absolutePath).isDirectory()) {
      let childPaths = fs.readdirSync(absolutePath);
      childPaths.forEach((childPath) => {
        let absoluteChildPath = path.join(absolutePath, childPath);
        getAllFilesMd(absoluteChildPath, mdPaths);		
      });
    } else if (path.extname(absolutePath).toLowerCase() === '.md')
      mdPaths.push(absolutePath);		  
    return mdPaths;	
  } catch (err) {
    throw err.message;
  }
};