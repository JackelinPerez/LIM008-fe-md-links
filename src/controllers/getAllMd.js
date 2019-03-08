import {path, fs} from '../util/util.js';

export const dirRelativeToAbsolute = (inputPath) => {
  const pathIsAbsolute = path.isAbsolute(inputPath);
  return pathIsAbsolute !== true ? path.resolve(inputPath) : inputPath;
};
export const getAllFilesMd = (absolutePath, extenFile, mdPaths) => {
  try {
    if (fs.statSync(absolutePath).isDirectory()) {
      let childPaths = fs.readdirSync(absolutePath);
      childPaths.forEach((childPath) => {
        let absoluteChildPath = path.join(absolutePath, childPath);
        getAllFilesMd(absoluteChildPath, extenFile, mdPaths);		
      });
    } else if (path.extname(absolutePath) === extenFile)
      mdPaths.push(absolutePath);		  
    return mdPaths;	
  } catch (err) {
    throw err.message;
  }
};