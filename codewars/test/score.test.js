const score = require('../score.js');

describe ('score first func', () => {

  it('integration test i think as it should do the whole thing', () => {
    const arr = [1, 1, 1, 3, 1];
    const result = score.score(arr);
    const expected = 1100;
    expect(result).toEqual(expected);
  })

  it('second example: integration test i think as it should do the whole thing', () => {
    const arr = [5, 1, 3, 4, 1];
    const result = score.score(arr);
    const expected = 250;
    expect(result).toEqual(expected);
  })

  it('third example: integration test i think as it should do the whole thing', () => {
    const arr = [4, 4, 4, 3, 3];
    const result = score.score(arr);
    const expected = 400;
    expect(result).toEqual(expected);
  })

  it('fourth example: integration test i think as it should do the whole thing', () => {
    const arr = [2, 3, 4, 6, 2];
    const result = score.score(arr);
    const expected = 0;
    expect(result).toEqual(expected);
  })

  it ('the first bit', () => {
    const arr = [1, 1, 1, 3, 1];
    const result = score.scoreFunc(arr);
    const expected = {'1': 4, '3': 1};
    expect(result).toEqual(expected);
  })


  it ('test', () => {
      const obj = { '1': 4, '3': 1 };
      const result = score.arrayOfNumberAndCounts(obj);
      const expected = [
       {
         "count": 4,
         "number": "1",
       },
       {
         "count": 1,
         "number": "3",
       },
     ]
      expect(result).toEqual(expected);
  })

  it('second func', () => {
    const numberAndCounts = [
     {
       "count": 4,
       "number": "1",
     },
     {
       "count": 1,
       "number": "3",
     },
   ]
   const result = score.report(numberAndCounts);
   const expected =  [
     { number: "1", count: 3},
     { number: "1", count: 1},
     { number: "3", count: 1}
   ]
   expect(result).toEqual(expected);
 })

 it('second func second input', () => {
   const numberAndCounts = [
    {
      "count": 6,
      "number": "1",
    },
    {
      "count": 1,
      "number": "3",
    },
  ]
    const result = score.report(numberAndCounts);
    const expected =  [
      { number: "1", count: 3},
      { number: "1", count: 3},
      { number: "3", count: 1}
    ]
    expect(result).toEqual(expected);
  })

  it('third func', () => {
    const filteredObj = [
      { number: '1', count: 3 },
      { number: '1', count: 1 },
      { number: '3', count: 1, }
    ]
    const result = score.getPoints(filteredObj);
    const expected = 1100;
    expect(result).toEqual(expected);
  })
})
