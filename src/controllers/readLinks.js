import { getAllLinksFiles } from './getAllLinks';

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

export const fetchPage = (url) => {
        return fetch(url)
        .catch((err) =>  null )
}


export const getResponse = (file) => {
    const promises = getAllLinksFiles(file).map(link => {
        return fetchPage(link.href)
        .then(response => {
            return {
                file: link.file,
                href: link.href,
                test: link.text,
                status: !!response ? `${response.statusText} ${response.status}` : "roto"
            }
        })
    })

    return Promise.all(promises)
}
