import {readLinks} from '../src/controllers/readLinks.js';

const inputFetch = 'https://es.wikipedia.org/wiki/Markdown';
const inputFailFetch = '';

describe('readLinks', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (readLinks)).toBe('function');
  });

  it('Deberia devolver una promesa', (done) => {
    readLinks(inputFetch).then((resolve) => {
      expect(resolve.status).toBe(200);
      done();
    });
  });

  it('Deberia obtner un mensaje de error si no existe la ruta', () => {
    try {
      readLinks(inputFailFetch);
    } catch (e) {
      expect(e).toEqual(null);
    }
  });    
});