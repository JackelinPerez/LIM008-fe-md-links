import {fs, reglinkMd} from '../util/util.js';

export const getAllLinksFile = (fileMdPath) => {
  let dataLinks = [];
  let linksMatch;
  const readFileMd = fs.readFileSync(fileMdPath, 'utf8').toString();
  if (reglinkMd.test(readFileMd)) {
    while ((linksMatch = reglinkMd.exec(readFileMd)) !== null) {
      dataLinks.push({ 
        file: fileMdPath,
        text: linksMatch[1],
        href: linksMatch[2]
      });
    }
  } else dataLinks.push({file: fileMdPath, text: '', href: '', });
  return dataLinks;
};