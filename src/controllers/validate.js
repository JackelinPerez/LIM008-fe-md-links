import {readLinks} from './readLinks.js';

export const validate = (links) => {
  const promises = links.map(link => {
    return readLinks(link.href)
      .then(response => {
        return {
          ...link,
          statusValue: !response.errorLinks ? `${response.status}` : '---',
          statusMessage: !response.errorLinks ? `${response.statusText}` : response.errorLinks
        };
      });
  });

  return Promise.all(promises);
};
