import {fs, reglinkIntoMd, regTextHref} from '../util/util.js';

export const getAllLinksFile = (fileMdPath) => {
  let dataLinks = [];
  const readFileMd = fs.readFileSync(fileMdPath, 'utf8').toString();
  let linksMatch = readFileMd.match(reglinkIntoMd);
  if (linksMatch !== null) {
    dataLinks = linksMatch.reduce((dataLink, link) => {
      const textHref = link.match(regTextHref);
      dataLink.push({ 
        file: fileMdPath,
        text: textHref[1],
        href: textHref[2]
      });
      return dataLink;
    }, []);
  } else dataLinks.push({file: fileMdPath, text: '', href: '', });
  return dataLinks;
};