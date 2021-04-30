const fibonacci = (n) => {
  let arr = [0, 1];

  for (let i = 2; i < n+1; i++) {
    arr.push( arr[i-2] + arr[i-1] )
  }
  return arr[n];
}

console.log(fibonacci(15)); //610 cos 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610



const howManyOfGivenLetterInStringRepeatedGivenTimes = (givenStrToRepeat, letter, repeatToNChars) => {

  const arr = givenStrToRepeat.split('');
  const repeated = new Array(repeatToNChars).fill(arr).flat();
  const correctLenghArr =  repeated.slice(0, repeatToNChars);
  let newArr = [];

  correctLenghArr.map((char) => {
    if (char === letter) {
      return newArr.push(char);
    }
  })
  return newArr.length;
}

//new Array(10) --> new arr of 10 undefined elements
//   //.fill(['a', 'b', 'c', 'a', 'c']) --> [
//   [ 'a', 'b', 'c', 'a', 'c' ],
//   [ 'a', 'b', 'c', 'a', 'c' ],
//   [ 'a', 'b', 'c', 'a', 'c' ],
//   [ 'a', 'b', 'c', 'a', 'c' ],
//   [ 'a', 'b', 'c', 'a', 'c' ],
//   [ 'a', 'b', 'c', 'a', 'c' ],
//   [ 'a', 'b', 'c', 'a', 'c' ],
//   [ 'a', 'b', 'c', 'a', 'c' ],
//   [ 'a', 'b', 'c', 'a', 'c' ],
//   [ 'a', 'b', 'c', 'a', 'c' ]
// ]
//.flat() --> [
//   'a', 'b', 'c', 'a', 'c', 'a', 'b', 'c',
//   'a', 'c', 'a', 'b', 'c', 'a', 'c', 'a',
//   'b', 'c', 'a', 'c', 'a', 'b', 'c', 'a',
//   'c', 'a', 'b', 'c', 'a', 'c', 'a', 'b',
//   'c', 'a', 'c', 'a', 'b', 'c', 'a', 'c',
//   'a', 'b', 'c', 'a', 'c', 'a', 'b', 'c',
//   'a', 'c'
// ]
//.slice(0, 10) --> [
//   'a', 'b', 'c', 'a',
//   'c', 'a', 'b', 'c',
//   'a', 'c'
// ]
console.log(howManyOfGivenLetterInStringRepeatedGivenTimes('abcac', 'a', 10)); //4 a's cos 'abcacabcac'
