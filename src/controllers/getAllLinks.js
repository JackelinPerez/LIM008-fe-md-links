import {path, fs, reglinkIntoMd, regTextHref} from '../util/util.js';

export const getAllLinksFiles= (dirFilesMds) => {
    const arrayDataLinks = [];
    const readFileMd = fs.readFileSync(dirFilesMds).toString();
    let arrayMatchLinks = readFileMd.match(reglinkIntoMd);
    if(arrayMatchLinks !== null){
        arrayMatchLinks.forEach((link) => {
            const saveLinks = {file: '', href: '', text: '',};
            const dataLink = link.match(regTextHref);
            saveLinks.file = dirFilesMds;
            saveLinks.text = dataLink[1];
            saveLinks.href = dataLink[2];
            arrayDataLinks.push(saveLinks);
        });
    }
    return arrayDataLinks;
}

