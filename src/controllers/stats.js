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
    {File: dataLinks[0].file, Total: links.length, Unique: saveUnike.length} : {File: dataLinks[0].file, Total: '', Unique: ''};
};