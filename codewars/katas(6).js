const ls = [0, 1, 3, 6, 10]; //[20, 20, 19, 16, 10, 0]
const ls2 = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]; //[10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]

const sumOfParts = (ls) => {
  ls.unshift(0); //0, 0, 1, 3, 6, 10
  console.log(ls);

  let sum = ls.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return ls.map((num) => { //20 = 20-0, 20 = 20-0, 20=20-1, 19=19-3, 16=16-6 etc
    return sum = sum - num;
  })
}

console.log(sumOfParts(ls));

const ex = "abcde" //0
const ex2 = "indivisibility" // i 6 times
const ex3 = "aA11" // a twice and 1 twice

const duplicates = (ex) => {
  let arr =  ex.split('').slice().sort();
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i].toLowerCase();
    if (!obj[char]) {
      obj[char] =1
    } else {
      obj[char] += 1;
    }
  }

  const frequency = Object.values(obj);
  let result = [];
  const count = frequency.map((val) => {
    return val > 1 ? result.push(val) :result
  })
  return result.length;
}

console.log(duplicates(ex2));


const arr = ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"] //["WEST", "WEST"]
const arr2 = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"] //[]
const arr3 = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] //["WEST"]
const arr4 = ["SOUTH", "WEST", "NORTH", "NORTH", "EAST", "EAST"] // ["NORTH", "EAST"]

const directionsReduction = (arr) => {
  let horizontal = [];
  let vertical = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "NORTH" || arr[i] === "SOUTH") {
      vertical.push(arr[i]);
    } else {
      horizontal.push(arr[i]);
    }
  }
  const vertValues = Object.values(frequency(vertical));
  const horValues = Object.values(frequency(horizontal));

  console.log("horvalues", horValues);
  console.log("vertValues", vertValues);

  if (horValues[0] === horValues[1]) {
    result.push(horValues[0], horValues[1]);
    console.log(result);
  }
  if (horValues[0] > horValues[1]) {
    let count = horValues[0] - horValues[1];
    console.log('count e', count);
    result = repeat("EAST", count);
  } else if (horValues[0] < horValues[1]) {
    let count = horValues[1] - horValues[0];
    console.log('count  w', count);
    result = repeat("WEST", count);
    }

  if (vertValues[0] > vertValues[1]) {
    let count = horValues[0] - horValues[1];
    console.log('count n', count);
    result.push(repeat("NORTH", count));
  } else if (vertValues[0] < vertValues[1]) {
    let count = horValues[1] - horValues[0];
    console.log('count s', count);
    result.push(repeat("SOUTH", count));
    }

    return [].concat.apply([], result);
    // result.flatMap(val => {
    //   if(Array.isArray(val)) {
    //     return val
    //   } else {
    //     return [val];
    //   }
    // })
}

const frequency = (array) => {
  const arr = array.sort();
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (!obj[char]) {
      obj[char] =1
    } else {
      obj[char] += 1;
    }
  }
  return obj;
}

const repeat = (item, times) => {
  let res = [];
  for (let i = 0; i < times; i++) {
    res.push(item)
  }
  return res;
}

//console.log(directionsReduction(arr5));

const dirReduc = (arr) => {

  const opposite = {
    'NORTH': 'SOUTH',
    'EAST': 'WEST',
    'SOUTH': 'NORTH',
    'WEST': 'EAST'
  }

  return arr.reduce((dirs, dir) => {
    if (dirs[dirs.length - 1] === opposite[dir]) {
      dirs.pop();
    }
    else {
      dirs.push(dir);
    }
    return dirs;
  }, []);
}

console.log(dirReduc(arr3));





// const numMaths = (num) => {
//   let count = 0;
//
//   for (var i = 0; i < arr.length; i++) {
//     arr[i]
//     numMaths(arr)
//   }
//   return count;
// }
//
// const persistence = (num) => {
//   const numToString = num.toString(); //"39"
//
//   if (numToString.length === 1) { // false
//     return count;
//   }
//
//   const arr = numToString.split('').map(Number); // [3, 9]
//
//   arr.map((digit) => {
//     console.log("test", digit);
//   })
//   const sum = arr.reduce((a, b) => {
//     return a * b;
//   })
//   return sumMaths(sum); //27
// }

const persistence = (num) => {
  let array = num.toString().split(''); //['3', '9']

  let i = 0;
  for (i; i < array.length; i++) {
    num = array.reduce((x, y) => x * y);
  }
  return i;
}

console.log(persistence(39)); //3 cos 3*9=27 2*7=14, 1*4=4
console.log(persistence(999)); //4
console.log(persistence(4)); //0

const sum_pairs = (arr, num) => {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        newArr.push(arr[i]);
        newArr.push(arr[j]);
      }
    }
    //return undefined;
  }
  return newArr.slice(0, 2);
}

console.log(sum_pairs([11, 3, 7, 5], 10));
console.log(sum_pairs([4, 3, 2, 2, 4], 6));


const firstNonRepeatingLetter = (str) => {

  if (str.length === 0) {
    return '';
  }
  const array = str.toLowerCase().split('');
  console.log(array);
  // iterate over elements and filter
  const res = array.filter((v) => {
    // get the count of the current element in array
    // and filter based on the count
    return array.filter((v1) => {
      // compare with current element
      return v1 == v;
      // check length
    }).length == 1;
  })
  return res && res.length <= 0 ? '' : check(res[0], str);
}

const check = (letter, str) => {
  const array = str.split('');

  for (let i = 0; i < array.length; i++) {
    if (letter === array[i].toLowerCase()) {
      return array[i];
      console.log(array[i]);
    }
  }
}

//ternary:  (!obj[array[i]]) ? obj[array[i]] = 1 : obj[array[i]++];
//console.log(firstNonRepeatingLetter("stress")); //t
//console.log(firstNonRepeatingLetter("moonmen")); //e
//console.log(firstNonRepeatingLetter("abba")); //''
console.log(firstNonRepeatingLetter("sTreSs")); //T
