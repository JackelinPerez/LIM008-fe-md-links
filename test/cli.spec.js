import {cli, statusOption, help, validateInputUser} from '../src/cli.js';
import {dirRelativeToAbsolute} from '../src/controllers/getAllMd.js';

const inputDirMd = dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md');
const inputDirMdEmpty = dirRelativeToAbsolute('pruebita/prueba3.md');
const inputFailPath = 'pruebitassss';
const inputCLI = ['--stats', '--validate'];
const inputFailCLI = ['--stats', '--validate', 'lalal'];
const outDirMdEmpty = [{}];
const outStatusOption = {stats: true, validate: true};

const outDirMd = [
  {file: dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'), 
    href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
    text: 'cifrado César'},
  {file: dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'), 
    href: 'https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/',
    text: 'Enlace'}
];

const outDirMdValidate = [
  {file: dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'), 
    href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
    text: 'cifrado César',
    status: 200,
    statusMessage: 'OK'},
  {file: dirRelativeToAbsolute('pruebita/DIR2/README_Cipher.md'), 
    href: 'https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/',
    text: 'Enlace',
    status: 200,
    statusMessage: 'OK',
  }
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
    cli(inputDirMd, {validate: false, stats: false})
      .then(resolve => {
        expect(resolve).toEqual(outDirMd);
        done();
      });
  });

  it('Si NO existe estadisticas y validate entonces devolver un arreglo de objetos incluyendo el campo broken', (done) => {
    cli(inputDirMd, {validate: true, stats: false})
      .then(resolve => {
        expect(resolve).toEqual(outDirMdValidate);
        done();
      });
  });

  it('Si existe estadisticas y NO validate entonces devolver un arreglo de objetos incluyendo el campo broken', (done) => {
    cli(inputDirMd, {validate: false, stats: true})
      .then(resolve => {
        expect(resolve).toEqual(outDirMdStats);
        done();
      });
  });

  it('Si existe estadisticas y validate entonces devolver un arreglo de objetos incluyendo el campo broken', (done) => {
    cli(inputDirMd, {validate: true, stats: true})
      .then(resolve => {
        expect(resolve).toEqual(outDirMdStatsValidate);
        done();
      });
  });

  it('Si el directorio No existe', (done) => {
    cli(inputFailPath, {validate: false, stats: true})
      .then((resolve) => {
        expect(resolve).toBe('\n Directorio No existe');
        done();
      });
  });   
});

describe('statusOption', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (statusOption)).toBe('function');
  });

  it('Deberia devolver un objeto con el estado de stats y validate', () => {
    expect(statusOption(['--stats', '--validate'])).toEqual(outStatusOption);
  });  
});

describe('validateInputUser', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (validateInputUser)).toBe('function');
  });

  it('Deberia validar la entrada del usuario, si la entrada es correcta devuelve OK', () => {
    expect(validateInputUser(inputCLI)).toEqual('OK');
  });

  it('Deberia validar la entrada del usuario, si la entrada es correcta devuelve OK', () => {
    expect(validateInputUser(inputFailCLI)).toEqual(` \n Algun campo es incorrecto, por favor introduzca campos validos
    \n Ejemplo: mdLinks [path] --validate --stats
    \n          mdLinks [path] --stats
    \n          mdLinks [path] --validate`);
  });  
});