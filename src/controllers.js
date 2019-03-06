import {getAllFilesMd, dirRelativeToAbsolute} from "./controllers/getAllMd.js";
import {getAllLinksFiles} from "./controllers/getAllLinks.js";
import {validateStats} from "./controllers/validateStats.js";
import {readLinks, getResponse} from './controllers/readLinks.js';

const inputPath = process.argv[2];
let statsOrValidate = {
	validate : false,
	states : false,
};
statsOrValidate = validateStats(process.argv[3], statsOrValidate);
statsOrValidate = validateStats(process.argv[4], statsOrValidate);

const mdLinks = (dir, statsOrValidate) =>{
	return new Promise ((resolve, reject) =>{
		try {
			const saveDataFileMds = []
			const arrayDir = getAllFilesMd(dirRelativeToAbsolute(dir), '.md',[]);
			console.log(statsOrValidate);

			if (statsOrValidate.states && statsOrValidate.validate) {

			}
			else if(statsOrValidate.states && !statsOrValidate.validate){

			}
			else if(!statsOrValidate.states && statsOrValidate.validate){
				const files = arrayDir;
				const promises = files.map(file => getResponse(file));
				Promise.all(promises).then(responses => resolve(responses))
			}
			else {
				arrayDir.forEach(dirMd => {
					saveDataFileMds.push(getAllLinksFiles(dirMd));
				});
				return resolve(saveDataFileMds);	
			}
		}
		catch (err){
			reject(err);
		}    
});
}
mdLinks(inputPath, statsOrValidate)
.then((resolve) =>{
    console.log(resolve);
})
.catch((err) =>{
    console.log(err);
});