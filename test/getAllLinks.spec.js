import {getAllFilesMd, dirRelativeToAbsolute} from '../src/controllers/getAllMd.js';
import {getAllLinksFiles} from '../src/controllers/getAllLinks.js';
const outGetAllMds = [
"pruebita\\DIR1\\hijo1DIR1.md",
"pruebita\\DIR1\\hijo2DIR1.md",
"pruebita\\DIR1\\README_mdLinks.md",
"pruebita\\DIR2\\hijo1DIR2.md",
"pruebita\\DIR2\\README_Cipher.md",
"pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md",
"pruebita\\DIR3\\DIR3.1\\README_dataLovers.md",
'pruebita\\prueba1.md',
'pruebita\\prueba2.md',
'pruebita\\prueba3.md',
'pruebita\\prueba4.md',
];
const inputDirMd = 'D:\\jperez\\Repositorios\\LIM008-fe-md-links\\pruebita\\DIR2\\README_Cipher.md';
const inputDirMdEmpty = 'D:\\jperez\\Repositorios\\LIM008-fe-md-links\\pruebita\\prueba2.md';
const outDataLinksMd = [
    {"file": "D:\\jperez\\Repositorios\\LIM008-fe-md-links\\pruebita\\DIR2\\README_Cipher.md",
     "href": "https://en.wikipedia.org/wiki/Caesar_cipher",
     "text": "cifrado César"},
    {"file": "D:\\jperez\\Repositorios\\LIM008-fe-md-links\\pruebita\\DIR2\\README_Cipher.md",
    "href": "https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/",
     "text": "Enlace"}];
const inputGetOnlyMds = '.\\pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md';
const inputFailGetOnlyMds = '.\\pruebita\\DIR1\\DIR3.1\\hijo1DIR3_1.md';
const outFailGetOnlyMds = [{"file": "D:\\jperez\\Repositorios\\LIM008-fe-md-links\\pruebita\\prueba2.md", "href": "", "text": ""}];
const outGetOnlyMds = ['.\\pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md'];
const outDirRelToAbsolute = 'D:\\jperez\\Repositorios\\LIM008-fe-md-links\\src\\controllers\\pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md';

describe('getAllFilesMd', () => {
    it('Deberia ser una funcion', () => {
        expect(typeof (getAllFilesMd)).toBe('function');
    });
    it('Deberia obtner un array .mds', () => {
        expect(getAllFilesMd('.\\pruebita', '.md', [])).toEqual(outGetAllMds);
    });
    it('Deberia obtner la ruta si es un archivo .md', () => {
        expect(getAllFilesMd(inputGetOnlyMds, '.md', [])).toEqual(outGetOnlyMds);
    });
    // it('Deberia obtner un mensaje de error si no existe la ruta', () => {
    //     expect(getAllFilesMd(inputFailGetOnlyMds, '.md', []).toEqual(undefined));
    // });     
});

describe('dirRelativeToAbsolute',() => {
    it('Deberia ser una funcion',() => {
        expect(typeof (dirRelativeToAbsolute)).toBe('function');
    });
    it('Deberia obtner una ruta Absoluta', () => {
        expect(dirRelativeToAbsolute(inputGetOnlyMds)).toEqual(outDirRelToAbsolute);
    });    
});
describe('getAllLinksFiles',() => {
    it('Deberia ser una funcion',() => {
        expect(typeof (getAllLinksFiles)).toBe('function');
    });
    it('Deberia obtner un array de links del contenido de un archivo .md', () => {
        expect(getAllLinksFiles(inputDirMd)).toEqual(outDataLinksMd);
    });
    it('Deberia obtner un array con objeto data vacio de links del contenido de un archivo .md', () => {
        expect(getAllLinksFiles(inputDirMdEmpty)).toEqual(outFailGetOnlyMds);
    });    
});