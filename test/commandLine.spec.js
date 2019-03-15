import {cli} from '../src/commandLine.js';
import {dirRelativeToAbsolute} from '../src/controllers/getAllMd.js';

const inputDirMd = dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md');
const inputDirMdEmpty = dirRelativeToAbsolute('pruebita/prueba3.md');

const outDirMdEmpty = [{}];

const outDirMd = [
  [{file: dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'), 
    href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
    text: 'cifrado César'},
  {file: dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'), 
    href: 'https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/',
    text: 'Enlace'}]
];

const outDirMdValidate = [
  [{file: dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'), 
    href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
    text: 'cifrado César',
    statusMessage: 'OK',
    status: 200},
  {file: dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'), 
    href: 'https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/',
    text: 'Enlace',
    statusMessage: 'OK',
    status: 200}]
];

const outDirMdStatsValidate = [
  {broken: 0, 
    file: dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'),
    total: 2, 
    unique: 2}
];

const outDirMdStats = [
  {file: dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'),
    total: 2, 
    unique: 2}
];

describe('cli', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (cli)).toBe('function');
  });

  it('Si existe estadisticas y validate entonces devolver un arreglo de objetos incluyendo el campo broken', (done) => {
    cli(inputDirMd, 0, {validate: false})
      .then(resolve => {
        expect(resolve).toEqual(outDirMd);
        done();
      });
  });

  it('Si existe estadisticas y validate entonces devolver un arreglo de objetos incluyendo el campo broken', (done) => {
    cli(inputDirMd, 0, {validate: true})
      .then(resolve => {
        expect(resolve).toEqual(outDirMdValidate);
        done();
      });
  });

  it('Si existe estadisticas y validate entonces devolver un arreglo de objetos incluyendo el campo broken', (done) => {
    cli(inputDirMd, 1, {validate: true})
      .then(resolve => {
        expect(resolve).toEqual(outDirMdStatsValidate);
        done();
      });
  });

  it('Si existe estadisticas y validate entonces devolver un arreglo de objetos incluyendo el campo broken', (done) => {
    cli(inputDirMdEmpty, 1, {validate: true})
      .then(resolve => {
        expect(resolve).toEqual(outDirMdEmpty);
        done();
      });
  });  

  it('Si existe estadisticas y validate entonces devolver un arreglo de objetos incluyendo el campo broken', (done) => {
    cli(inputDirMd, 1, {validate: false})
      .then(resolve => {
        expect(resolve).toEqual(outDirMdStats);
        done();
      });
  });  
});
