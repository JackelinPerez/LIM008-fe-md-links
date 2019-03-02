import {getAllMds} from "./controllers/getAllMd.js";
let statsOrValidate = [];
const dir_ = process.argv[2];
const exten_ = process.argv[3];

statsOrValidate[0] = process.argv[4];
statsOrValidate[1] = process.argv[5];


const mdLinks = (dir, exten, statsOrValidate) =>{
	return new Promise ((resolve, reject) =>{
		try {
            let contAllFile = [];
            return resolve(getAllMds(dir, exten, contAllFile, 0, 0))
		}
		catch (err){
			reject(err);
		}    
});

mdLinks(dir_, exten_, statsOrValidate)
.then((resolve) =>{
    console.log(resolve);
})
.catch((err) =>{
    console.log(err);
});