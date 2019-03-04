import {path, fs} from '../util/util.js';

export const getAllLinksFiles= (dirFilesMds) => {
    const arrayDataLinks = [];
    const readFileMd = fs.readFileSync(dirFilesMds).toString();
    const reglinkIntoMd = new RegExp (/[^!]\[.*\]\(.*\)/g);
    const regDeleteSpace = new RegExp(/(\s)|(\n)/);
    const regDirHref = new RegExp(/\(.*\)/g);
    const regTextHref = new RegExp(/\[.*\]/g);
    let arrayMatchLinks = readFileMd.match(reglinkIntoMd);
    if(arrayMatchLinks !== null){
        arrayMatchLinks.forEach((ele, index) => {
            const saveLinks = {file: '', href: '', text: '',};    
            let newHref = ele.replace(regDeleteSpace,'');
            saveLinks.file = dirFilesMds;
            saveLinks.href = newHref.match(regDirHref)[0];
            saveLinks.text = newHref.match(regTextHref)[0];
            arrayDataLinks.push(saveLinks);
        });
    }

    return arrayDataLinks;
}
// console.log(getAllLinksFiles('../../README.md'));

