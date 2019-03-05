const fetch = require ( 'node-fetch' ) ;

export const readLinks = (urlHttp, callback) =>{
    fetch(urlHttp)
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
        callback(error.message);
    });
}