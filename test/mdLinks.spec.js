import {mdLinks} from '../src/mdLinks.js';
import {dirRelativeToAbsolute} from '../src/controllers/getAllMd.js';

const inputMdlinksDir = 'pruebita/DIR1/hijo1DIR1.md';
const inputMdFail = 'pruebitaLALA';
const optionTrue = {validate: true};
const optionFalse = {validate: false};
const outOptionTrue = [
  {file: dirRelativeToAbsolute('pruebita/DIR1/hijo1DIR1.md'),
    href: 'https://es.wikipedia.org/wiki/Markdownkasd',
    text: 'Markdown-------------',
    status: 404,
    statusMessage: 'FAIL'
  },
  {file: dirRelativeToAbsolute('pruebita/DIR1/hijo1DIR1.md'),
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown-----------------------------------------h',
    status: 200,
    statusMessage: 'OK'  
  },
  {file: dirRelativeToAbsolute('pruebita/DIR1/hijo1DIR1.md'),
    href: '',
    text: '',
    status: 'No existe Dominio',
    statusMessage: 'FAIL'
  },    
];
const outOptionFalse = [
  {file: dirRelativeToAbsolute('pruebita/DIR1/hijo1DIR1.md'),
    href: 'https://es.wikipedia.org/wiki/Markdownkasd',
    text: 'Markdown-------------'},
  {file: dirRelativeToAbsolute('pruebita/DIR1/hijo1DIR1.md'),
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown-----------------------------------------h'},
  {file: dirRelativeToAbsolute('pruebita/DIR1/hijo1DIR1.md'),
    href: '',
    text: ''},
];

describe('mdLinks', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (mdLinks)).toBe('function');
  });

  it('Deberia devolver una promesa', () => {
    mdLinks(inputMdlinksDir, optionTrue).then((resolve) => {
      expect(typeof (resolve)).toBe('object');
    });
  });

  it('Deberia devolver una promesa de arreglo de objetos con status y statusMessage', (done) => {
    mdLinks(inputMdlinksDir, optionTrue).then((resolve) => {
      expect(resolve).toEqual(outOptionTrue);
      done();
    });
  });

  it('Deberia devolver una promesa de arreglo de objetos con data especifica', (done) => {
    mdLinks(inputMdlinksDir, optionFalse).then((resolve) => {
      expect(resolve).toEqual(outOptionFalse);
      done();
    });
  });

  it('Deberia devolver un mensaje de error', (done) => {
    mdLinks(inputMdFail, optionFalse).catch((resolve) => {
      expect(resolve).toEqual('\n Directorio No existe');
      done();
    });
  });   
});