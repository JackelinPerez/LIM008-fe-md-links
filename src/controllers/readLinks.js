const fetch = require('node-fetch') ;

export const readLinks = (url) => {
  return fetch(url)
    .catch((err) => {
      return {errorLinks: err.message};
    });
};