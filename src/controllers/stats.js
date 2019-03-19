import {repeatedAccount} from '../util/util.js';

export const groupObjectsPath = (allDataLinks) => {
  const pathsMd = [...allDataLinks].map(obj => obj.file);
  return repeatedAccount(pathsMd).reduce((acumm, pathMd) => {
    let pathsMdLinks = [...allDataLinks].filter(dataLink => dataLink.file === pathMd);
    acumm.push(pathsMdLinks);
    return acumm;
  }, []);
};

export const stats = (dataLinks) => {
  const links = dataLinks.map(dataLink => dataLink.href);
  const saveUnike = repeatedAccount(links);
  return {file: dataLinks[0].file, total: links.length, unique: saveUnike.length};
};

export const statsAllFiles = (arraysAllDataLinks) => {
  return groupObjectsPath(arraysAllDataLinks).map(dataLinks => stats(dataLinks));
};

export const statsValidateAllFiles = (allDataLinks) => {
  return groupObjectsPath(allDataLinks).map((ele) => {
    const linksBroken = ele.filter((dataLink) => (!(dataLink.status >= 200 && dataLink.status < 400)));
    return (ele.length > 0) ? {...stats(ele), broken: linksBroken.length} : {};
  });
};

export const statsOrValidate = (dataLinks, validate) => {
  return (validate) ? statsValidateAllFiles(dataLinks) : statsAllFiles(dataLinks);
};