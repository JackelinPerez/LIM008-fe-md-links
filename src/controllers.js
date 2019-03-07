import {getAllFilesMd, dirRelativeToAbsolute} from "./controllers/getAllMd.js";
import {getAllLinksFile} from "./controllers/getAllLinks.js";
import {validateStats} from "./controllers/validateStats.js";
import {validate} from './controllers/validate.js';
import {stats} from './controllers/stats.js';
import {statsOrValidate} from './util/util.js'

const inputPath = process.argv[2];
let statsValidate = statsOrValidate;
statsValidate = validateStats(process.argv[3], statsValidate);
statsValidate = validateStats(process.argv[4], statsValidate);

const mdLinks = (dir, statsOrValidate) =>{
	return new Promise ((resolve, reject) =>{
		try {
			let saveDataFileMds = []
			const files = getAllFilesMd(dirRelativeToAbsolute(dir), '.md',[]);

			if (statsOrValidate.states && statsOrValidate.validate) {
				const promises = files.map(file => validate(getAllLinksFile(file)));
				Promise.all(promises).then(responses => {
					const dataAllLinks = responses.map((response) =>{
						const LinksBroken = response.filter((dataLink)=>dataLink.statusValue!=='200');
						return {...stats(response), Broken: LinksBroken.length};
					});
					resolve(dataAllLinks);
				})
			}
			else if(statsOrValidate.states && !statsOrValidate.validate){
				saveDataFileMds = files.map(file => stats(getAllLinksFile(file)));
				resolve(saveDataFileMds);				
			}
			else if(!statsOrValidate.states && statsOrValidate.validate){
				const promises = files.map(file => validate(getAllLinksFile(file)));
				Promise.all(promises).then(responses => resolve(responses));
			}
			else {
				saveDataFileMds = files.map(file => getAllLinksFile(file));
				resolve(saveDataFileMds);	
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