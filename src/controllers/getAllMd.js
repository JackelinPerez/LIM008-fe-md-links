import {path, fs} from '../util/util.js';

export const dirRelativeToAbsolute = (inputPath) => {
    const pathIsAbsolute = path.isAbsolute(inputPath);
    return pathIsAbsolute !== true ? path.resolve(__dirname,inputPath): inputPath;
}
export const getAllFilesMd= (dirAbsOrRel, extenFile, savefilesMD) => {
  try {
    if (fs.statSync(dirAbsOrRel).isDirectory()) {
      let arrayChildDir = fs.readdirSync(dirAbsOrRel);
      arrayChildDir.forEach((childDir) => {
      let dirAbsOrRelChild = path.join(dirAbsOrRel, childDir);
      getAllFilesMd(dirAbsOrRelChild, extenFile, savefilesMD);		
      });
    }
    else if (path.extname(dirAbsOrRel) === extenFile)
      savefilesMD.push(dirAbsOrRel);		  
    return savefilesMD;	
  }
  catch (err) {
    return console.log(err.message);
  }
};