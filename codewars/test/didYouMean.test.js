const didYouMean = require('../didYouMean.js');

describe('Did you mean?...', () => {

  it('happy path test using word actually in the array', () => {
    const wordArr = ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'];
    const word = 'strawberry';
    const result = didYouMean.findMostSimilar(wordArr, word);
    const expected = 'strawberry';
    expect(result).toEqual(expected);
  })

  it('makes an object from array', () => {
    const arr = ['s', 't', 'a', 'w', 'b', 'e', 'r', 'r', 'y'];
    const result = didYouMean.isObject(arr);
    const expected = {
                       "a": 1,
                       "b": 1,
                       "e": 1,
                       "r": 2,
                       "s": 1,
                       "t": 1,
                       "w": 1,
                       "y": 1
                      };
    expect(result).toEqual(expected);
  })
})
