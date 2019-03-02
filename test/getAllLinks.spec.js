import {filtroDirAndFile, getAllMds} from '../src/controllers/getAllMd.js';

const outGetAllMds = [ '.\\pruebita\\prueba1.md',
'.\\pruebita\\prueba2.md',
'.\\pruebita\\prueba3.md',
'.\\pruebita\\prueba4.md',
'.\\pruebita\\DIR1\\hijo1DIR1.md',
'.\\pruebita\\DIR1\\hijo2DIR1.md',
'.\\pruebita\\DIR2\\hijo1DIR2.md',
'.\\pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md'];

const outGetOnlyMds = ['.\\pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md'];

describe('filtroDirAndFile', () =>{
    it('Deberia ser una funcion', () => {
        expect(typeof (filtroDirAndFile)).toBe('function');
    });
})

describe('getAllMds', () => {
    it('Deberia ser una funcion', () => {
        expect(typeof (getAllMds)).toBe('function');
    });
    it('Deberia obtner todos un array .mds', () => {
        expect(getAllMds('.\\pruebita', '.md', [], 0, 0)).toEqual(outGetAllMds);
    });
    it('Deberia obtner todos lo .mds', () => {
        expect(getAllMds('.\\pruebita\\DIR3\\DIR3.1\\hijo1DIR3_1.md', '.md', [], 0, 0)).toEqual(outGetOnlyMds);
    });    
});