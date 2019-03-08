import {getAllLinksFile} from '../src/controllers/getAllLinks.js';

const inputDirMd = 'D:\\jperez\\Repositorios\\LIM008-fe-md-links\\pruebita\\DIR2\\README_Cipher.md';
const outDataLinksMd = [
  {'file': 'D:\\jperez\\Repositorios\\LIM008-fe-md-links\\pruebita\\DIR2\\README_Cipher.md',
    'href': 'https://en.wikipedia.org/wiki/Caesar_cipher',
    'text': 'cifrado César'},
  {'file': 'D:\\jperez\\Repositorios\\LIM008-fe-md-links\\pruebita\\DIR2\\README_Cipher.md',
    'href': 'https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/',
    'text': 'Enlace'}];

const inputDirMdEmpty = 'D:\\jperez\\Repositorios\\LIM008-fe-md-links\\pruebita\\prueba2.md';
const outFailGetOnlyMds = [{'file': 'D:\\jperez\\Repositorios\\LIM008-fe-md-links\\pruebita\\prueba2.md', 'href': '', 'text': ''}];

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