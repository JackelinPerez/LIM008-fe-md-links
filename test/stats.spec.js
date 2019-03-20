import {stats, statsValidateAllFiles} from '../src/controllers/stats.js';
import {dirRelativeToAbsolute} from '../src/controllers/getAllMd.js';


const inputDataLinks = [ { file:
    dirRelativeToAbsolute('pruebita/prueba1.md'),
text: 'Markdown',
href: 'https://es.wikipedia.org/wiki/Markdownasdas' },
{ file:
    dirRelativeToAbsolute('pruebita/prueba1.md'),
text: 'Markdown',
href: 'https://es.wikipedia.org/wiki/Markdownasdas' },
{ file:
    dirRelativeToAbsolute('pruebita/prueba1.md'),
text: 'Markdown',
href: 'https://es.wikipedia.org/wiki/Markdownasdas' } ];
const inputEmpty = [];
const outDataLink = {file: dirRelativeToAbsolute('pruebita/prueba1.md'), total: 3, unique: 1};
const outDataLinkValidate = [{file: dirRelativeToAbsolute('pruebita/prueba1.md'), total: 3, unique: 1, broken: 3}];

describe('stats', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (stats)).toBe('function');
  });

  it('Deberia devolver una objeto con campos llenos', () => {
    expect(stats(inputDataLinks)).toEqual(outDataLink);
  });
});

describe('statsValidateAllFiles', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (statsValidateAllFiles)).toBe('function');
  });

  it('Deberia devolver una objeto con campos llenos', () => {
    expect(statsValidateAllFiles(inputDataLinks)).toEqual(outDataLinkValidate);
  });

  it('Deberia devolver una objeto con vacios', () => {
    expect(statsValidateAllFiles([[]])).toEqual([{}]);
  }); 
})