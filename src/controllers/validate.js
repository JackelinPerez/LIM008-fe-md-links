import {readLinks} from './readLinks.js';

export const validate = (links) => {
  const promises = links.map(link => {
    return readLinks(link.href)
      .then(response => {
        return {
          ...link,
          statusValue: !!response ? `${response.status}` : 'empty',
          statusMessage: !!response ? `${response.statusText}` : 'empty'
        };
      });
  });

  return Promise.all(promises);
};
