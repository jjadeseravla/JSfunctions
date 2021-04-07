const score = require('../score.js');

describe ('score first func', () => {
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

  it.only('third func', () => {
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
