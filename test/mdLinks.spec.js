import {mdLinks} from '../src/mdLinks.js';
import {dirRelativeToAbsolute} from '../src/controllers/getAllMd.js';

const inputMdlinksDir = 'pruebita/DIR1/hijo1DIR1.md';
const optionTrue = {validate: true};
const optionFalse = {validate: false};
const outOptionTrue = [[]];
const outOptionFalse = [[]];

describe('mdLinks', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (mdLinks)).toBe('function');
  });

  it('Deberia devolver una promesa', () => {
    mdLinks(inputMdlinksDir, optionTrue).then((resolve) => {
      expect(typeof (resolve)).toBe('object');
    });
  });

  it('Deberia devolver una promesa de arreglo vacio', () => {
    mdLinks(inputMdlinksDir, optionTrue).then((resolve) => {
      expect(resolve).toEqual(outOptionTrue);
    });
  });

  it('Deberia devolver una promesa de arreglo vacio', () => {
    mdLinks(inputMdlinksDir, optionFalse).then((resolve) => {
      expect(resolve).toEqual(outOptionFalse);
    });
  });  
});