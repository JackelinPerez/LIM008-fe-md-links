import {validate} from '../src/controllers/validate.js';
import {dirRelativeToAbsolute} from '../src/controllers/getAllMd.js';

const inputLinks =
 [{file: dirRelativeToAbsolute('pruebita\\DIR2\\README_Cipher.md'),
   href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
   text: 'cifrado César'},
 {file: dirRelativeToAbsolute('pruebita\\DIR2\\README_Cipher.md'),
   href: 'https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/',
   text: 'Enlace'}];
const outLinks =
   [{file: dirRelativeToAbsolute('pruebita\\DIR2\\README_Cipher.md'),
     href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
     text: 'cifrado César',
     statusValue: '200',
     statusMessage: 'OK',
   },
   {file: dirRelativeToAbsolute('pruebita\\DIR2\\README_Cipher.md'),
     href: 'https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/',
     text: 'Enlace',
     statusValue: '200',
     statusMessage: 'OK',    
   }];
const inputFailLinks =
   [{file: dirRelativeToAbsolute('pruebita\\prueba2.md'),
     href: '',
     text: ''}];
const outFailLinks =
  [{file: dirRelativeToAbsolute('pruebita\\prueba2.md'),
    href: '',
    text: '',
    statusValue: 'empty',
    statusMessage: 'empty', }];

describe('validate', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (validate)).toBe('function');
  });
  it('Deberia devolver un arreglo de promesas de tipo Object', (done) => {
    validate(inputLinks).then((resolve) => {
      expect(typeof (resolve)).toBe('object');
      done();
    });
  });
  it('Deberia devolver un arreglo de promesas con ', (done) => {
    validate(inputLinks).then((resolve) => {
      expect(resolve).toEqual(outLinks);
      done();
    });
  });
  it('Deberia devolver un arreglo de promesas con campos vacios ', (done) => {
    validate(inputFailLinks).then((resolve) => {
      expect(resolve).toEqual(outFailLinks);
      done();
    });
  });  
});