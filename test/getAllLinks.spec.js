import {getAllLinksFile} from '../src/controllers/getAllLinks.js';
import {dirRelativeToAbsolute} from '../src/controllers/getAllMd.js';


const inputDirMd = dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md');
const outDataLinksMd = [
  {'file': dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'),
    'href': 'https://en.wikipedia.org/wiki/Caesar_cipher',
    'text': 'cifrado César'},
  {'file': dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'),
    'href': 'https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/',
    'text': 'Enlace'}];

const inputDirMdEmpty = dirRelativeToAbsolute('pruebita/prueba2.md');
const outFailGetOnlyMds = [];

describe('getAllLinksFile', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (getAllLinksFile)).toBe('function');
  });
  it('Deberia obtner un array de links del contenido de un archivo .md', () => {
    expect(getAllLinksFile(inputDirMd)).toEqual(outDataLinksMd);
  });
  it('Deberia obtner un array con objeto data vacio de links del contenido de un archivo .md', () => {
    expect(getAllLinksFile(inputDirMdEmpty)).toEqual(outFailGetOnlyMds);
  });    
});