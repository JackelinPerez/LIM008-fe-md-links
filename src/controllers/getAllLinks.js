import {fs, reglinkMd} from '../util/util.js';

export const getAllLinksFile = (fileMdPath) => {
  let dataLinks = [];
  let linksMatch;
  const readFileMd = fs.readFileSync(fileMdPath, 'utf8').toString();
  while ((linksMatch = reglinkMd.exec(readFileMd)) !== null) {
    dataLinks.push({ 
      file: fileMdPath,
      text: linksMatch[1].substr(0, 50),
      href: linksMatch[2]
    });
  }
  return dataLinks;
};

export const getAllLinksFiles = (files) => {
  return files.map(file => getAllLinksFile(file));
};