import {getAllFilesMd, dirRelativeToAbsolute} from "./controllers/getAllMd.js";
import {getAllLinksFiles} from "./controllers/getAllLinks.js";
import {validateStats} from "./controllers/validateStats.js"

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
			// console.log(arrayDir);
			console.log(statsOrValidate);

			arrayDir.forEach(element => {
				saveDataFileMds.push(getAllLinksFiles(element));
			});
            return resolve(saveDataFileMds);
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