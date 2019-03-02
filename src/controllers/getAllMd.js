export const filtroDirAndFile = (document, extFile, dir, fs) => {
    const objMdAndDir = {
      file : [],
      dir: []
    };
    return document.reduce((anterior, doc) => {
      const rutaAllDoc = `${dir}\\${doc}`;
      const validateDir = fs.lstatSync(rutaAllDoc).isDirectory();
      if(validateDir) objMdAndDir.dir.push(rutaAllDoc);
      else if (doc.toLowerCase().indexOf(extFile)!==-1) objMdAndDir.file.push(rutaAllDoc);
      return objMdAndDir;
    }, {});
}

export const getAllMds= (dir, exten, contAllFile, contMain, lengthMain) => {
    let auxObjMdAndDir = {};
    const fs = require('fs');
    const validateDir = fs.lstatSync(dir).isDirectory();
  
    if (validateDir) {
      const items= fs.readdirSync(dir);
      if(items.length>0){
        auxObjMdAndDir = filtroDirAndFile(items, exten, dir, fs);
        if(auxObjMdAndDir.file.length > 0)
        auxObjMdAndDir.file.forEach((fileMD) => contAllFile.push(fileMD));
        
        if (auxObjMdAndDir.dir.length > 0) {
            auxObjMdAndDir.dir.forEach((dirEle, index) => {
              if(lengthMain === 0 && contMain ===0) lengthMain = auxObjMdAndDir.dir.length;
              if(index === contMain) contMain++;
              getAllMds(dirEle, exten, contAllFile, contMain);
            });     
        }
        else console.log('No hay + Directorios: '+dir);
      }
      else console.log('No hay hijos en: '+dir);
    }
    else {
      const fileInput = [dir.substr(dir.lastIndexOf('\\')+1,dir.length)];
      const dirFileInput = dir.substr(0,dir.lastIndexOf('\\'));
      return filtroDirAndFile(fileInput,exten,dirFileInput, fs).file;
    }
  
      if(lengthMain === contMain) return contAllFile;
      return 0;
}
  

