const calculator = require('../Kata3/calculator.js');

describe('Calculator', () => {

  it('should return the number for a string number input', () => {
    const calculator = new Calculator();
    const result = calculator.calculate.evaluate('127');
    const expected = 127;

    // const result = didYouMean.findMostSimilar(wordArr, word);
    // const expected = 'strawberry';
    expect(result).toEqual(expected);
  })
})
