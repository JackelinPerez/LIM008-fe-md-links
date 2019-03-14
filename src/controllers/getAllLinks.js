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
  // if (dataLinks.length < 1)
  //   dataLinks.push({file: fileMdPath, text: undefined, href: undefined });
  return dataLinks;
};