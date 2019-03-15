export const stats = (dataLinks) => {
  let saveUnike = [];
  const links = dataLinks.map(dataLink => dataLink.href);

  if (links[0]) {
    const unikeLinks = links.reduce((objLinks, link) => {
      objLinks[link] = (objLinks[link] || 0) + 1;
      return objLinks;
    }, {});
    saveUnike = Object.keys(unikeLinks);
    return {file: dataLinks[0].file, total: links.length, unique: saveUnike.length};
  } else return {};
};

export const statsAllFiles = (allDataLinks) => {
  return allDataLinks.map(dataLinks => stats(dataLinks));
};

export const statsValidateAllFiles = (allDataLinks) => {
  return Promise.all(allDataLinks).then(responses => {
    const dataAllLinks = responses.map((response) => {
      const linksBroken = response.filter((dataLink) => (!(dataLink.status >= 200 && dataLink.status < 400)));
      return (response.length > 0) ? {...stats(response), broken: linksBroken.length} : {};
    });
    return dataAllLinks;
  });
};