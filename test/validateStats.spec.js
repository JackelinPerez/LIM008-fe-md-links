import {validateStats} from '../src/controllers/validateStats.js';
let inputUser = {
  validate: false,
  stats: false,
};

describe('validateStats', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof (validateStats)).toBe('function');
  });

  it('Deberia devolver objeto ', () => {
    expect(validateStats('--stats', inputUser)).toEqual({stats: true, validate: false});
  });

  it('Deberia devolver objeto ', () => {
    expect(validateStats('--validate', inputUser)).toEqual({stats: true, validate: true});
  });  
});