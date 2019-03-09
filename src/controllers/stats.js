export const stats = (dataLinks) => {
  let saveUnike = [];
  const links = dataLinks.map(dataLink => {
    return dataLink.href;
  });

  if (links[0] !== '') {
    const unikeLinks = links.reduce((objLinks, link) => {
      objLinks[link] = (objLinks[link] || 0) + 1;
      return objLinks;
    }, {});
    saveUnike = Object.keys(unikeLinks);
  }
  return (links[0] !== '') ? 
    {file: dataLinks[0].file, total: links.length, unique: saveUnike.length} : {file: dataLinks[0].file, total: '', unique: ''};
};