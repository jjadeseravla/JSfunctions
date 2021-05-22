const mergeStringChecker = require('../mergeStringChecker.js');

describe('merge string checker', () => {

  it('happy path first test', () => {
    const s = 'codewars';
    const str1 = 'code';
    const str2 ='wars';
    const result = mergeStringChecker.isMerge(s, str1, str2);
    const expected = true
    expect(result).toEqual(expected);
  })

  it('another example', () => {
    const s = 'codewars';
    const str1 = 'cdw';
    const str2 = 'oears';
    const result = mergeStringChecker.isMerge(s, str1, str2);
    const expected = true
    expect(result).toEqual(expected);
  })

  it('unhappy path third example', () => {
    const s = 'codewars';
    const str1 = 'cod';
    const str2 = 'wars';
    const result = mergeStringChecker.isMerge(s, str1, str2);
    const expected = false
    expect(result).toEqual(expected);
  })

})
