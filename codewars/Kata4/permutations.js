const permutations = (string) => {
  const charsArr = string.split('');
  let result = [];

  const permute = (charsArr, m=[]) => {
    if (charsArr.length === 0) {
      console.log('emptyyyyyyy');
      result.push(m);
    } else {
      for (let i = 0; i < charsArr.length; i++) {
        let curr = charsArr.slice(); //Zero-based index at which to start extraction.
         console.log('curr', curr);
        let next = curr.splice(i, 1); //delete 1 element at index i
         console.log('next', next);
         console.log('m.concat(next)', m.concat(next));
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(charsArr);
  return checkForDuplicates(result);
}

const checkForDuplicates = (result) => {
  let obj = {};

  for (let i = 0; i < result.length; i++) {
    if (!obj[result[i]]) {
      obj[result[i]] = 1
    } else {
      obj[result[i]] ++;
    }
  }
  let newArr = [];
  Object.entries(obj).forEach(([key, value]) => {
    newArr.push(key);
  })
  return newArr.map((str) => {
    return str.replace(/,/g, '');
  })
}


 //console.log(permutations('a'));
// console.log(permutations('ab'));
 //console.log(permutations('aabb'));


//console.log(permutations('cat'));
// curr [ 'c', 'a', 't' ]
// next [ 'c' ]
// m.concat(next) [ 'c' ]
// curr [ 'a', 't' ]
// next [ 'a' ]
// m.concat(next) [ 'c', 'a' ]
// curr [ 't' ]
// next [ 't' ]
// m.concat(next) [ 'c', 'a', 't' ]
// emptyyyyyyy
// curr [ 'a', 't' ]
// next [ 't' ]
// m.concat(next) [ 'c', 't' ]
// curr [ 'a' ]
// next [ 'a' ]
// m.concat(next) [ 'c', 't', 'a' ]
// emptyyyyyyy
// curr [ 'c', 'a', 't' ]
// next [ 'a' ]
// m.concat(next) [ 'a' ]
// curr [ 'c', 't' ]
// next [ 'c' ]
// m.concat(next) [ 'a', 'c' ]
// curr [ 't' ]
// next [ 't' ]
// m.concat(next) [ 'a', 'c', 't' ]
// emptyyyyyyy
// curr [ 'c', 't' ]
// next [ 't' ]
// m.concat(next) [ 'a', 't' ]
// curr [ 'c' ]
// next [ 'c' ]
// m.concat(next) [ 'a', 't', 'c' ]
// emptyyyyyyy
// curr [ 'c', 'a', 't' ]
// next [ 't' ]
// m.concat(next) [ 't' ]
// curr [ 'c', 'a' ]
// next [ 'c' ]
// m.concat(next) [ 't', 'c' ]
// curr [ 'a' ]
// next [ 'a' ]
// m.concat(next) [ 't', 'c', 'a' ]
// emptyyyyyyy
// curr [ 'c', 'a' ]
// next [ 'a' ]
// m.concat(next) [ 't', 'a' ]
// curr [ 'c' ]
// next [ 'c' ]
// m.concat(next) [ 't', 'a', 'c' ]
// emptyyyyyyy
// [
//   [ 'c', 'a', 't' ],
//   [ 'c', 't', 'a' ],
//   [ 'a', 'c', 't' ],
//   [ 'a', 't', 'c' ],
//   [ 't', 'c', 'a' ],
//   [ 't', 'a', 'c' ]
// ]

//another attempt:
function permutations(str) {
 return (str.length <= 1) ? [str] :
         Array.from(new Set(
           str.split('')
              .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
              .reduce((r, x) => r.concat(x), [])
         ));
}
