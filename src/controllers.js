import {getAllFilesMd, dirRelativeToAbsolute} from "./controllers/getAllMd.js";
import {getAllLinksFiles} from "./controllers/getAllLinks.js";

let statsOrValidate = [];
const dir_ = process.argv[2];

statsOrValidate[0] = process.argv[4];
statsOrValidate[1] = process.argv[5];


const mdLinks = (dir, statsOrValidate) =>{
	return new Promise ((resolve, reject) =>{
		try {
			const saveDataFileMds = []
			const arrayDir = getAllFilesMd(dirRelativeToAbsolute(dir), '.md',[]);
			console.log(arrayDir);
			
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
mdLinks(dir_, statsOrValidate)
.then((resolve) =>{
    console.log(resolve);
})
.catch((err) =>{
    console.log(err);
});