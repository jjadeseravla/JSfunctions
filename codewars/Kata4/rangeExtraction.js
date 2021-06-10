const rangeExtraction = (list) => {
  let newArr = [];
  let rangeArr = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] === list[i+1] -1) {
      rangeArr.push(list[i]);
      // console.log('rangeArr', rangeArr);
      // console.log('newArr', newArr);
    } else {
      //push first and last element in rangeArr to newArr
      newArr.push(rangeArr[0]);
      newArr = newArr.filter((elem) => elem !== undefined);

       if (newArr[0] && Number.isInteger(newArr[newArr.length-1]) &&  (newArr[newArr.length-1]!== list[i]-1)) {
        console.log('n', typeof newArr[newArr.length-1]);
        console.log('l', list[i]);
        newArr[newArr.length-1] += `-${list[i]}`
      } else {
        newArr.push(`${list[i]}`)
      }
      //empty rangeArr
      rangeArr = [];
     }
  }
  // console.log('rangeArr', rangeArr);
  const spacedArr = newArr.map((elem) => elem.toString());
  console.log('spacedArr', spacedArr);
  return spacedArr.join();
}

console.log(rangeExtraction([-3,-2,-1,2,10,15,16,18,19,20]));
//'-3--1,2,10,15,16,18-20'

console.log(rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
//"-6,-3-1,3-5,7-11,14,15,17-20"

// -6,    1,   5,   11,    15,    20
//"-6, -3-1, 3-5, 7-11, 14,15, 17-20"


//[
//   -6, undefined, undefined,
//   1,  -3,        0,
//   5,  3,         4,
//   11, 7,         10,
//   15, 14,        14,
//   20, 17,        19
// ]
