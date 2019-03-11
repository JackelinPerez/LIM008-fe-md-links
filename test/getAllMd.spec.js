import {getAllFilesMd, dirRelativeToAbsolute} from '../src/controllers/getAllMd.js';

const inputPathRelative = '.\\pruebita';
const outGetAllMds = [
  'pruebita\\DIR1\\hijo1DIR1.md',
  'pruebita\\DIR1\\hijo2DIR1.md',
  'pruebita\\DIR1\\README_mdLinks.md',
  'pruebita\\DIR2\\hijo1DIR2.md',
  'pruebita\\DIR2\\README_Cipher.md',
  'pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md',
  'pruebita\\DIR3\\DIR3.1\\README_dataLovers.md',
  'pruebita\\prueba1.md',
  'pruebita\\prueba2.md',
  'pruebita\\prueba3.md',
  'pruebita\\prueba4.md',
];


const inputGetOnlyMds = dirRelativeToAbsolute('.\\pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md');
const outGetOnlyMds = [dirRelativeToAbsolute('.\\pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md')];
const outDirRelToAbsolute = dirRelativeToAbsolute('.\\pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md');
const inputFailGetOnlyMds = '.\\pruebita\\DIR1\\DIR3.1\\hijo1DIR3_1.md';


describe('getAllFilesMd', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (getAllFilesMd)).toBe('function');
  });
  it('Deberia obtner un array .mds', () => {
    expect(getAllFilesMd(inputPathRelative, [])).toEqual(outGetAllMds);
  });
  it('Deberia obtner la ruta si es un archivo .md', () => {
    expect(getAllFilesMd(inputGetOnlyMds, [])).toEqual(outGetOnlyMds);
  });
  it('Deberia obtner un mensaje de error si no existe la ruta', () => {
    try {
      getAllFilesMd(inputFailGetOnlyMds, []);
    } catch (e) {
      expect(e).toEqual(`ENOENT: no such file or directory, stat '${inputFailGetOnlyMds}'`);
    }
  });     
});

describe('dirRelativeToAbsolute', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (dirRelativeToAbsolute)).toBe('function');
  });
  it('Deberia obtner una ruta Absoluta', () => {
    expect(dirRelativeToAbsolute(inputGetOnlyMds)).toEqual(outDirRelToAbsolute);
  });
  it('Deberia devolver la ruta absoluta si ingreso una ruta absoluta', () => {
    expect(dirRelativeToAbsolute(outDirRelToAbsolute)).toEqual(outDirRelToAbsolute);
  });      
});
