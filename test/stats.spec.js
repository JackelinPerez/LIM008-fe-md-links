import {stats} from '../src/controllers/stats.js';
import {dirRelativeToAbsolute} from '../src/controllers/getAllMd.js';


const inputDataLinks = [ { file:
    dirRelativeToAbsolute('pruebita\\prueba1.md'),
text: 'Markdown',
href: 'https://es.wikipedia.org/wiki/Markdownasdas' },
{ file:
    dirRelativeToAbsolute('pruebita\\prueba1.md'),
text: 'Markdown',
href: 'https://es.wikipedia.org/wiki/Markdownasdas' },
{ file:
    dirRelativeToAbsolute('pruebita\\prueba1.md'),
text: 'Markdown',
href: 'https://es.wikipedia.org/wiki/Markdownasdas' } ];

const outDataLink = {file: dirRelativeToAbsolute('pruebita\\prueba1.md'), total: 3, unique: 1};
const inputEmpty = [
  { file: dirRelativeToAbsolute('pruebita\\prueba2.md'),
    text: '',
    href: '' }
];
const outputEmpty = {file: dirRelativeToAbsolute('pruebita\\prueba2.md'), total: '', unique: ''};

describe('stats', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (stats)).toBe('function');
  });

  it('Deberia devolver una objeto con campos llenos', () => {
    expect(stats(inputDataLinks)).toEqual(outDataLink);
  });
  
  it('Deberia devolver una objeto con algunos campos vacios', () => {
    expect(stats(inputEmpty)).toEqual(outputEmpty);
  });  
});