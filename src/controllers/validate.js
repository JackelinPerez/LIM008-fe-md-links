import readLinks from 'readLinks.js'

export const validate = (link) =>{
   const statusLink =  readLinks(link);
   return `${statusLink.status} ${statusLink.statusText}`;
}