const mergeStringChecker = require('../mergeStringChecker.js');

describe('merge string checker', () => {

  it('test', () => {
    const s = 'codewars';
    const str1 = 'code';
    const str2 ='wars';
    const result = mergeStringChecker.isMerge(s, str1, str2);
    const expected = true
    expect(result).toEqual(expected);
  })

})
